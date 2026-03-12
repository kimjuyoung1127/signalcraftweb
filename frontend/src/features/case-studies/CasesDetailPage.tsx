"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { caseStudies } from "@/content/cases";
import { getLocalizedText } from "@/content/news";

const casesPageUi = {
  ko: {
    title: "Proven Impact",
    description:
      "실제 현장에서 어떤 문제를 먼저 잡을 수 있는지, 시나리오별로 정리했습니다.",
    stackLabel: "적용 포인트",
    detailAction: "자세히 보기",
  },
  en: {
    title: "Proven Impact",
    description:
      "Real-world scenarios that show where SignalCraft makes a difference first.",
    stackLabel: "Stack",
    detailAction: "Read the full scenario",
  },
};

export function CasesDetailPage() {
  const locale = useLocale();
  const ui = locale === "ko" ? casesPageUi.ko : casesPageUi.en;

  return (
    <div className="bg-background pb-16 pt-16 md:pb-24 md:pt-24">
      <section className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl font-bold tracking-tight md:text-6xl"
        >
          {ui.title}
        </motion.h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-muted-foreground md:text-xl">
          {ui.description}
        </p>
      </section>

      <section className="container mx-auto mt-10 space-y-8 px-4 md:mt-14">
        {caseStudies.map((story, index) => (
          <motion.article
            key={story.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.07 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <div className="grid gap-0 lg:grid-cols-[420px_minmax(0,1fr)]">
              <div
                className={`relative overflow-hidden bg-gradient-to-br ${story.accent.gradient} p-6 md:p-8`}
              >
                <div
                  className={`absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl ${story.accent.glow}`}
                />
                <div className="relative z-10">
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${story.accent.badge}`}
                  >
                    {getLocalizedText(story.status, locale)}
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-bold leading-snug text-white md:text-3xl">
                    {getLocalizedText(story.title, locale)}
                  </h2>
                  <p className="mt-3 text-sm font-semibold text-white/80">
                    {getLocalizedText(story.client, locale)}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/65 md:text-base">
                    {getLocalizedText(story.summary, locale)}
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                    {story.metrics.map((metric) => (
                      <div
                        key={metric.label.ko}
                        className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
                      >
                        <div className="text-lg font-bold text-white">
                          {getLocalizedText(metric.value, locale)}
                        </div>
                        <div className="mt-1 text-xs text-white/60">
                          {getLocalizedText(metric.label, locale)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded-full border border-white/10 bg-background/70 px-3 py-1 font-semibold text-muted-foreground">
                    {getLocalizedText(story.industry, locale)}
                  </span>
                  <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-semibold text-blue-400">
                    {getLocalizedText(story.result, locale)}
                  </span>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {story.sections.map((section) => (
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
                          className="mt-3 text-sm leading-6 text-muted-foreground"
                        >
                          {getLocalizedText(paragraph, locale)}
                        </p>
                      ))}
                      {section.bullets?.length ? (
                        <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground">
                          {section.bullets.map((bullet) => (
                            <li key={bullet.ko} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                              <span>{getLocalizedText(bullet, locale)}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm font-semibold text-foreground">{ui.stackLabel}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {story.stack.map((item) => (
                      <span
                        key={item.ko}
                        className="rounded-full border border-white/10 bg-background/60 px-3 py-2 text-xs font-medium text-muted-foreground"
                      >
                        {getLocalizedText(item, locale)}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href={`/cases/${story.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition-colors hover:text-blue-400"
                  >
                    {ui.detailAction}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
}
