"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Activity, ArrowRight, AudioLines, Globe, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";

const MILESTONE_KEYS = ["2025", "2026", "2027"] as const;

const aboutUi = {
  ko: {
    momentumEyebrow: "회사 모멘텀",
    momentumTitle: "지금 SignalCraft는 이런 일들을 하고 있습니다",
    momentumBody:
      "프로그램 선정, 전시 무대 피칭, 전국 파트너 확대까지 — 최근 주요 활동을 한눈에 확인하세요.",
    momentumCards: [
      {
        title: "부산 프로그램 서류합격",
        body: "부산기술창업투자원 ‘2026 부비콘 빌드 육성사업’ 서면평가를 통과하며 부산 산업 현장과의 접점을 넓히고 있습니다.",
        href: "/news/busan-build-pass",
      },
      {
        title: "AW 2026 인터뷰 · IR 피칭",
        body: "AW 2026 AI Factory Stage에서 직접 무대에 오르고, 인터뷰 영상을 통해 제품 방향을 공개했습니다.",
        href: "/news/founder-interview-aw-2026",
      },
      {
        title: "전국 산업 네트워크 확장",
        body: "서울, 전남, 부산 거점을 잇는 파트너십으로 파일럿과 협업 기회를 빠르게 만들고 있습니다.",
        href: "/contact",
      },
    ],
    capabilitiesTitle: "SignalCraft가 하는 일",
    capabilities: [
      {
        title: "Zero-config learning",
        body: "설치 후 하루 동안 평소 소음과 진동을 익혀 기기마다 기준을 자동으로 잡아둡니다.",
      },
      {
        title: "Edge AI deployment",
        body: "임계값을 따로 세팅할 필요 없이, 현장 데이터를 읽어 상태를 판단하고 알림으로 알려줍니다.",
      },
      {
        title: "Operator-ready workflow",
        body: "데이터를 모으는 것에서 끝나지 않고, 어디를 먼저 점검할지, 언제 움직일지를 함께 알려줍니다.",
      },
    ],
    finalTitle: "현장과 함께 자라는 기술 회사입니다",
    finalBody:
      "공장 소리를 운영팀이 바로 쓸 수 있는 신호로 바꿉니다. 뉴스룸이나 문의 페이지에서 더 알아보세요.",
    newsAction: "뉴스룸 보기",
    contactAction: "문의하기",
    partnerLabel: "현장 파트너",
    learnMore: "자세히 보기",
  },
  en: {
    momentumEyebrow: "Company Momentum",
    momentumTitle: "Here’s what SignalCraft has been up to",
    momentumBody:
      "Program selections, a trade-show stage pitch, and a growing partner network — see how we’re moving forward.",
    momentumCards: [
      {
        title: "Busan program screening pass",
        body: "We passed the document screening for the 2026 B-Beacon Build program run by the Busan Tech Startup Investment Agency.",
        href: "/news/busan-build-pass",
      },
      {
        title: "AW 2026 interview and stage pitch",
        body: "We took the AI Factory Stage at AW 2026 and released an interview showing where the product is heading.",
        href: "/news/founder-interview-aw-2026",
      },
      {
        title: "Growing the industrial network",
        body: "Partnerships across Seoul, Jeonnam, and Busan are opening doors for pilots and collaboration.",
        href: "/contact",
      },
    ],
    capabilitiesTitle: "What SignalCraft does",
    capabilities: [
      {
        title: "Zero-config learning",
        body: "After installation, it spends a day learning each machine’s normal vibration and noise — then sets its own baseline.",
      },
      {
        title: "Edge AI deployment",
        body: "No threshold tuning needed. It reads on-site data, judges equipment state, and sends alerts automatically.",
      },
      {
        title: "Operator-ready workflow",
        body: "It goes beyond data collection — it tells you what to check first and when to act.",
      },
    ],
    finalTitle: "A technology company that grows with the field",
    finalBody:
      "We turn factory sounds into signals operations teams can use. Check the newsroom or reach out to learn more.",
    newsAction: "Visit the newsroom",
    contactAction: "Contact SignalCraft",
    partnerLabel: "Field partners",
    learnMore: "Learn more",
  },
};

