import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/cases";
import { newsArticles } from "@/content/news";
import { routing } from "@/i18n/routing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://signalcraft.kr";
const staticRoutes = ["", "/about", "/why-us", "/guide", "/cases", "/news", "/contact", "/privacy", "/terms"];
const staticLastModified = new Date("2026-05-27");

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedStaticRoutes = routing.locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: staticLastModified,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.7,
    })),
  );

  const localizedCaseRoutes = routing.locales.flatMap((locale) =>
    caseStudies.map((caseStudy) => ({
      url: `${siteUrl}/${locale}/cases/${caseStudy.slug}`,
      lastModified: staticLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  );

  const localizedNewsRoutes = routing.locales.flatMap((locale) =>
    newsArticles.map((article) => ({
      url: `${siteUrl}/${locale}/news/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "yearly" as const,
      priority: article.featured ? 0.7 : 0.5,
    })),
  );

  return [...localizedStaticRoutes, ...localizedCaseRoutes, ...localizedNewsRoutes];
}
