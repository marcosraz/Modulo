"use client";

import Link from "next/link";
import Image from "next/image";

function localePath(path: string, locale: string): string {
  if (locale === "de") return path;
  return `/${locale}${path}`;
}

export default function Hero({ locale, dict }: { locale: string; dict: any }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[var(--background)]" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 gradient-radial" />

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--modulo-accent)]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[var(--modulo-accent)]/3 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            {/* Tech label */}
            <div className="animate-fade-up">
              <span className="tech-label">{dict.home.hero.label}</span>
            </div>

            {/* Main heading */}
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] animate-fade-up delay-100">
              {dict.home.hero.titleLine1}
              <br />
              <span className="text-gradient">{dict.home.hero.titleLine2}</span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg md:text-xl text-[var(--foreground-muted)] max-w-xl animate-fade-up delay-200">
              {dict.home.hero.description}
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-8 animate-fade-up delay-300">
              <div>
                <div className="stat-number">{dict.home.hero.stat1Value}</div>
                <div className="text-sm text-[var(--foreground-muted)] mt-1">
                  {dict.home.hero.stat1Label}
                </div>
              </div>
              <div>
                <div className="stat-number">{dict.home.hero.stat2Value}</div>
                <div className="text-sm text-[var(--foreground-muted)] mt-1">
                  {dict.home.hero.stat2Label}
                </div>
              </div>
              <div>
                <div className="stat-number">{dict.home.hero.stat3Value}</div>
                <div className="text-sm text-[var(--foreground-muted)] mt-1">
                  {dict.home.hero.stat3Label}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
              <Link href={localePath("/produkte", locale)} className="btn-primary inline-flex items-center justify-center gap-2">
                {dict.home.hero.ctaPrimary}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href={localePath("/kontakt", locale)} className="btn-outline inline-flex items-center justify-center gap-2">
                {dict.home.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-fade-up delay-500">
            <div className="tech-frame">
              <div className="relative aspect-[4/3] bg-[var(--background-secondary)] rounded overflow-hidden">
                <Image
                  src="/images/products/parker-c100-basic.png"
                  alt="MODULO Parker C100 Parkplattform"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-[var(--modulo-accent)] text-[var(--modulo-black)] px-6 py-3 text-sm font-semibold">
              <span className="font-mono">PARKER-C100</span>
              <br />
              <span className="text-xs opacity-75">4 Fahrzeuge · 2 Ebenen</span>
            </div>

            {/* Technical decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border border-[var(--border)]/30 rounded-full" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-[var(--modulo-accent)]/20 rounded-full" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[var(--border)] rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[var(--modulo-accent)] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