const capabilityIcons = [AudioLines, ShieldCheck, Activity];

export function AboutDetailPage() {
  const locale = useLocale();
  const t = useTranslations("About");
  const ui = locale === "ko" ? aboutUi.ko : aboutUi.en;

  return (
    <div className="overflow-hidden bg-[#050505] text-white selection:bg-blue-500/30">
      <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden px-4 pb-20 pt-24 text-center md:min-h-screen">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[110px] md:h-[820px] md:w-[820px]" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 mx-auto max-w-4xl"
        >
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 md:text-sm">
            {t("mission")}
          </span>
          <h1
            className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight md:mt-8 md:text-7xl"
            dangerouslySetInnerHTML={{ __html: t.raw("hero.title") }}
          />
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-300 md:mt-6 md:text-2xl md:leading-9">
            {t("hero.subtitle")}
          </p>
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-white/5 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-display text-4xl font-black tracking-tight md:text-6xl">
            {t("journey.title")}
          </h2>
          <div className="mx-auto mt-14 max-w-4xl space-y-8 md:mt-20 md:space-y-10">
            {MILESTONE_KEYS.map((year, index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-black/20 p-6 md:p-8"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
                  {year}
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold md:text-3xl">
                  {t(`journey.milestones.${year}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-400 md:text-base">
                  {t(`journey.milestones.${year}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">
              {t("global.title")}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-6xl">
              {t("global.subtitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 md:text-xl">
              {t("global.description")}
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 p-6 md:aspect-[3/4]">
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <Image
                  src="/korea-map.svg"
                  alt="Republic of Korea map"
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-contain opacity-80 invert"
                />
              </div>
              <div className="absolute left-[33%] top-[22%] h-4 w-4 rounded-full bg-blue-500 ring-8 ring-blue-500/20" />
              <div className="absolute left-[37%] top-[27%] h-3.5 w-3.5 rounded-full bg-orange-400 ring-8 ring-orange-400/15" />
              <div className="absolute left-[30%] top-[65%] h-3.5 w-3.5 rounded-full bg-emerald-400 ring-8 ring-emerald-400/15" />
              <div className="absolute left-[76%] top-[61%] h-3.5 w-3.5 rounded-full bg-purple-400 ring-8 ring-purple-400/15" />
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Seoul",
                  body:
                    locale === "ko"
                      ? "데이터 지능, 사업개발, 파트너 연계의 중심 거점"
                      : "Core base for data intelligence, business development, and partner coordination",
                },
                {
                  title: "Jeonnam",
                  body:
                    locale === "ko"
                      ? "공정·설비 안전 시나리오를 확장하는 산업 현장 접점"
                      : "Industrial access point for expanding process and safety scenarios",
                },
                {
                  title: "Busan",
                  body:
                    locale === "ko"
                      ? "중공업·해양·제조 인프라와 연결되는 현장 네트워크"
                      : "Field network connected to heavy industry, maritime, and manufacturing infrastructure",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                    {ui.partnerLabel}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400 md:text-base">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">
              {ui.momentumEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
              {ui.momentumTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-400 md:text-lg">
              {ui.momentumBody}
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {ui.momentumCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08 }}
                className="flex h-full flex-col rounded-[1.8rem] border border-white/10 bg-black/20 p-6"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-gray-400 md:text-base">
                  {card.body}
                </p>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
                >
                  {ui.learnMore}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-display text-3xl font-bold tracking-tight md:text-5xl">
            {ui.capabilitiesTitle}
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {ui.capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index];
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400 md:text-base">
                    {capability.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20 text-center md:py-28">
        <div className="container mx-auto px-4">
          <Globe className="mx-auto h-16 w-16 text-blue-500/40 md:h-20 md:w-20" />
          <h2 className="mt-6 font-display text-3xl font-bold md:text-5xl">
            {ui.finalTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            {ui.finalBody}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/news"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              {ui.newsAction}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              {ui.contactAction}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
