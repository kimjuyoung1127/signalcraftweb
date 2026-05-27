import type { Metadata } from "next";

export type AppLocale = "ko" | "en";

const defaultSiteUrl = "https://signalcraft.kr";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;

export const defaultSeo = {
  siteName: "SignalCraft",
  title: {
    ko: "SignalCraft - 소음·진동 기반 AI 설비 모니터링",
    en: "SignalCraft - AI equipment monitoring from sound and vibration",
  },
  description: {
    ko: "시그널크래프트는 소음과 진동 패턴을 읽어 설비 상태를 모니터링하고, 매일 리포트와 이상 알림으로 운영자가 빠르게 대응하도록 돕습니다.",
    en: "SignalCraft reads vibration and noise patterns to monitor equipment health, then delivers daily reports and anomaly alerts for operators.",
  },
  image: "/media/news/acoustic-insight-card.jpg",
};

export function normalizeLocale(locale: string): AppLocale {
  return locale === "en" ? "en" : "ko";
}

export function localizedPath(locale: string, path = "") {
  const normalizedLocale = normalizeLocale(locale);
  const normalizedPath = path === "/" ? "" : path;
  return `/${normalizedLocale}${normalizedPath}`;
}

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function localizedAlternates(path = "") {
  return {
    ko: localizedPath("ko", path),
    en: localizedPath("en", path),
    "x-default": localizedPath("ko", path),
  };
}

export function buildPageMetadata({
  locale,
  path = "",
  title,
  description,
  image = defaultSeo.image,
  type = "website",
}: {
  locale: string;
  path?: string;
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const normalizedLocale = normalizeLocale(locale);
  const pageTitle = title ?? defaultSeo.title[normalizedLocale];
  const pageDescription = description ?? defaultSeo.description[normalizedLocale];
  const canonical = localizedPath(normalizedLocale, path);
  const imageUrl = absoluteUrl(image);

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical,
      languages: localizedAlternates(path),
    },
    openGraph: {
      type,
      url: canonical,
      siteName: defaultSeo.siteName,
      title: pageTitle,
      description: pageDescription,
      locale: normalizedLocale === "ko" ? "ko_KR" : "en_US",
      alternateLocale: normalizedLocale === "ko" ? ["en_US"] : ["ko_KR"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
    },
  };
}
