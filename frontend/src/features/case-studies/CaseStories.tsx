"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { caseStudies } from "@/content/cases";
import { getLocalizedText } from "@/content/news";

export function CaseStories() {
  const locale = useLocale();
  const t = useTranslations("Cases");

  return (
    <section id="cases" className="bg-background py-16 md:py-24">
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
            href="/cases"
            className="hidden items-center text-sm font-semibold transition-colors hover:text-blue-500 md:inline-flex"
          >
            {t("viewAll")} <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {caseStudies.map((story, index) => (
            <Link key={story.id} href={`/cases/${story.slug}`} className="block h-full">
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08 }}
                className="group flex h-full flex-col overflow-hidden rounded-[1.85rem] border border-white/10 bg-white/5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${story.accent.gradient} p-5 md:p-6`}
                >
                  <div
                    className={`absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl ${story.accent.glow}`}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${story.accent.badge}`}
                      >
                        {getLocalizedText(story.status, locale)}
                      </span>
                      <span className="text-xs font-medium text-white/60">
                        {getLocalizedText(story.industry, locale)}
                      </span>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-3">
                      {story.metrics.map((metric) => (
                        <div
                          key={metric.label.ko}
                          className="rounded-2xl border border-white/10 bg-black/20 px-3 py-4 text-white"
                        >
                          <div className="text-sm font-bold leading-tight">
                            {getLocalizedText(metric.value, locale)}
                          </div>
                          <div className="mt-2 text-[11px] leading-4 text-white/60">
                            {getLocalizedText(metric.label, locale)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="text-sm font-semibold text-blue-400">
                    {getLocalizedText(story.client, locale)}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold leading-snug transition-colors group-hover:text-blue-500">
                    {getLocalizedText(story.title, locale)}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                    {getLocalizedText(story.summary, locale)}
                  </p>
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-sm font-semibold text-foreground">
                      {t("result")}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {getLocalizedText(story.result, locale)}
                    </p>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/cases"
            className="inline-flex items-center text-sm font-semibold hover:text-blue-500"
          >
            {t("viewAll")} <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
