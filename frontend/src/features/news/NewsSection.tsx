"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  formatArticleDate,
  getLocalizedText,
  newsArticles,
} from "@/content/news";

export function NewsSection() {
  const locale = useLocale();
  const t = useTranslations("News");
  const featuredArticles = newsArticles
    .filter((article) => article.featured)
    .slice(0, 3);

  return (
    <section id="news" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              {t("title")}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              {t("description")}
            </p>
          </div>
          <Link
            href="/news"
            className="hidden items-center text-sm font-semibold transition-colors hover:text-blue-500 md:inline-flex"
          >
            {t("viewAll")} <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
              className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <Link
                href={`/news/${article.slug}`}
                className="relative block aspect-[16/10] overflow-hidden"
              >
                <Image
                  src={article.heroMedia.src}
                  alt={getLocalizedText(article.heroMedia.alt, locale)}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
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
                <div className="mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {formatArticleDate(article.publishedAt, locale)}
                </div>
                <h3 className="font-display text-xl font-bold leading-snug transition-colors group-hover:text-blue-500">
                  {getLocalizedText(article.title, locale)}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground md:text-[15px]">
                  {getLocalizedText(article.excerpt, locale)}
                </p>
                <div className="mt-5 pt-4">
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-blue-500 transition-colors hover:text-blue-400"
                  >
                    {t("readMore")} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/news"
            className="inline-flex items-center text-sm font-semibold hover:text-blue-500"
          >
            {t("viewAll")} <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
