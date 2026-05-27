import { NewsArticleView } from "@/features/news/NewsArticleView";
import {
    getLocalizedText,
    getNewsArticleBySlug,
    newsArticles,
} from "@/content/news";
import { JsonLd } from "@/components/shared/JsonLd";
import { absoluteUrl, buildPageMetadata, localizedPath, normalizeLocale } from "@/lib/seo";

export function generateStaticParams() {
    return newsArticles.flatMap((article) => [
        { locale: "ko", id: article.slug },
        { locale: "en", id: article.slug },
    ]);
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; id: string }>;
}) {
    const { locale, id } = await params;
    const normalizedLocale = normalizeLocale(locale);
    const article = getNewsArticleBySlug(id);

    if (!article) {
        return buildPageMetadata({
            locale: normalizedLocale,
            path: "/news",
            title: normalizedLocale === "ko" ? "기사를 찾을 수 없습니다" : "Article not found",
        });
    }

    return buildPageMetadata({
        locale: normalizedLocale,
        path: `/news/${article.slug}`,
        title: getLocalizedText(article.title, normalizedLocale),
        description: getLocalizedText(article.excerpt, normalizedLocale),
        image: article.heroMedia.src,
        type: "article",
    });
}

export default async function NewsArticlePage({
    params,
}: {
    params: Promise<{ locale: string; id: string }>;
}) {
    const { locale, id } = await params;
    const normalizedLocale = normalizeLocale(locale);
    const article = getNewsArticleBySlug(id);

    if (!article) {
        return <NewsArticleView id={id} />;
    }

    const pagePath = localizedPath(normalizedLocale, `/news/${article.slug}`);
    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: getLocalizedText(article.title, normalizedLocale),
        description: getLocalizedText(article.excerpt, normalizedLocale),
        image: [absoluteUrl(article.heroMedia.src)],
        datePublished: article.publishedAt,
        dateModified: article.publishedAt,
        mainEntityOfPage: absoluteUrl(pagePath),
        author: {
            "@type": "Organization",
            name: "SignalCraft",
        },
        publisher: {
            "@type": "Organization",
            name: "SignalCraft",
        },
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
                name: normalizedLocale === "ko" ? "뉴스룸" : "Newsroom",
                item: absoluteUrl(localizedPath(normalizedLocale, "/news")),
            },
            {
                "@type": "ListItem",
                position: 3,
                name: getLocalizedText(article.title, normalizedLocale),
                item: absoluteUrl(pagePath),
            },
        ],
    };

    return (
        <>
            <JsonLd data={articleJsonLd} />
            <JsonLd data={breadcrumbJsonLd} />
            <NewsArticleView id={id} />
        </>
    );
}
