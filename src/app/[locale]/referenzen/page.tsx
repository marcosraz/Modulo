import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getReferences } from "@/data/references";
import ReferenceGrid from "@/components/filters/ReferenceGrid";
import { BreadcrumbSchema } from "@/components/SEO";
import { getDictionary } from "@/i18n/getDictionary";
import { type Locale, hreflangAlternates } from "@/i18n/config";

function localePath(path: string, locale: string): string {
  if (locale === "de") return path;
  return `/${locale}${path}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const baseUrl = locale === "cs" ? "https://moduloparking.cz" : "https://moduloparking.at";
  const lp = locale === "de" || locale === "cs" ? "" : `/${locale}`;

  return {
    title: dict.references.meta.title,
    description: dict.references.meta.description,
    alternates: {
      canonical: `${baseUrl}${lp}/referenzen`,
      languages: hreflangAlternates(`/referenzen`),
    },
    openGraph: {
      title: dict.references.meta.title,
      description: dict.references.meta.description,
      url: `${baseUrl}${lp}/referenzen`,
    },
  };
}

export default async function ReferenzenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const breadcrumbs = [
    { name: "Home", href: localePath("/", locale) },
    { name: dict.common.nav.references, href: localePath("/referenzen", locale) },
  ];

  const categoryButtons = [
    { value: "all", label: dict.references.categories.all },
    { value: "residential", label: dict.references.categories.residential },
    { value: "commercial", label: dict.references.categories.commercial },
    { value: "hotel", label: dict.references.categories.hotel },
    { value: "public", label: dict.references.categories.public },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <Header locale={locale} dict={dict} />
      <main id="main" className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-[var(--background)] relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 gradient-radial" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <span className="tech-label">{dict.references.label}</span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                {dict.references.title}{" "}
                <span className="text-gradient">{dict.references.titleHighlight}</span>
              </h1>
              <p className="mt-6 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
                {dict.references.description}
              </p>
            </div>
          </div>
        </section>

        {/* Manufacturer Note */}
        <section className="py-4 bg-[var(--modulo-accent)]/5 border-b border-[var(--modulo-accent)]/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-center text-sm text-[var(--foreground-muted)] flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-[var(--modulo-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {dict.references.manufacturerNote}
            </p>
          </div>
        </section>

        {/* Category Filter + Projects (client-side filtering, SSR-rendered) */}
        <ReferenceGrid
          references={getReferences(locale as Locale)}
          categoryButtons={categoryButtons}
          categoryLabels={dict.references.categories}
          locale={locale}
          dict={dict}
        />

        {/* CTA Section */}
        <section className="py-16 bg-[var(--modulo-accent)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {dict.references.ctaTitle}
            </h2>
            <p className="mt-4 text-lg text-white/80">
              {dict.references.ctaDescription}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={localePath("/kontakt", locale)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[var(--modulo-accent)] font-semibold hover:bg-gray-100 transition-colors"
              >
                {dict.references.ctaPrimary}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={localePath("/produkte", locale)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
              >
                {dict.references.ctaSecondary}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
