import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import { ProductSchema, BreadcrumbSchema } from "@/components/SEO";
import { getDictionary } from "@/i18n/getDictionary";
import { type Locale, locales, hreflangAlternates } from "@/i18n/config";

function localePath(path: string, locale: string): string {
  if (locale === "de") return path;
  return `/${locale}${path}`;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    products.map((product) => ({ locale, slug: product.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug, locale as Locale);

  if (!product) {
    const dict = await getDictionary(locale as Locale);
    return {
      title: dict.productDetailPage.notFound,
    };
  }

  const baseUrl = locale === "cs" ? "https://moduloparking.cz" : "https://moduloparking.at";
  const lp = locale === "de" || locale === "cs" ? "" : `/${locale}`;

  return {
    title: `${product.name} - ${product.tagline}`,
    description: `${product.description} Kapazität: ${product.specs.vehicles} Fahrzeuge, ${product.specs.levels}, Tragkraft: ${product.specs.capacity}. Jetzt Angebot anfordern.`,
    keywords: [
      product.name,
      product.series,
      product.category,
      "Parksystem",
      "Parkplattform",
      "MODULO",
      "Österreich",
    ],
    alternates: {
      canonical: `${baseUrl}${lp}/produkte/${slug}`,
      languages: hreflangAlternates(`/produkte/${slug}`),
    },
    openGraph: {
      title: `${product.name} | MODULO Parksysteme`,
      description: product.description,
      url: `${baseUrl}${lp}/produkte/${slug}`,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale as Locale);
  const product = getProductBySlug(slug, locale as Locale);

  if (!product) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: localePath("/", locale) },
    { name: dict.productDetailPage.breadcrumbProducts, href: localePath("/produkte", locale) },
    { name: product.name, href: localePath(`/produkte/${slug}`, locale) },
  ];

  return (
    <>
      <ProductSchema product={product} />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header locale={locale} dict={dict} />
      <main id="main" className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-[var(--background)] relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 gradient-radial" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-[var(--foreground-muted)]">
                <li>
                  <Link href={localePath("/", locale)} className="hover:text-[var(--modulo-accent)]">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href={localePath("/produkte", locale)}
                    className="hover:text-[var(--modulo-accent)]"
                  >
                    {dict.productDetailPage.breadcrumbProducts}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-[var(--foreground)]">{product.name}</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative">
                <div className="tech-frame">
                  <div className="relative aspect-[4/3] image-well rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)]">
                    <Image
                      src={product.images[0]}
                      alt={`${product.name} – ${product.tagline}`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-contain p-8"
                      priority
                    />
                  </div>
                </div>
                {product.images.length > 1 && (
                  <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
                    {product.images.slice(1).map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[4/3] image-well rounded-[var(--radius-base)] overflow-hidden border border-[var(--border)]"
                      >
                        <Image
                          src={img}
                          alt={`${product.name} – ${dict.productDetailPage.description} ${idx + 2}`}
                          fill
                          sizes="(min-width: 1024px) 17vw, 33vw"
                          className="object-contain p-2"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                <span className="tech-label">{product.category}</span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                  {product.name}
                </h1>
                <p className="mt-2 text-xl text-[var(--modulo-accent)]">
                  {product.tagline}
                </p>
                <p className="mt-6 text-lg text-[var(--foreground-muted)]">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 card card--flat text-center">
                    <div className="text-2xl font-mono font-bold text-[var(--modulo-accent)] tabular-nums">
                      {product.specs.vehicles}
                    </div>
                    <div className="text-sm text-[var(--foreground-muted)]">
                      {dict.common.products.vehicles}
                    </div>
                  </div>
                  <div className="p-4 card card--flat text-center">
                    <div className="text-2xl font-mono font-bold text-[var(--modulo-accent)] tabular-nums">
                      {product.specs.levels}
                    </div>
                    <div className="text-sm text-[var(--foreground-muted)]">
                      {dict.common.products.levels}
                    </div>
                  </div>
                  <div className="p-4 card card--flat text-center">
                    <div className="text-base sm:text-lg font-mono font-bold text-[var(--modulo-accent)]">
                      {product.specs.capacity}
                    </div>
                    <div className="text-sm text-[var(--foreground-muted)]">
                      {dict.common.products.loadCapacity}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href={localePath("/kontakt", locale)}
                    className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    {dict.productDetailPage.requestQuote}
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
                    className="btn-outline inline-flex items-center justify-center gap-2 w-full sm:w-auto"
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
                    {dict.productDetailPage.callConsultation}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description & Features */}
        <section className="py-16 bg-[var(--background-secondary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Long Description */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
                  {dict.productDetailPage.description}
                </h2>
                <div className="article-body">
                  {product.longDescription.split("\n\n").map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
                  {dict.productDetailPage.featuresTitle}
                </h2>
                <ul className="space-y-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-[var(--modulo-accent)] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[var(--foreground)]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Variants */}
        {product.variants && product.variants.length > 0 && (
          <section className="py-16 bg-[var(--background)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
                {dict.productDetailPage.availableVariants}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.variants.map((variant, idx) => (
                  <div
                    key={idx}
                    className="p-6 card card--flat"
                  >
                    <h3 className="text-lg font-semibold text-[var(--modulo-accent)]">
                      {variant.name}
                    </h3>
                    {variant.description && (
                      <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                        {variant.description}
                      </p>
                    )}
                    <div className="mt-4 space-y-2 text-sm">
                      {variant.capacity && (
                        <div className="flex justify-between">
                          <span className="text-[var(--foreground-muted)]">
                            {dict.productDetailPage.capacity}
                          </span>
                          <span className="text-[var(--foreground)] font-mono">
                            {variant.capacity}
                          </span>
                        </div>
                      )}
                      {variant.loadCapacity && (
                        <div className="flex justify-between">
                          <span className="text-[var(--foreground-muted)]">
                            {dict.productDetailPage.loadCapacity}
                          </span>
                          <span className="text-[var(--foreground)] font-mono">
                            {variant.loadCapacity}
                          </span>
                        </div>
                      )}
                      {variant.pitDepth && (
                        <div className="flex justify-between">
                          <span className="text-[var(--foreground-muted)]">
                            {dict.productDetailPage.pitDepth}
                          </span>
                          <span className="text-[var(--foreground)] font-mono">
                            {variant.pitDepth}
                          </span>
                        </div>
                      )}
                      {variant.ceilingHeight && (
                        <div className="flex justify-between">
                          <span className="text-[var(--foreground-muted)]">
                            {dict.productDetailPage.ceilingHeight}
                          </span>
                          <span className="text-[var(--foreground)] font-mono">
                            {variant.ceilingHeight}
                          </span>
                        </div>
                      )}
                      {variant.deckType && (
                        <div className="flex justify-between">
                          <span className="text-[var(--foreground-muted)]">
                            {dict.productDetailPage.deckType}
                          </span>
                          <span className="text-[var(--foreground)] font-mono text-xs">
                            {variant.deckType}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Downloads */}
        {product.pdfs && product.pdfs.length > 0 && (
          <section className="py-16 bg-[var(--background-secondary)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
                {dict.productDetailPage.downloads}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.pdfs.map((pdf, idx) => (
                  <a
                    key={idx}
                    href={pdf.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 card card--flat group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-[var(--modulo-accent)]/10 text-[var(--modulo-accent)] rounded-[var(--radius-base)]">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-[var(--foreground)] group-hover:text-[var(--modulo-accent)] transition-colors">
                        {pdf.name}
                      </div>
                      <div className="text-xs text-[var(--foreground-muted)] font-mono">
                        {pdf.size}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Products CTA */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              {dict.productDetailPage.discoverOther}
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
              {dict.productDetailPage.discoverOtherDescription}
            </p>
            <Link
              href={localePath("/produkte", locale)}
              className="btn-outline inline-flex items-center gap-2"
            >
              {dict.productDetailPage.viewAllProducts}
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
          </div>
        </section>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
