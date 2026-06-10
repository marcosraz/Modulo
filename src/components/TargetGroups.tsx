const groupIcons = [
  (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  ),
];

export default function TargetGroups({ locale, dict }: { locale: string; dict: any }) {
  const groups = dict.home.targetGroups.groups;

  return (
    <section className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-7xl 2xl:max-w-[88rem] mx-auto px-6 lg:px-8 2xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tech-label">{dict.home.targetGroups.label}</span>
          <h2 className="mt-4 h-section">
            {dict.home.targetGroups.title} <span className="accent-text">{dict.home.targetGroups.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {dict.home.targetGroups.description}
          </p>
        </div>

        {/* Target Groups Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group: any, index: number) => (
            <div key={index} className="card card--flat group p-8">
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-[var(--radius-base)] border border-[var(--modulo-accent)]/30 text-[var(--modulo-accent)] group-hover:bg-[var(--modulo-accent)] group-hover:text-white transition-all duration-300">
                  {groupIcons[index] || groupIcons[0]}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[var(--foreground)] group-hover:text-[var(--modulo-accent)] transition-colors">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-[var(--foreground-muted)]">
                    {group.description}
                  </p>

                  {/* Features list */}
                  <ul className="mt-4 space-y-2">
                    {group.features.map((feature: string, featureIndex: number) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-[var(--foreground)]"
                      >
                        <svg
                          className="w-4 h-4 text-[var(--modulo-accent)] flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
