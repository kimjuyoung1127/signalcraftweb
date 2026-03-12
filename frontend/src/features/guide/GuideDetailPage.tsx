"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import {
  BellRing,
  ChevronRight,
  Radio,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Link } from "@/i18n/routing";

const guideUi = {
  ko: {
    processTitle: "현장 설치 과정",
    processBody:
      "장비를 오래 세우지 않고, 센서 부착부터 앱 등록, 첫 알림 설정까지 한 번에 진행합니다.",
    fieldTitle: "현장에서 하는 일",
    receiveTitle: "설치 직후 받게 되는 것",
    readinessTitle: "파일럿 전 체크리스트",
    ctaTitle: "설치 준비가 필요하신가요?",
    ctaBody:
      "설비 종류, 수량, 네트워크 환경에 맞춰 가장 현실적인 도입 방법을 함께 잡아드립니다.",
    ctaAction: "고객지원 문의",
    fieldCards: [
      {
        title: "1. 센서 부착 위치 잡기",
        body: "설비를 멈추지 않고 센서 위치를 잡고, 핵심 부품에 맞춰 측정 포인트를 정합니다.",
      },
      {
        title: "2. 게이트웨이 연결",
        body: "네트워크와 전원을 확인한 뒤 게이트웨이를 연결하고, 데이터가 잘 흐르는지 점검합니다.",
      },
      {
        title: "3. 앱 등록과 알림 설정",
        body: "기기 등록, 담당자 연결, 알림 범위를 세팅하면 바로 운영 가능한 상태가 됩니다.",
      },
    ],
    receiveCards: [
      {
        title: "실시간 상태 화면",
        body: "설비별 상태와 이상 징후를 한눈에 볼 수 있는 모니터링 화면",
      },
      {
        title: "알림 우선순위",
        body: "어떤 신호가 먼저 대응이 필요한지 정리된 알림",
      },
      {
        title: "초기 기준 패턴",
        body: "설비별로 '평소' 패턴을 쌓아 이후 비교의 출발점으로 활용",
      },
    ],
    readiness: [
      "센서를 붙일 설비 목록과 우선순위 정리",
      "현장 네트워크 또는 전원 환경 확인",
      "알림을 받을 담당자와 역할 정하기",
      "파일럿 기간 동안 확인할 목표 합의",
    ],
  },
  en: {
    processTitle: "On-site installation",
    processBody:
      "From sensor placement to app registration and first alert setup — all in one visit, no extended downtime needed.",
    fieldTitle: "What happens on site",
    receiveTitle: "What your team gets right away",
    readinessTitle: "Pilot checklist",
    ctaTitle: "Need help planning installation?",
    ctaBody:
      "We'll help figure out the most practical setup based on your equipment, volume, and network conditions.",
    ctaAction: "Contact support",
    fieldCards: [
      {
        title: "1. Sensor placement",
        body: "We find the right mounting spots without shutting down your equipment.",
      },
      {
        title: "2. Gateway connection",
        body: "Check power and network, connect the gateway, and make sure data is flowing.",
      },
      {
        title: "3. App registration and alerts",
        body: "Register devices, assign owners, set alert ranges — then you're ready to go.",
      },
    ],
    receiveCards: [
      {
        title: "Live status view",
        body: "A monitoring screen that shows equipment state and anomaly trends at a glance.",
      },
      {
        title: "Alert priorities",
        body: "Sorted alerts so you know which signals need field action first.",
      },
      {
        title: "Initial baseline",
        body: "A 'normal' pattern for each machine that future comparisons build on.",
      },
    ],
    readiness: [
      "List the equipment and set pilot priorities",
      "Check on-site network and power conditions",
      "Decide who gets alerts and who handles follow-up",
      "Agree on what you want to learn during the pilot",
    ],
  },
};

export function GuideDetailPage() {
  const locale = useLocale();
  const t = useTranslations("Guide.detail");
  const ui = locale === "ko" ? guideUi.ko : guideUi.en;

  return (
    <div className="min-h-screen bg-[#050505] pb-24 pt-24 text-white md:pt-28">
      <section className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-black uppercase tracking-tight md:text-6xl"
          >
            {t("title")}
          </motion.h1>
          <p className="mt-5 text-base leading-7 text-gray-400 md:text-xl">
            {t("subtitle")}
          </p>
        </div>
      </section>

      <section className="container mx-auto mt-12 px-4 md:mt-16">
        <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_420px]">
            <div className="p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">
                {ui.processTitle}
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
                {ui.fieldTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
                {ui.processBody}
              </p>

              <div className="mt-8 grid gap-4">
                {ui.fieldCards.map((card, index) => {
                  const icons = [Radio, ShieldCheck, Smartphone];
                  const Icon = icons[index];
                  return (
                    <div
                      key={card.title}
                      className="rounded-[1.5rem] border border-white/10 bg-black/10 p-5"
                    >
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 font-display text-2xl font-bold">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-gray-400 md:text-base">
                        {card.body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-white/10 bg-black/20 p-6 md:p-8 lg:border-l lg:border-t-0">
              <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-blue-500/10 via-white/[0.03] to-transparent p-5">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                    <BellRing className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-300">{ui.receiveTitle}</p>
                    <p className="text-xs text-gray-500">SignalCraft rollout</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-3">
                  {ui.receiveCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <p className="font-semibold text-white">{card.title}</p>
                      <p className="mt-2 text-sm leading-6 text-gray-400">
                        {card.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">
                    {ui.readinessTitle}
                  </h3>
                </div>
                <ul className="mt-5 grid gap-3">
                  {ui.readiness.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm leading-6 text-gray-300"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 border-t border-white/10 pt-16 text-center md:mt-20 md:pt-20">
        <div className="container mx-auto px-4">
          <h3 className="font-display text-3xl font-bold">{ui.ctaTitle}</h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            {ui.ctaBody}
          </p>
          <Link
            href="/contact"
            className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-transform hover:scale-[1.02]"
          >
            {ui.ctaAction}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
