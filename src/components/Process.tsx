import Link from "next/link";

function localePath(path: string, locale: string): string {
  if (locale === "de") return path;
  return `/${locale}${path}`;
}

export default function Process({ locale, dict }: { locale: string; dict: any }) {
  const steps = dict.home.process.steps;

  return (
    <section className="py-24 bg-[var(--background)] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[88rem] mx-auto px-6 lg:px-8 2xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tech-label">{dict.home.process.label}</span>
          <h2 className="mt-4 h-section">
            {dict.home.process.title}{" "}
            <span className="accent-text">{dict.home.process.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {dict.home.process.description}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[var(--modulo-accent)]/15 via-[var(--modulo-accent)]/50 to-[var(--modulo-accent)]/15" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step: any, index: number) => (
              <div key={index} className="relative text-center lg:px-4 group">
                {/* Step number */}
                <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--background)] border-2 border-[var(--modulo-accent)]/40 group-hover:border-[var(--modulo-accent)] transition-colors duration-300">
                  <span className="font-mono font-bold text-lg text-[var(--modulo-accent)] tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Factory / manufacturer note */}
        <div className="mt-16 flex justify-center">
          <Link
            href={localePath("/ueber-uns", locale)}
            className="inline-flex items-center gap-3 px-5 py-3 card card--flat text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] max-w-2xl text-center"
          >
            <svg className="w-5 h-5 flex-shrink-0 text-[var(--modulo-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>{dict.home.process.factory}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
