import { Metadata } from "next";
import { getDictionary } from "@/i18n/getDictionary";
import { type Locale, hreflangAlternates } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const baseUrl = locale === "cs" ? "https://modulparking.cz" : "https://moduloparking.at";
  const lp = locale === "de" || locale === "cs" ? "" : `/${locale}`;

  return {
    title: dict.contact.meta.title,
    description: dict.contact.meta.description,
    alternates: {
      canonical: `${baseUrl}${lp}/kontakt`,
      languages: hreflangAlternates(`/kontakt`),
    },
  };
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
