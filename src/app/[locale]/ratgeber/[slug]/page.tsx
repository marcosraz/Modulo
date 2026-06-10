import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, getArticleBySlug } from "@/data/articles";
import { BreadcrumbSchema, ArticleSchema } from "@/components/SEO";
import { getDictionary } from "@/i18n/getDictionary";
import { type Locale, locales, hreflangAlternates } from "@/i18n/config";

function localePath(path: string, locale: string): string {
  if (locale === "de") return path;
  return `/${locale}${path}`;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    articles.map((article) => ({ locale, slug: article.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Artikel nicht gefunden" };
  }

  const baseUrl = locale === "cs" ? "https://modulparking.cz" : "https://moduloparking.at";
  const localePrefix = locale === "de" || locale === "cs" ? "" : `/${locale}`;

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.tags,
    alternates: {
      canonical: `${baseUrl}${localePrefix}/ratgeber/${slug}`,
      languages: hreflangAlternates(`/ratgeber/${slug}`),
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${baseUrl}${localePrefix}/ratgeber/${slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale as Locale);
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: localePath("/", locale) },
    { name: dict.guideDetailPage.breadcrumbGuides, href: localePath("/ratgeber", locale) },
    { name: article.title, href: localePath(`/ratgeber/${slug}`, locale) },
  ];

  const relatedArticles = articles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  const localeString = locale === "de" ? "de-AT" : locale === "cs" ? "cs-CZ" : "en-GB";

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleSchema
        title={article.title}
        description={article.metaDescription}
        slug={article.slug}
        publishedAt={article.publishedAt}
        updatedAt={article.updatedAt}
        author={article.author}
      />
      <Header locale={locale} dict={dict} />
      <main className="pt-20">
        {/* Article Header */}
        <section className="py-16 bg-[var(--background)] relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 gradient-radial" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
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
                    href={localePath("/ratgeber", locale)}
                    className="hover:text-[var(--modulo-accent)]"
                  >
                    {dict.guideDetailPage.breadcrumbGuides}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-[var(--foreground)] truncate max-w-[200px]">
                  {article.title}
                </li>
              </ol>
            </nav>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 text-sm font-medium bg-[var(--modulo-accent)]/10 text-[var(--modulo-accent)]">
                {article.category}
              </span>
              <span className="text-sm text-[var(--foreground-muted)]">
                {article.readingTime} {dict.guideDetailPage.readingTime}
              </span>
              <span className="text-sm text-[var(--foreground-muted)]">
                {new Date(article.publishedAt).toLocaleDateString(localeString, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)]">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-6 text-xl text-[var(--foreground-muted)]">
              {article.excerpt}
            </p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs border border-[var(--border)] text-[var(--foreground-muted)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-[var(--background-secondary)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <article className="prose prose-invert prose-lg max-w-none">
              <div
                className="article-content text-[var(--foreground-muted)]"
                dangerouslySetInnerHTML={{
                  __html: formatContent(article.content),
                }}
              />
            </article>
          </div>
        </section>

        {/* CTA Box */}
        <section className="py-12 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="p-8 border border-[var(--modulo-accent)] bg-[var(--modulo-accent)]/5">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-[var(--modulo-accent)]/10 text-[var(--modulo-accent)]">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">
                    {dict.guideDetailPage.questionsTitle}
                  </h3>
                  <p className="mt-2 text-[var(--foreground-muted)]">
                    {dict.guideDetailPage.questionsDescription}
                  </p>
                </div>
                <Link
                  href={localePath("/kontakt", locale)}
                  className="btn-primary inline-flex items-center gap-2"
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
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-[var(--background-secondary)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
                {dict.guideDetailPage.relatedArticles}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.slug}
                    href={localePath(`/ratgeber/${relatedArticle.slug}`, locale)}
                    className="card group block"
                  >
                    <div className="p-6">
                      <span className="text-xs font-medium text-[var(--modulo-accent)]">
                        {relatedArticle.category}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--modulo-accent)] transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--foreground-muted)] line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}

function formatContent(content: string): string {
  // Simple markdown-like formatting
  return content
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-[var(--foreground)] mt-8 mb-4">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-[var(--foreground)] mt-6 mb-3">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--foreground)]">$1</strong>')
    .replace(/^\- (.*$)/gim, '<li class="ml-4">$1</li>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(Boolean);
      const row = cells.map(cell => `<td class="border border-[var(--border)] px-4 py-2">${cell.trim()}</td>`).join('');
      return `<tr>${row}</tr>`;
    });
}
