import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articleCategories, getArticles, getArticleCategoryLabels } from "@/data/articles";
import ArticleList from "@/components/filters/ArticleList";
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
  const localePrefix = locale === "de" || locale === "cs" ? "" : `/${locale}`;

  return {
    title: dict.guidesPage.meta.title,
    description: dict.guidesPage.meta.description,
    keywords: [
      "Parksystem Ratgeber",
      "Parkplattform Kaufberatung",
      "Parklift Vergleich",
      "Doppelparker Tipps",
    ],
    alternates: {
      canonical: `${baseUrl}${localePrefix}/ratgeber`,
      languages: hreflangAlternates(`/ratgeber`),
    },
    openGraph: {
      title: dict.guidesPage.meta.ogTitle,
      description: dict.guidesPage.meta.ogDescription,
      url: `${baseUrl}${localePrefix}/ratgeber`,
    },
  };
}

export default async function RatgeberPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const breadcrumbs = [
    { name: "Home", href: localePath("/", locale) },
    { name: dict.guidesPage.label, href: localePath("/ratgeber", locale) },
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
              <span className="tech-label">{dict.guidesPage.label}</span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                {dict.guidesPage.title}{" "}
                <span className="text-gradient">{dict.guidesPage.titleHighlight}</span>
              </h1>
              <p className="mt-6 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
                {dict.guidesPage.description}
              </p>
            </div>
          </div>
        </section>

        {/* Categories + Articles (client-side filtering, SSR-rendered) */}
        <ArticleList
          articles={getArticles(locale as Locale)}
          categories={articleCategories}
          categoryLabels={getArticleCategoryLabels(locale as Locale)}
          locale={locale}
          dict={dict}
        />

        {/* CTA Section */}
        <section className="py-16 bg-[var(--background-secondary)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <span className="tech-label">{dict.guidesPage.ctaLabel}</span>
            <h2 className="mt-4 text-3xl font-bold text-[var(--foreground)]">
              {dict.guidesPage.ctaTitle}
            </h2>
            <p className="mt-4 text-[var(--foreground-muted)]">
              {dict.guidesPage.ctaDescription}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={localePath("/kontakt", locale)}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                {dict.home.hero.ctaSecondary}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <a
                href="tel:+436767263487"
                className="btn-outline inline-flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {dict.guidesPage.callNow}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
