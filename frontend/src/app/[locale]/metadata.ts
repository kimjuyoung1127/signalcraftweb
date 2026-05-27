import { buildPageMetadata } from "@/lib/seo";

const pageSeo = {
  home: {
    path: "",
    ko: {
      title: "SignalCraft - 전원만 켜면 시작되는 AI 설비 모니터링",
      description:
        "소음과 진동을 읽어 냉동고, 컴프레서, 모터의 상태를 파악하고 매일 리포트와 이상 알림으로 알려드립니다.",
    },
    en: {
      title: "SignalCraft - AI facility monitoring that starts when power turns on",
      description:
        "SignalCraft reads vibration and noise from freezers, compressors, and motors, then sends daily reports and anomaly alerts.",
    },
  },
  about: {
    path: "/about",
    ko: {
      title: "SignalCraft 소개",
      description:
        "시그널크래프트가 소음·진동 기반 AI로 설비 상태를 읽고 현장 운영자가 바로 이해할 수 있는 신호로 바꾸는 방식을 소개합니다.",
    },
    en: {
      title: "About SignalCraft",
      description:
        "Learn how SignalCraft turns machine sound and vibration into clear equipment-health signals for operators.",
    },
  },
  whyUs: {
    path: "/why-us",
    ko: {
      title: "Why SignalCraft - 복잡한 세팅 없는 시설 관리",
      description:
        "24시간 자동 학습, AI 판단, QR 등록, 리포트와 알림까지 SignalCraft가 운영 부담을 줄이는 이유를 확인하세요.",
    },
    en: {
      title: "Why SignalCraft - Clear facility management without complex setup",
      description:
        "See how 24-hour learning, AI judgment, QR registration, reports, and alerts reduce operational load.",
    },
  },
  guide: {
    path: "/guide",
    ko: {
      title: "SignalCraft 설치 가이드",
      description:
        "전원 연결, QR 등록, 24시간 학습, 리포트 확인까지 SignalCraft 도입 흐름을 단계별로 안내합니다.",
    },
    en: {
      title: "SignalCraft Installation Guide",
      description:
        "Follow the SignalCraft setup flow from device power and QR registration to 24-hour learning and first reports.",
    },
  },
  cases: {
    path: "/cases",
    ko: {
      title: "SignalCraft 활용 사례",
      description:
        "무인 매장 냉동고, 컴프레서, 다점포 설비 관리 등 SignalCraft가 먼저 잡아낼 수 있는 현장 시나리오를 확인하세요.",
    },
    en: {
      title: "SignalCraft Use Cases",
      description:
        "Explore scenarios for unmanned store refrigeration, compressor monitoring, and multi-site equipment management.",
    },
  },
  news: {
    path: "/news",
    ko: {
      title: "SignalCraft 뉴스룸",
      description:
        "시그널크래프트의 최신 소식, 보도 자료, 인터뷰, 기술 인사이트를 모았습니다.",
    },
    en: {
      title: "SignalCraft Newsroom",
      description:
        "Read SignalCraft news, press updates, interviews, and technical insights.",
    },
  },
  contact: {
    path: "/contact",
    ko: {
      title: "SignalCraft 문의",
      description:
        "설비 상태 모니터링, 파일럿 도입, 데모 요청, 기술 지원이 필요하다면 SignalCraft 팀에 문의하세요.",
    },
    en: {
      title: "Contact SignalCraft",
      description:
        "Contact SignalCraft for equipment monitoring, pilot deployment, demo requests, and technical support.",
    },
  },
  privacy: {
    path: "/privacy",
    ko: {
      title: "개인정보처리방침",
      description: "SignalCraft 웹사이트와 서비스 이용 시 개인정보 처리 방침을 확인하세요.",
    },
    en: {
      title: "Privacy Policy",
      description:
        "Review how SignalCraft handles privacy for website and service interactions.",
    },
  },
  terms: {
    path: "/terms",
    ko: {
      title: "이용약관",
      description: "SignalCraft 웹사이트와 서비스 이용 조건을 확인하세요.",
    },
    en: {
      title: "Terms of Service",
      description: "Review the terms for using the SignalCraft website and service.",
    },
  },
};

export type StaticSeoKey = keyof typeof pageSeo;

export function generateStaticPageMetadata(key: StaticSeoKey, locale: string) {
  const normalizedLocale = locale === "en" ? "en" : "ko";
  const config = pageSeo[key];

  return buildPageMetadata({
    locale: normalizedLocale,
    path: config.path,
    title: config[normalizedLocale].title,
    description: config[normalizedLocale].description,
  });
}

