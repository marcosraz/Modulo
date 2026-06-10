import Link from "next/link";

function localePath(path: string, locale: string): string {
  if (locale === "de") return path;
  return `/${locale}${path}`;
}

export default function CTA({ locale, dict }: { locale: string; dict: any }) {
  return (
    <section className="py-28 lg:py-32 bg-[var(--background)] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--modulo-accent)]/12 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--modulo-accent)]/[0.06] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <span className="badge badge--ghost">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {dict.common.cta.badge}
        </span>

        {/* Heading */}
        <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
          {dict.common.cta.title}{" "}
          <span className="text-gradient">{dict.common.cta.titleHighlight}</span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-[var(--foreground-muted)] max-w-2xl mx-auto">
          {dict.common.cta.description}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={localePath("/kontakt", locale)} className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto">
            {dict.common.cta.primaryButton}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href={dict.common.cta.phoneHref || "tel:+436767263487"}
            className="btn-outline inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {dict.common.cta.phoneLabel}
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[var(--foreground-muted)]">
          {[dict.common.cta.trust1, dict.common.cta.trust2, dict.common.cta.trust3].map((trust: string) => (
            <div key={trust} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--modulo-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {trust}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
