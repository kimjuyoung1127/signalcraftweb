import type { Metadata } from "next";
import "@/app/globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Header } from "@/components/shared/layout/Header";
import { Footer } from "@/components/shared/layout/Footer";
import { FloatingActions } from "@/features/contact/FloatingActions";
import { notFound } from 'next/navigation';
import { routing } from "@/i18n/routing";
import { JsonLd } from "@/components/shared/JsonLd";
import { absoluteUrl, defaultSeo, normalizeLocale, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultSeo.title.ko,
    template: "%s | SignalCraft",
  },
  description: defaultSeo.description.ko,
  applicationName: "SignalCraft",
  authors: [{ name: "SignalCraft" }],
  creator: "SignalCraft",
  publisher: "SignalCraft",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ko' }];
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SignalCraft",
    url: siteUrl,
    logo: absoluteUrl("/signalcraft-logo.png"),
    email: "sndercer@gmail.com",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "sndercer@gmail.com",
        telephone: "+82-10-2418-6897",
        availableLanguage: ["ko", "en"],
      },
    ],
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SignalCraft",
    url: siteUrl,
    inLanguage: normalizedLocale === "ko" ? "ko-KR" : "en-US",
  };

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${locale === 'ko' ? 'font-pretendard' : 'font-outfit'} antialiased bg-background text-foreground transition-colors duration-300 overflow-x-hidden break-keep`}
      >
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="pt-16 min-h-screen flex flex-col">
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <FloatingActions />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
