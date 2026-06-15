import type { LocalizedText } from "./news";

export interface CaseMetric {
  label: LocalizedText;
  value: LocalizedText;
}

export interface CaseStudySection {
  heading: LocalizedText;
  paragraphs?: LocalizedText[];
  bullets?: LocalizedText[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  industry: LocalizedText;
  client: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  result: LocalizedText;
  status: LocalizedText;
  accent: {
    gradient: string;
    glow: string;
    badge: string;
  };
  metrics: CaseMetric[];
  sections: CaseStudySection[];
  stack: LocalizedText[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "conveyor-logistics",
    slug: "conveyor-logistics",
    industry: {
      ko: "무인 매장 냉동 설비",
      en: "Unmanned Store Refrigeration",
    },
    client: {
      ko: "무인 아이스크림 매장 운영점",
      en: "Unmanned Ice Cream Store",
    },
    title: {
      ko: "냉동고 이상 징후, 점주보다 먼저 잡아내는 법",
      en: "Catching freezer trouble before the store owner notices",
    },
    summary: {
      ko: "무인 매장에서는 냉동고가 평소보다 오래 돌거나 진동이 커지면 문제가 빠르게 번집니다. SignalCraft가 기준 패턴과 비교해 변화를 추적하면, 점주가 먼저 움직일 수 있습니다.",
      en: "When a freezer in an unmanned store runs longer than usual or starts vibrating more, trouble escalates fast. SignalCraft tracks changes against the learned baseline so operators can step in early.",
    },
    result: {
      ko: "과부하와 냉각 이상을 더 빨리 포착",
      en: "Catches overload and cooling issues earlier",
    },
    status: {
      ko: "활용 시나리오",
      en: "Use case",
    },
    accent: {
      gradient: "from-blue-500/20 via-cyan-400/10 to-blue-950/70",
      glow: "bg-blue-500/20",
      badge: "text-blue-300 border-blue-400/30 bg-blue-500/10",
    },
    metrics: [
      {
        label: { ko: "대응 리드타임", en: "Response lead time" },
        value: { ko: "사전 확보", en: "Gained early" },
      },
      {
        label: { ko: "설치 방식", en: "Setup" },
        value: { ko: "비침습형", en: "Non-invasive" },
      },
      {
        label: { ko: "핵심 포인트", en: "Focus" },
        value: { ko: "냉동 유지", en: "Cooling continuity" },
      },
    ],
    sections: [
      {
        heading: {
          ko: "문제 상황",
          en: "The challenge",
        },
        paragraphs: [
          {
            ko: "무인 매장에는 냉동고를 지켜볼 사람이 없습니다. 가동 시간이 길어지거나 진동이 바뀌어도 한참 뒤에야 알게 됩니다.",
            en: "Nobody's watching the freezer around the clock in an unmanned store. Longer runtimes or shifting vibration patterns can go unnoticed until it's too late.",
          },
        ],
      },
      {
        heading: {
          ko: "SignalCraft가 돕는 방식",
          en: "How SignalCraft helps",
        },
        bullets: [
          {
            ko: "기기 등록 후 자동 학습으로 기준 패턴 설정",
            en: "Auto-learns the baseline pattern after device registration",
          },
          {
            ko: "진동·소음 변화를 기준과 비교해 이상 추적",
            en: "Tracks anomalies by comparing vibration and noise against the baseline",
          },
          {
            ko: "매일 리포트와 이상 알림으로 빠른 대응",
            en: "Daily reports and alerts help the team respond faster",
          },
        ],
      },
    ],
    stack: [
      { ko: "진동·소음 데이터", en: "Vibration & noise data" },
      { ko: "엣지 AI 분석", en: "Edge AI analytics" },
      { ko: "알림 대시보드", en: "Alert dashboard" },
    ],
  },
  {
    id: "valve-leak-monitoring",
    slug: "valve-leak-monitoring",
    industry: {
      ko: "소규모 공장 설비 운영",
      en: "Small Factory Operations",
    },
    client: {
      ko: "압축기·펌프 운영 라인",
      en: "Compressor & Pump Line",
    },
    title: {
      ko: "컴프레서 과부하, 고장 나기 전에 알아채는 법",
      en: "Spotting compressor overload before it turns into a breakdown",
    },
    summary: {
      ko: "소규모 공장에서는 과부하가 쌓이기 전에 경고를 받는 게 핵심입니다. SignalCraft는 진동·소음 변화와 가동 패턴을 함께 보면서, 어디부터 점검해야 할지 정리해 줍니다.",
      en: "In a small factory, the key is getting a warning before overload piles up. SignalCraft watches vibration, noise, and runtime patterns together and helps prioritize what to inspect first.",
    },
    result: {
      ko: "과부하 징후를 리포트와 함께 빠르게 파악",
      en: "Spots overload signals faster with daily reports",
    },
    status: {
      ko: "활용 시나리오",
      en: "Use case",
    },
    accent: {
      gradient: "from-fuchsia-500/20 via-violet-500/10 to-slate-950/80",
      glow: "bg-fuchsia-500/20",
      badge: "text-fuchsia-200 border-fuchsia-400/30 bg-fuchsia-500/10",
    },
    metrics: [
      {
        label: { ko: "적용 포인트", en: "Focus area" },
        value: { ko: "과부하 징후", en: "Overload signals" },
      },
      {
        label: { ko: "현장 목표", en: "Field goal" },
        value: { ko: "점검 우선순위", en: "Inspection priority" },
      },
      {
        label: { ko: "분석 방식", en: "Processing" },
        value: { ko: "엣지 분석", en: "Edge processing" },
      },
    ],
    sections: [
      {
        heading: {
          ko: "왜 중요한가",
          en: "Why it matters",
        },
        paragraphs: [
          {
            ko: "공장 설비는 겉으로는 멀쩡해 보여도 가동 시간이 늘거나 미세한 진동이 바뀌면서 문제가 시작됩니다. 현장에서는 이 신호를 빨리 읽고 점검 순서를 정하는 게 중요합니다.",
            en: "Equipment can look fine on the outside while runtime slowly creeps up or vibration shifts subtly. On the floor, reading those early signs and deciding what to check first is what keeps things running.",
          },
        ],
      },
      {
        heading: {
          ko: "SignalCraft가 돕는 방식",
          en: "How SignalCraft helps",
        },
        bullets: [
          {
            ko: "다음 점검 전에 진동·소음 변화를 미리 포착",
            en: "Catches vibration and noise changes before the next manual check",
          },
          {
            ko: "현장 데이터 보안을 위한 엣지 처리",
            en: "Edge processing keeps sensitive site data secure",
          },
          {
            ko: "점검팀이 우선순위를 빠르게 결정할 수 있는 알림",
            en: "Alerts that help the inspection team decide priorities quickly",
          },
        ],
      },
    ],
    stack: [
      { ko: "누출 신호 감지", en: "Leak signal detection" },
      { ko: "현장 보안 분석", en: "On-site secure analytics" },
      { ko: "점검 우선순위", en: "Inspection prioritization" },
    ],
  },
  {
    id: "gearbox-condition-monitoring",
    slug: "gearbox-condition-monitoring",
    industry: {
      ko: "시설·냉동 설비 운영",
      en: "Facility & Refrigeration Operations",
    },
    client: {
      ko: "다점포 운영 관리자",
      en: "Multi-site Operations Manager",
    },
    title: {
      ko: "여러 매장 기기 상태, 매일 한 페이지로 확인하기",
      en: "Checking all your devices across sites — in one daily page",
    },
    summary: {
      ko: "매장이나 설비가 늘어날수록 하나하나 확인하기 어렵습니다. 매일 요약 리포트로 어디가 먼저 신경 써야 하는지 바로 알 수 있습니다.",
      en: "The more sites and devices you manage, the harder it gets to check each one. A daily summary tells you which location needs attention first.",
    },
    result: {
      ko: "여러 기기 상태를 한눈에 정리",
      en: "All device conditions in one view",
    },
    status: {
      ko: "활용 시나리오",
      en: "Use case",
    },
    accent: {
      gradient: "from-emerald-500/20 via-teal-500/10 to-slate-950/80",
      glow: "bg-emerald-500/20",
      badge: "text-emerald-200 border-emerald-400/30 bg-emerald-500/10",
    },
    metrics: [
      {
        label: { ko: "확인 방식", en: "Review method" },
        value: { ko: "일간 요약", en: "Daily brief" },
      },
      {
        label: { ko: "판단 기준", en: "Decision basis" },
        value: { ko: "우선순위 확인", en: "Priority check" },
      },
      {
        label: { ko: "설비 특성", en: "Equipment scope" },
        value: { ko: "다점포 운영", en: "Multi-site ops" },
      },
    ],
    sections: [
      {
        heading: {
          ko: "현장의 고민",
          en: "The real question",
        },
        paragraphs: [
          {
            ko: "관리하는 매장이나 기기가 많아지면 '오늘 어디부터 봐야 할까?'가 가장 큰 고민입니다. 실시간 그래프보다 하루 요약이 실제 의사결정에 훨씬 도움됩니다.",
            en: "When you manage many locations, the biggest question is 'where do I look first today?' A daily summary beats staring at real-time charts when it comes to making actual decisions.",
          },
        ],
      },
      {
        heading: {
          ko: "활용 방법",
          en: "How it works",
        },
        bullets: [
          {
            ko: "매일 리포트로 기기별 상태 변화 확인",
            en: "Daily reports show condition changes per device",
          },
          {
            ko: "매장·설비별 기준이 다른 점을 반영한 비교",
            en: "Comparisons account for different baselines across sites",
          },
          {
            ko: "알림과 리포트로 점검 우선순위 조정",
            en: "Alerts and reports help you reorder inspection priorities",
          },
        ],
      },
    ],
    stack: [
      { ko: "패턴 추적", en: "Pattern tracking" },
      { ko: "장기 추세 분석", en: "Long-term trend analysis" },
      { ko: "정비 계획 연계", en: "Maintenance planning" },
    ],
  },
];

export function getCaseStudyBySlug(slugOrId: string) {
  return caseStudies.find(
    (caseStudy) => caseStudy.slug === slugOrId || caseStudy.id === slugOrId,
  );
}
