import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import Providers from "@/components/Providers";
import { OrganizationSchema, LocalBusinessSchema } from "@/components/SEO";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { locales, type Locale, hreflangAlternates } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const ogLocaleMap: Record<Locale, string> = {
  de: "de_AT",
  en: "en_GB",
  cs: "cs_CZ",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const ogLocale = ogLocaleMap[locale as Locale] || "de_AT";

  const baseUrl = locale === "cs" ? "https://moduloparking.cz" : "https://moduloparking.at";
  const localePath = locale === "de" || locale === "cs" ? "" : `/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: dict.common.meta.siteTitle,
      template: `%s | ${dict.common.meta.siteName}`,
    },
    description: dict.common.meta.siteDescription,
    keywords: [
      "Parksysteme",
      "Parkplattformen",
      "Parklift",
      "Doppelparker",
      "Stapelparker",
      "MODULO",
      "parking systems",
      "parkovaci systemy",
    ],
    authors: [{ name: dict.common.meta.siteName }],
    creator: dict.common.meta.siteName,
    publisher: dict.common.meta.siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      url: `${baseUrl}${localePath}`,
      siteName: dict.common.meta.siteName,
      title: dict.common.meta.siteTitle,
      description: dict.common.meta.siteDescription,
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${dict.common.meta.siteName} - Parking Systems`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.common.meta.siteTitle,
      description: dict.common.meta.siteDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}${localePath}`,
      languages: hreflangAlternates("/"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();",
          }}
        />
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
