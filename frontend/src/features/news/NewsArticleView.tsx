"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CirclePlay,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  formatArticleDate,
  getLocalizedText,
  getNewsArticleBySlug,
} from "@/content/news";

interface NewsArticleViewProps {
  id: string;
}

const articleUi = {
  ko: {
    proofLabel: "관련 자료",
    highlightsLabel: "핵심 포인트",
    watchLabel: "인터뷰 영상 보기",
    demoTitle: "더 궁금한 점이 있으신가요?",
    demoBody:
      "도입 방법, 파일럿 범위, 운영 데이터 활용 등 무엇이든 편하게 문의해 주세요.",
    demoAction: "문의하기",
    notFoundTitle: "기사를 찾을 수 없습니다.",
    notFoundBody: "링크가 변경되었거나 더 이상 제공되지 않는 기사입니다.",
    backToNews: "뉴스룸으로 돌아가기",
  },
  en: {
    proofLabel: "Supporting material",
    highlightsLabel: "Key points",
    watchLabel: "Watch the interview",
    demoTitle: "Want to learn more?",
    demoBody:
      "Whether it's deployment, pilot scope, or how the data fits your maintenance workflow — just ask.",
    demoAction: "Contact us",
    notFoundTitle: "Article not found.",
    notFoundBody:
      "This article may have moved or is no longer available.",
    backToNews: "Back to newsroom",
  },
};

function getYoutubeWatchUrl(embedUrl: string) {
  return embedUrl.includes("embed/")
    ? `https://www.youtube.com/watch?v=${embedUrl.split("embed/")[1]}`
    : embedUrl;
}

export function NewsArticleView({ id }: NewsArticleViewProps) {
  const locale = useLocale();
  const t = useTranslations("News");
  const ui = locale === "ko" ? articleUi.ko : articleUi.en;
  const article = getNewsArticleBySlug(id);

  if (!article) {
    return (
      <div className="bg-background pb-24 pt-28">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-display text-3xl font-bold">{ui.notFoundTitle}</h1>
          <p className="mt-4 text-muted-foreground">{ui.notFoundBody}</p>
          <Link
            href="/news"
            className="mt-8 inline-flex items-center text-sm font-semibold text-blue-500"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {ui.backToNews}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background pb-20 pt-24 md:pb-24 md:pt-28">
      <article className="container mx-auto max-w-6xl px-4">
        <Link
          href="/news"
          className="inline-flex items-center text-sm font-semibold text-muted-foreground transition-colors hover:text-blue-500"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("viewAll")}
        </Link>

        <header className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_420px] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-blue-400">
                {t(`filters.${article.category}`)}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {formatArticleDate(article.publishedAt, locale)}
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 font-display text-3xl font-bold leading-tight md:text-5xl lg:text-6xl"
            >
              {getLocalizedText(article.title, locale)}
            </motion.h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground md:text-xl md:leading-8">
              {getLocalizedText(article.body.summary, locale)}
            </p>

            {article.body.highlights?.length ? (
              <div className="mt-7">
                <p className="mb-3 text-sm font-semibold text-foreground">
                  {ui.highlightsLabel}
                </p>
                <div className="flex flex-wrap gap-3">
                  {article.body.highlights.map((highlight) => (
                    <div
                      key={highlight.ko}
                      className="inline-flex max-w-full items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                      <span>{getLocalizedText(highlight, locale)}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              SignalCraft
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {getLocalizedText(article.excerpt, locale)}
            </p>
            {article.youtubeUrl ? (
              <a
                href={getYoutubeWatchUrl(article.youtubeUrl)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition-colors hover:text-blue-400"
              >
                <CirclePlay className="h-4 w-4" />
                {ui.watchLabel}
              </a>
            ) : null}
          </div>
        </header>

        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-black">
          <Image
            src={article.heroMedia.src}
            alt={getLocalizedText(article.heroMedia.alt, locale)}
            width={1600}
            height={900}
            priority
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="h-auto w-full object-cover"
          />
          {article.heroMedia.caption ? (
            <div className="border-t border-white/10 bg-black/80 px-4 py-3 text-sm text-muted-foreground">
              {getLocalizedText(article.heroMedia.caption, locale)}
            </div>
          ) : null}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-10">
            {article.youtubeUrl ? (
              <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm md:p-6">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <CirclePlay className="h-4 w-4 text-blue-500" />
                  {ui.watchLabel}
                </div>
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                  <div className="relative aspect-video">
                    <iframe
                      src={article.youtubeUrl}
                      title={getLocalizedText(article.title, locale)}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </section>
            ) : null}

            {article.body.sections.map((section, index) => (
              <section key={section.heading?.ko ?? section.heading?.en ?? `${article.id}-${index}`}>
                {section.heading ? (
                  <h2 className="font-display text-2xl font-bold md:text-3xl">
                    {getLocalizedText(section.heading, locale)}
                  </h2>
                ) : null}

                <div className="mt-4 space-y-4 text-base leading-8 text-muted-foreground md:text-lg">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph.ko}>{getLocalizedText(paragraph, locale)}</p>
                  ))}
                </div>

                {section.bullets?.length ? (
                  <ul className="mt-5 grid gap-3">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet.ko}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-muted-foreground md:text-base"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                        <span>{getLocalizedText(bullet, locale)}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            {article.body.quote ? (
              <blockquote className="rounded-[2rem] border border-blue-500/20 bg-blue-500/5 px-6 py-6">
                <p className="text-lg font-medium leading-8 text-foreground">
                  “{getLocalizedText(article.body.quote.text, locale)}”
                </p>
                {article.body.quote.attribution ? (
                  <footer className="mt-3 text-sm text-muted-foreground">
                    {getLocalizedText(article.body.quote.attribution, locale)}
                  </footer>
                ) : null}
              </blockquote>
            ) : null}

            {article.gallery?.length ? (
              <section className="space-y-4">
                <h2 className="font-display text-2xl font-bold md:text-3xl">
                  {ui.proofLabel}
                </h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {article.gallery.map((asset) => (
                    <figure
                      key={asset.src}
                      className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]"
                    >
                      <Image
                        src={asset.src}
                        alt={getLocalizedText(asset.alt, locale)}
                        width={1200}
                        height={900}
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className="h-auto w-full object-cover"
                      />
                      {asset.caption ? (
                        <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                          {getLocalizedText(asset.caption, locale)}
                        </figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              </section>
            ) : null}
          </div>

          <aside className="space-y-5">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {t(`filters.${article.category}`)}
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {getLocalizedText(article.excerpt, locale)}
              </p>
              <p className="mt-4 text-sm font-medium text-foreground">
                {formatArticleDate(article.publishedAt, locale)}
              </p>
            </div>

            <div className="rounded-[2rem] border border-blue-500/20 bg-blue-500/5 p-6">
              <h3 className="font-display text-xl font-bold">{ui.demoTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {ui.demoBody}
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition-colors hover:text-blue-400"
              >
                {ui.demoAction}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}
