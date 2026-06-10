import Link from "next/link";

function localePath(path: string, locale: string): string {
  if (locale === "de") return path;
  return `/${locale}${path}`;
}

/**
 * Visible FAQ accordion for the homepage. The same questions are exposed as
 * JSON-LD via FAQSchema — Google requires FAQ content to be visible on the
 * page for rich results, so this section keeps schema and UI in sync.
 * Uses native <details>/<summary> for zero-JS accessibility.
 */
export default function FAQ({ locale, dict }: { locale: string; dict: any }) {
  const faqs = dict.home.faq;
  const t = dict.home.faqSection;

  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="tech-label">{t.label}</span>
          <h2 className="mt-4 h-section">
            {t.title} <span className="accent-text">{t.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)]">
            {t.description}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq: { question: string; answer: string }, index: number) => (
            <details key={index} className="faq-item card card--flat group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 sm:p-6">
                <span className="font-semibold text-[var(--foreground)] text-left">
                  {faq.question}
                </span>
                <svg
                  className="faq-chevron w-5 h-5 flex-shrink-0 text-[var(--modulo-accent)] transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1 text-[var(--foreground-muted)] leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* More questions CTA */}
        <p className="mt-10 text-center text-[var(--foreground-muted)]">
          {t.moreQuestions}{" "}
          <Link
            href={localePath("/kontakt", locale)}
            className="text-[var(--modulo-accent)] font-medium hover:underline underline-offset-4"
          >
            {dict.common.products.contactUs}
          </Link>
        </p>
      </div>
    </section>
  );
}
