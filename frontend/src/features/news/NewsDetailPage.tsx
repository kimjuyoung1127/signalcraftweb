"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Search, CalendarDays, ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  formatArticleDate,
  getLocalizedText,
  newsArticles,
  type NewsCategory,
} from "@/content/news";

const newsFilters: Array<"all" | NewsCategory> = [
  "all",
  "press",
  "media",
  "insight",
];

const emptyMessages = {
  ko: {
    title: "조건에 맞는 기사가 없습니다.",
    body: "다른 검색어나 필터로 다시 찾아보세요.",
  },
  en: {
    title: "No articles found.",
    body: "Try a different keyword or filter.",
  },
};

export function NewsDetailPage() {
  const locale = useLocale();
  const t = useTranslations("News");
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | NewsCategory>("all");

  const filteredArticles = newsArticles.filter((article) => {
    const matchesFilter =
      activeFilter === "all" || article.category === activeFilter;

    if (!query.trim()) {
      return matchesFilter;
    }

    const term = query.trim().toLowerCase();
    const text = [
      getLocalizedText(article.title, locale),
      getLocalizedText(article.excerpt, locale),
      getLocalizedText(article.body.summary, locale),
    ]
      .join(" ")
      .toLowerCase();

    return matchesFilter && text.includes(term);
  });

  const emptyState = locale === "ko" ? emptyMessages.ko : emptyMessages.en;

  return (
    <div className="bg-background pb-16 pt-16 md:pb-24 md:pt-24">
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="font-display text-3xl font-bold tracking-tight md:text-6xl">
            {t("title_page")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-xl">
            {t("description_page")}
          </p>
        </motion.div>

        <div className="mx-auto mt-8 max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm md:mt-12 md:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <label className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground md:h-5 md:w-5" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t("search_placeholder")}
                className="h-12 w-full rounded-full border border-white/10 bg-background/60 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-blue-500 md:h-14 md:text-base"
              />
            </label>

            <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:justify-end">
              {newsFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all ${
                    activeFilter === filter
                      ? "border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                      : "border-white/10 bg-background/50 text-muted-foreground hover:border-blue-400/40 hover:text-foreground"
                  }`}
                >
                  {t(`filters.${filter}`)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-10 px-4 md:mt-14">
        {filteredArticles.length === 0 ? (
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-dashed border-white/10 bg-white/[0.03] px-6 py-16 text-center">
            <h2 className="font-display text-2xl font-bold">{emptyState.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
              {emptyState.body}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.07 }}
                className="group flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <Link
                  href={`/news/${article.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden"
                >
                  <Image
                    src={article.heroMedia.src}
                    alt={getLocalizedText(article.heroMedia.alt, locale)}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                      {t(`filters.${article.category}`)}
                    </span>
                    {article.youtubeUrl ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                        <PlayCircle className="h-3.5 w-3.5" />
                        YouTube
                      </span>
                    ) : null}
                  </div>
                </Link>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    {formatArticleDate(article.publishedAt, locale)}
                  </div>

                  <Link href={`/news/${article.slug}`}>
                    <h2 className="font-display text-2xl font-bold leading-snug transition-colors group-hover:text-blue-500 md:text-3xl">
                      {getLocalizedText(article.title, locale)}
                    </h2>
                  </Link>

                  <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground md:text-base">
                    {getLocalizedText(article.excerpt, locale)}
                  </p>

                  <div className="mt-6">
                    <Link
                      href={`/news/${article.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition-colors hover:text-blue-400"
                    >
                      {t("readMore")}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
