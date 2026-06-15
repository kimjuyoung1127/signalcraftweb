export type SupportedLocale = "ko" | "en";
export type NewsCategory = "press" | "media" | "insight";

export interface LocalizedText {
  ko: string;
  en: string;
}

export interface NewsMediaAsset {
  src: string;
  alt: LocalizedText;
  caption?: LocalizedText;
}

export interface NewsArticleSection {
  heading?: LocalizedText;
  paragraphs?: LocalizedText[];
  bullets?: LocalizedText[];
}

export interface NewsArticleBody {
  summary: LocalizedText;
  highlights?: LocalizedText[];
  sections: NewsArticleSection[];
  quote?: {
    text: LocalizedText;
    attribution?: LocalizedText;
  };
}

export interface NewsArticle {
  id: string;
  slug: string;
  category: NewsCategory;
  publishedAt: string;
  featured: boolean;
  title: LocalizedText;
  excerpt: LocalizedText;
  heroMedia: NewsMediaAsset;
  gallery?: NewsMediaAsset[];
  youtubeUrl?: string;
  body: NewsArticleBody;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "busan-build-pass",
    slug: "busan-build-pass",
    category: "press",
    publishedAt: "2026-03-12",
    featured: true,
    title: {
      ko: "부산기술창업투자원 '2026 부비콘 빌드 육성사업' 서류합격",
      en: "SignalCraft passes screening for Busan Tech Startup Agency program",
    },
    excerpt: {
      ko: "시그널크래프트가 부산기술창업투자원 주관 '2026 부비콘 빌드 육성사업(부산초기창업패키지)' 서면평가를 통과했습니다.",
      en: "SignalCraft cleared the document screening for the 2026 B-Beacon Build program run by the Busan Tech Startup Investment Agency.",
    },
    heroMedia: {
      src: "/media/news/busan-build-card.jpg",
      alt: {
        ko: "부산기술창업투자원 서류합격 안내 캡처",
        en: "Notice confirming SignalCraft passed the Busan program screening",
      },
      caption: {
        ko: "부산기술창업투자원 발송 안내 메시지 캡처",
        en: "Notice message from the Busan Tech Startup Investment Agency",
      },
    },
    gallery: [
      {
        src: "/media/news/busan-build-proof.jpg",
        alt: {
          ko: "부산기술창업투자원 서면평가 결과 안내 캡처",
          en: "Screening result notice from the Busan Tech Startup Investment Agency",
        },
        caption: {
          ko: "부산기술창업투자원 안내 메시지 캡처",
          en: "Notice message from the Busan Tech Startup Investment Agency",
        },
      },
    ],
    body: {
      summary: {
        ko: "시그널크래프트는 부산기술창업투자원의 '2026 부비콘 빌드 육성사업(부산초기창업패키지)' 서면평가를 통과해 서류합격 통보를 받았습니다.",
        en: "SignalCraft received notice that it passed the document screening for the 2026 B-Beacon Build program, part of the Busan Early Startup Package.",
      },
      highlights: [
        {
          ko: "부산 제조·산업 현장과의 연결을 넓힐 수 있는 초기 창업 지원 프로그램 진입",
          en: "Entering an early-stage program linked to Busan's industrial and manufacturing ecosystem",
        },
        {
          ko: "음향 기반 설비 진단 기술의 사업성과 현장 적합성을 외부에서 인정받은 계기",
          en: "External recognition of the commercial viability and field fit of our acoustic monitoring approach",
        },
        {
          ko: "지역 산업 생태계와 더 깊이 연결되는 다음 단계를 준비하는 계기",
          en: "A stepping stone toward deeper engagement with the regional industry ecosystem",
        },
      ],
      sections: [
        {
          heading: {
            ko: "이번 결과가 뜻하는 것",
            en: "What this means",
          },
          paragraphs: [
            {
              ko: "이번 서류합격은 시그널크래프트의 AI 기반 소음·진동 모니터링이 초기 창업 프로그램에서도 경쟁력이 인정받았다는 뜻입니다.",
              en: "Passing the screening shows that our noise-and-vibration monitoring approach is competitive even in the context of early-stage venture programs.",
            },
            {
              ko: "부산권 제조·중공업 현장과의 연결을 넓히려는 시점에서, 지역 프로그램 참여는 실증과 시장 검증의 좋은 발판입니다.",
              en: "With SignalCraft looking to expand into Busan's manufacturing and heavy-industry scene, joining a region-backed program opens doors for pilots and real-world testing.",
            },
          ],
        },
        {
          heading: {
            ko: "다음 단계",
            en: "Next steps",
          },
          paragraphs: [
            {
              ko: "시그널크래프트는 부산 제조·산업 현장과의 연결을 넓히고, 실제 현장에서 바로 쓸 수 있는 모니터링 경험을 구체화할 계획입니다.",
              en: "We plan to build on this by strengthening ties with Busan's industrial ecosystem and refining our monitoring product for real operational environments.",
            },
          ],
          bullets: [
            {
              ko: "부산 거점 산업 파트너와의 접점 확대",
              en: "Grow connections with Busan-based industrial partners",
            },
            {
              ko: "무인 매장·소규모 설비 관점의 서비스 설명 구체화",
              en: "Sharpen the product story for unmanned stores and small-scale equipment",
            },
            {
              ko: "현장 적용 사례와 리포트 경험 중심으로 후속 자료 정리",
              en: "Prepare follow-up materials focused on field deployments and reporting",
            },
          ],
        },
      ],
      quote: {
        text: {
          ko: "시그널크래프트는 산업 현장의 소리를 운영팀이 바로 쓸 수 있는 신호로 바꾸면서, 지역 산업과 함께 자라는 기술 회사를 지향합니다.",
          en: "We want to grow alongside regional industry by turning factory sounds into signals that operations teams can actually use.",
        },
      },
    },
  },
  {
    id: "founder-interview-aw-2026",
    slug: "founder-interview-aw-2026",
    category: "media",
    publishedAt: "2026-03-12",
    featured: true,
    title: {
      ko: "SignalCraft 인터뷰 영상 공개, AW 2026 현장 IR 피칭도 함께 조명",
      en: "SignalCraft interview goes live — plus highlights from the AW 2026 AI Factory Stage pitch",
    },
    excerpt: {
      ko: "시그널크래프트의 기술 방향과 현장 비전을 담은 인터뷰 영상이 공개되었습니다. AW 2026 AI Factory Stage 피칭 현장도 함께 확인할 수 있습니다.",
      en: "A new interview video covers SignalCraft's technology direction and field vision, along with on-site footage from the AW 2026 AI Factory Stage pitch.",
    },
    heroMedia: {
      src: "/media/news/interview-stage-card.jpg",
      alt: {
        ko: "AW 2026 AI Factory Stage에서 발표 중인 SignalCraft",
        en: "SignalCraft presenting on the AI Factory Stage at AW 2026",
      },
      caption: {
        ko: "스마트공장·자동차산업전 AW 2026 AI Factory Stage 현장",
        en: "On stage at Smart Factory + Automation World 2026",
      },
    },
    gallery: [
      {
        src: "/media/news/interview-stage-portrait.jpg",
        alt: {
          ko: "AW 2026 IR 피칭 현장을 촬영한 사진",
          en: "Photo from the AW 2026 IR pitching session",
        },
        caption: {
          ko: "현장 사진: AI Factory Stage IR Pitching",
          en: "On-site photo: AI Factory Stage IR Pitching",
        },
      },
    ],
    youtubeUrl: "https://www.youtube-nocookie.com/embed/KthTaxbPvj8",
    body: {
      summary: {
        ko: "시그널크래프트의 비전과 제품 방향을 소개하는 인터뷰 영상이 공개되었습니다. 산업 현장의 소리를 활용한 예지보전 접근법과 실제 도입 방향을 확인할 수 있습니다.",
        en: "A new interview introduces SignalCraft's vision and product direction — covering how the team uses industrial sound for predictive maintenance and how the solution is taking shape for real deployments.",
      },
      highlights: [
        {
          ko: "창업 배경과 제품 방향을 한 번에 파악할 수 있는 인터뷰",
          en: "An interview that covers the founding story and product direction in one go",
        },
        {
          ko: "AW 2026 AI Factory Stage IR 피칭 현장 사진 포함",
          en: "Includes on-site photos from the AW 2026 AI Factory Stage pitch",
        },
        {
          ko: "웹사이트에서 바로 시청 가능",
          en: "Watch directly on the site with the embedded player",
        },
      ],
      sections: [
        {
          heading: {
            ko: "영상에서 다루는 내용",
            en: "What the interview covers",
          },
          paragraphs: [
            {
              ko: "영상에서는 설치 후 바로 작동하는 AI 모니터링, 소음·진동으로 기준을 정하는 방식, 운영자가 복잡한 그래프 대신 상태 요약과 리포트를 받는 경험을 다룹니다.",
              en: "The interview walks through how SignalCraft's AI monitoring works right after installation, how it learns a baseline from noise and vibration, and how operators get simple status summaries instead of complex charts.",
            },
          ],
          bullets: [
            {
              ko: "전원 넣고 QR 등록하면 바로 시작되는 간편한 도입",
              en: "Plug in, scan a QR code, and you're live",
            },
            {
              ko: "현장 데이터 보안을 고려한 엣지 분석",
              en: "Edge-based analysis that keeps site data secure",
            },
            {
              ko: "매일 리포트와 이상 알림 중심의 운영 경험",
              en: "An operating experience centered on daily reports and anomaly alerts",
            },
          ],
        },
        {
          heading: {
            ko: "AW 2026 현장에서 쌓은 신뢰",
            en: "Building credibility at AW 2026",
          },
          paragraphs: [
            {
              ko: "공개한 현장 사진은 AW 2026 AI Factory Stage IR 피칭 장면입니다. 시그널크래프트가 현장, 투자자, 파트너들에게 어떤 메시지를 전하는지 보여주는 순간입니다.",
              en: "The on-site photos capture the IR pitch at the AW 2026 AI Factory Stage — showing how SignalCraft is presenting itself to operators, partners, and investors in the industry.",
            },
          ],
        },
      ],
      quote: {
        text: {
          ko: "우리는 들리지 않는 이상 신호를, 공장이 바로 대응할 수 있는 인사이트로 바꾸고 싶습니다.",
          en: "We want to turn the anomaly signals people can't hear into insight that a factory can act on right away.",
        },
      },
    },
  },
  {
    id: "acoustic-ai-insight",
    slug: "acoustic-ai-insight",
    category: "insight",
    publishedAt: "2026-03-05",
    featured: true,
    title: {
      ko: "왜 24시간 학습이 먼저인가",
      en: "Why the first 24 hours matter",
    },
    excerpt: {
      ko: "SignalCraft가 설치 직후 바로 알림을 보내지 않고, 먼저 하루 동안 소음과 진동의 '평소 패턴'을 익히는 이유를 정리했습니다.",
      en: "Why SignalCraft doesn't alert right after installation — and why learning the normal pattern for a day first makes everything work better.",
    },
    heroMedia: {
      src: "/media/news/acoustic-insight-card.jpg",
      alt: {
        ko: "기준 학습과 상태 모니터링 인사이트를 표현한 그래픽 카드",
        en: "Graphic card illustrating baseline learning and condition monitoring",
      },
    },
    body: {
      summary: {
        ko: "SignalCraft는 설치 후 첫 24시간 동안 평소 소음과 진동을 익혀 기기마다 기준을 잡습니다. 이 글에서는 그 과정이 왜 중요한지 설명합니다.",
        en: "SignalCraft spends the first 24 hours learning each machine's normal sound and vibration pattern. This article explains why that step makes the rest of the product actually useful.",
      },
      sections: [
        {
          heading: {
            ko: "왜 기준부터 잡아야 하나",
            en: "Why a baseline has to come first",
          },
          paragraphs: [
            {
              ko: "같은 설비라도 위치, 주변 소음, 사용 습관, 전원 환경에 따라 정상 기준이 다릅니다. 첫날부터 고정 수치로 판단하면 오탐이 늡니다. 기준을 먼저 정해야 알림과 리포트가 의미 있습니다.",
              en: "Even identical equipment sounds different depending on where it is, what's around it, how it's used, and the power setup. Judging from a fixed threshold on day one leads to noisy alerts. Learning the baseline first makes every alert and report afterward actually meaningful.",
            },
          ],
        },
        {
          heading: {
            ko: "현장에서 왜 중요한가",
            en: "Why operators care",
          },
          bullets: [
            {
              ko: "복잡한 설정 없이 기기마다 정상 패턴을 자동으로 파악",
              en: "Each device's normal pattern gets figured out automatically — no manual tuning",
            },
            {
              ko: "오탐을 줄여서 진짜 필요한 알림에 집중 가능",
              en: "Fewer false alarms mean operators focus on the alerts that actually matter",
            },
            {
              ko: "매일 리포트와 상태 요약의 기준이 되는 데이터 축적",
              en: "Builds the data foundation that daily reports and status summaries rely on",
            },
          ],
        },
      ],
    },
  },
];

export function getNewsArticleBySlug(slugOrId: string) {
  return newsArticles.find(
    (article) => article.slug === slugOrId || article.id === slugOrId,
  );
}

export function getLocalizedText(
  value: LocalizedText,
  locale: string,
): string {
  return locale === "ko" ? value.ko : value.en;
}

export function formatArticleDate(date: string, locale: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  if (locale === "ko") {
    const year = parsed.getFullYear();
    const month = `${parsed.getMonth() + 1}`.padStart(2, "0");
    const day = `${parsed.getDate()}`.padStart(2, "0");
    return `${year}.${month}.${day}`;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
}
