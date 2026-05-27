import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { caseStudies, getCaseStudyBySlug } from "@/content/cases";
import { getLocalizedText } from "@/content/news";
import { JsonLd } from "@/components/shared/JsonLd";
import { absoluteUrl, buildPageMetadata, localizedPath, normalizeLocale } from "@/lib/seo";

const detailUi = {
    ko: {
        back: "사례 목록으로 돌아가기",
        challenge: "시나리오 해설",
        stack: "적용 포인트",
        contactTitle: "현장 적용 가능성을 함께 검토해 보세요",
        contactBody:
            "설비 환경, 파일럿 범위, 운영 팀이 받아볼 알림 흐름까지 현재 상황에 맞춰 설명해 드립니다.",
        contactAction: "문의하기",
        moreCases: "다른 시나리오 보기",
    },
    en: {
        back: "Back to scenarios",
        challenge: "Scenario walkthrough",
        stack: "Application points",
        contactTitle: "Explore how this could fit your site",
        contactBody:
            "We can walk through deployment fit, pilot scope, and the alert flow your operations team would receive.",
        contactAction: "Contact us",
        moreCases: "Explore more scenarios",
    },
};

export function generateStaticParams() {
    return caseStudies.flatMap((caseStudy) => [
        { locale: "ko", id: caseStudy.slug },
        { locale: "en", id: caseStudy.slug },
    ]);
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; id: string }>;
}) {
    const { locale, id } = await params;
    const normalizedLocale = normalizeLocale(locale);
    const caseStudy = getCaseStudyBySlug(id);

    if (!caseStudy) {
        return buildPageMetadata({
            locale: normalizedLocale,
            path: "/cases",
            title: normalizedLocale === "ko" ? "사례를 찾을 수 없습니다" : "Case not found",
        });
    }

    return buildPageMetadata({
        locale: normalizedLocale,
        path: `/cases/${caseStudy.slug}`,
        title: getLocalizedText(caseStudy.title, normalizedLocale),
        description: getLocalizedText(caseStudy.summary, normalizedLocale),
        type: "article",
    });
}

export default async function CaseDetailPage({
    params,
}: {
    params: Promise<{ locale: string; id: string }>;
}) {
    const { locale, id } = await params;
    const ui = locale === "ko" ? detailUi.ko : detailUi.en;
    const caseStudy = getCaseStudyBySlug(id);

    if (!caseStudy) {
        notFound();
    }
    const normalizedLocale = normalizeLocale(locale);
    const pagePath = localizedPath(normalizedLocale, `/cases/${caseStudy.slug}`);
    const caseJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: getLocalizedText(caseStudy.title, normalizedLocale),
        description: getLocalizedText(caseStudy.summary, normalizedLocale),
        mainEntityOfPage: absoluteUrl(pagePath),
        author: {
            "@type": "Organization",
            name: "SignalCraft",
        },
        publisher: {
            "@type": "Organization",
            name: "SignalCraft",
        },
        about: getLocalizedText(caseStudy.industry, normalizedLocale),
        inLanguage: normalizedLocale === "ko" ? "ko-KR" : "en-US",
    };
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "SignalCraft",
                item: absoluteUrl(localizedPath(normalizedLocale)),
            },
            {
                "@type": "ListItem",
                position: 2,
                name: normalizedLocale === "ko" ? "활용 사례" : "Use Cases",
                item: absoluteUrl(localizedPath(normalizedLocale, "/cases")),
            },
            {
                "@type": "ListItem",
                position: 3,
                name: getLocalizedText(caseStudy.title, normalizedLocale),
                item: absoluteUrl(pagePath),
            },
        ],
    };

    return (
        <div className="min-h-screen bg-background pb-20 pt-24">
            <JsonLd data={caseJsonLd} />
            <JsonLd data={breadcrumbJsonLd} />
            <div className="container mx-auto max-w-5xl px-4">
                <Link
                    href="/cases"
                    className="inline-flex items-center text-sm font-semibold text-muted-foreground transition-colors hover:text-blue-500"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {ui.back}
                </Link>

                <header className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm">
                    <div
                        className={`relative overflow-hidden bg-gradient-to-br ${caseStudy.accent.gradient} p-8 md:p-10`}
                    >
                        <div
                            className={`absolute -right-20 -top-20 h-52 w-52 rounded-full blur-3xl ${caseStudy.accent.glow}`}
                        />
                        <div className="relative z-10 max-w-3xl">
                            <span
                                className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${caseStudy.accent.badge}`}
                            >
                                {getLocalizedText(caseStudy.status, locale)}
                            </span>
                            <p className="mt-4 text-sm font-semibold text-white/75">
                                {getLocalizedText(caseStudy.client, locale)}
                            </p>
                            <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white md:text-5xl">
                                {getLocalizedText(caseStudy.title, locale)}
                            </h1>
                            <p className="mt-4 text-base leading-7 text-white/75 md:text-lg">
                                {getLocalizedText(caseStudy.summary, locale)}
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-4 p-6 md:grid-cols-3 md:p-8">
                        {caseStudy.metrics.map((metric) => (
                            <div
                                key={metric.label.ko}
                                className="rounded-[1.5rem] border border-white/10 bg-background/60 p-5"
                            >
                                <div className="text-sm text-muted-foreground">
                                    {getLocalizedText(metric.label, locale)}
                                </div>
                                <div className="mt-2 text-xl font-bold text-foreground">
                                    {getLocalizedText(metric.value, locale)}
                                </div>
                            </div>
                        ))}
                    </div>
                </header>

                <section className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                    <h2 className="font-display text-2xl font-bold md:text-3xl">
                        {ui.challenge}
                    </h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        {caseStudy.sections.map((section) => (
                            <div
                                key={section.heading.ko}
                                className="rounded-[1.5rem] border border-white/10 bg-black/10 p-5"
                            >
                                <h3 className="font-display text-xl font-bold">
                                    {getLocalizedText(section.heading, locale)}
                                </h3>
                                {section.paragraphs?.map((paragraph) => (
                                    <p
                                        key={paragraph.ko}
                                        className="mt-3 text-sm leading-6 text-muted-foreground md:text-base"
                                    >
                                        {getLocalizedText(paragraph, locale)}
                                    </p>
                                ))}
                                {section.bullets?.length ? (
                                    <ul className="mt-4 grid gap-3">
                                        {section.bullets.map((bullet) => (
                                            <li
                                                key={bullet.ko}
                                                className="flex items-start gap-3 text-sm leading-6 text-muted-foreground md:text-base"
                                            >
                                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                                                <span>{getLocalizedText(bullet, locale)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                        <h3 className="text-sm font-semibold text-foreground">{ui.stack}</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {caseStudy.stack.map((item) => (
                                <span
                                    key={item.ko}
                                    className="rounded-full border border-white/10 bg-background/70 px-3 py-2 text-xs font-medium text-muted-foreground"
                                >
                                    {getLocalizedText(item, locale)}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mt-10 rounded-[2rem] border border-blue-500/20 bg-blue-500/5 p-6 text-center md:p-8">
                    <h3 className="font-display text-2xl font-bold">{ui.contactTitle}</h3>
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                        {ui.contactBody}
                    </p>
                    <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                        >
                            {ui.contactAction}
                        </Link>
                        <Link
                            href="/cases"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
                        >
                            {ui.moreCases}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
