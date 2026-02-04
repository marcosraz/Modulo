# ARCHITECTURE.md - Modullo Parking Austria

> **Auto-Update:** Diese Datei wird bei Code-Änderungen automatisch mit Änderungsprotokoll aktualisiert.
> Siehe [Änderungsprotokoll](#änderungsprotokoll) am Ende.

## Übersicht

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           MODULLO NEXT.JS APP                               │
│                         (Next.js 16 + React 19)                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐                  │
│  │   PAGES      │    │  COMPONENTS  │    │    DATA      │                  │
│  │  (App Router)│◄───│  (React TSX) │◄───│   (Static)   │                  │
│  └──────┬───────┘    └──────┬───────┘    └──────────────┘                  │
│         │                   │                                               │
│         ▼                   ▼                                               │
│  ┌──────────────┐    ┌──────────────┐                                      │
│  │   LAYOUTS    │    │   CONTEXT    │                                      │
│  │  (Metadata)  │    │   (Theme)    │                                      │
│  └──────────────┘    └──────────────┘                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Verzeichnisstruktur mit Verweisen

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               → Root Layout, Fonts, Metadata [L:1-80]
│   ├── page.tsx                 → Homepage mit allen Sections [L:1-50]
│   ├── globals.css              → CSS Variables, Utilities [L:1-290]
│   ├── sitemap.ts               → Dynamische Sitemap-Generierung
│   ├── robots.ts                → SEO Robots.txt
│   │
│   ├── produkte/
│   │   ├── page.tsx             → Produktübersicht mit Filter [L:1-292]
│   │   └── [slug]/page.tsx      → Produkt-Detail (SSG) [L:1-300]
│   │
│   ├── parksysteme/
│   │   └── [region]/page.tsx    → Regionale Landingpages (9x) [L:1-250]
│   │
│   ├── ratgeber/
│   │   ├── page.tsx             → Artikel-Übersicht
│   │   └── [slug]/page.tsx      → Artikel-Detail
│   │
│   ├── referenzen/page.tsx      → Kundenreferenzen
│   ├── kontakt/                 → Kontaktseite
│   └── ueber-uns/page.tsx       → Über uns
│
├── components/
│   ├── Header.tsx               → Navigation, Dropdown, Theme Toggle [L:1-200]
│   ├── Footer.tsx               → Multi-Column Footer [L:1-150]
│   ├── Hero.tsx                 → Hero Section mit CTA [L:1-100]
│   ├── ProductsOverview.tsx     → Produkt-Grid mit Kategorie-Filter [L:1-180]
│   ├── Benefits.tsx             → Feature-Highlights [L:1-120]
│   ├── TargetGroups.tsx         → Zielgruppen-Section [L:1-100]
│   ├── CTA.tsx                  → Call-to-Action Sections [L:1-80]
│   ├── Downloads.tsx            → PDF-Download Section [L:1-90]
│   ├── Providers.tsx            → Client Context Wrapper [L:1-20]
│   │
│   └── SEO/                     → JSON-LD Structured Data
│       ├── index.ts             → Re-exports
│       ├── ProductSchema.tsx    → Product JSON-LD
│       ├── OrganizationSchema.tsx
│       ├── LocalBusinessSchema.tsx
│       ├── BreadcrumbSchema.tsx
│       ├── ArticleSchema.tsx
│       └── FAQSchema.tsx
│
├── context/
│   └── ThemeContext.tsx         → Dark/Light Mode Context [L:1-56]
│
└── data/
    ├── products.ts              → 7 Produktserien, Varianten, PDFs [L:1-275]
    ├── regions.ts               → 9 Bundesländer mit FAQs [L:1-502]
    ├── articles.ts              → Blog-Artikel Content
    └── references.ts            → Kundenreferenzen
```

## Komponenten-Hierarchie

```
                              layout.tsx
                                  │
                    ┌─────────────┼─────────────┐
                    │             │             │
              Providers.tsx       │        (children)
                    │             │             │
            ThemeProvider    Header.tsx    Footer.tsx
                    │
                    ▼
    ┌───────────────────────────────────────────┐
    │              PAGE COMPONENTS              │
    ├───────────────────────────────────────────┤
    │                                           │
    │  Homepage (page.tsx)                      │
    │  ├── Hero                                 │
    │  ├── ProductsOverview                     │
    │  ├── Benefits                             │
    │  ├── TargetGroups                         │
    │  ├── Downloads                            │
    │  ├── CTA                                  │
    │  └── SEO/* Schemas                        │
    │                                           │
    │  Produkte ([slug]/page.tsx)               │
    │  ├── ProductSchema                        │
    │  ├── BreadcrumbSchema                     │
    │  └── Product Detail Content               │
    │                                           │
    │  Parksysteme ([region]/page.tsx)          │
    │  ├── LocalBusinessSchema                  │
    │  ├── FAQSchema                            │
    │  └── Regional Content                     │
    │                                           │
    └───────────────────────────────────────────┘
```

## Datenfluss

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              DATA LAYER                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  src/data/products.ts                                                       │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ export const products: Product[] = [...]                            │   │
│  │ export function getProductBySlug(slug): Product | undefined         │   │
│  │ export function getProductsByCategory(category): Product[]          │   │
│  │ export const categories: string[]                                   │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│         │                                                                   │
│         ▼                                                                   │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ BUILD TIME (SSG)                                                    │   │
│  │ generateStaticParams() → Alle Produkt-Slugs                         │   │
│  │ generateMetadata()     → SEO Meta pro Produkt                       │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│         │                                                                   │
│         ▼                                                                   │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ RENDERED PAGE                                                       │   │
│  │ /produkte/parker-c → Statische HTML mit Produkt-Daten              │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Theme System

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            THEME FLOW                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. User klickt Theme Toggle (Header.tsx:L~150)                            │
│         │                                                                   │
│         ▼                                                                   │
│  2. ThemeContext.toggleTheme() (ThemeContext.tsx:L27-32)                   │
│         │                                                                   │
│         ├──► localStorage.setItem("theme", newTheme)                       │
│         │                                                                   │
│         └──► document.documentElement.setAttribute("data-theme", newTheme) │
│                     │                                                       │
│                     ▼                                                       │
│  3. CSS Variables reagieren (globals.css:L27-40)                           │
│                                                                             │
│     [data-theme="light"] {                                                 │
│       --modulo-black: #FFFFFF;    /* Background invertiert */              │
│       --modulo-light: #111827;    /* Text invertiert */                    │
│       ...                                                                   │
│     }                                                                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Routing-Architektur

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           NEXT.JS APP ROUTER                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  STATISCHE ROUTEN                                                          │
│  ────────────────                                                          │
│  /                    → src/app/page.tsx (Homepage)                        │
│  /produkte            → src/app/produkte/page.tsx (Katalog)                │
│  /ratgeber            → src/app/ratgeber/page.tsx (Blog)                   │
│  /referenzen          → src/app/referenzen/page.tsx                        │
│  /kontakt             → src/app/kontakt/page.tsx                           │
│  /ueber-uns           → src/app/ueber-uns/page.tsx                         │
│                                                                             │
│  DYNAMISCHE ROUTEN (SSG mit generateStaticParams)                          │
│  ─────────────────────────────────────────────────                         │
│  /produkte/[slug]     → 7 Produktseiten                                    │
│     └── parker-c, parker-s, parker-o, stacker-p,                           │
│         stacker-v, ls-system, pallet                                       │
│                                                                             │
│  /parksysteme/[region] → 9 Bundesländer                                    │
│     └── wien, niederoesterreich, oberoesterreich,                          │
│         salzburg, tirol, steiermark, kaernten,                             │
│         burgenland, vorarlberg                                             │
│                                                                             │
│  /ratgeber/[slug]     → Blog-Artikel (dynamisch)                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Produkt-Datenmodell

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         PRODUCT INTERFACE                                   │
│                      (src/data/products.ts:L1-29)                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  interface Product {                                                        │
│    slug: string;              // URL-Pfad: "parker-c"                      │
│    name: string;              // Anzeigename: "PARKER-C"                   │
│    series: string;            // Serie: "Parker" | "Stacker" | "LS" | ...  │
│    category: string;          // Kategorie für Filter                      │
│    tagline: string;           // Kurzbeschreibung                          │
│    description: string;       // Mittellange Beschreibung                  │
│    longDescription: string;   // Ausführliche Beschreibung                 │
│    features: string[];        // Feature-Liste                             │
│    variants?: ProductVariant[]; // Untervarianten                          │
│    specs: {                                                                 │
│      vehicles: string;        // "2-6"                                     │
│      levels: string;          // "2-3 Ebenen"                              │
│      capacity: string;        // "2,0-2,6t"                                │
│    };                                                                       │
│    images: string[];          // Pfade zu /public/images/products/         │
│    pdfs: PDFLink[];           // Datenblätter                              │
│    featured: boolean;         // Hervorgehoben auf Homepage                │
│  }                                                                          │
│                                                                             │
│  PRODUKTSERIEN                                                              │
│  ─────────────                                                             │
│  Parker (C, S, O)     → Unabhängige Plattformen                            │
│  Stacker (P10, V10)   → Abhängige Plattformen                              │
│  LS (1000-1200)       → Mehrstöckige Systeme                               │
│  Pallet (T10, L10)    → Automatische Systeme                               │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## SEO-Struktur

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          SEO IMPLEMENTATION                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  METADATA (per Page)                                                        │
│  ────────────────────                                                      │
│  export async function generateMetadata({ params }) {                      │
│    return {                                                                 │
│      title: "...",                                                         │
│      description: "...",                                                   │
│      keywords: [...],                                                      │
│      openGraph: { ... },                                                   │
│      alternates: { canonical: "..." }                                      │
│    }                                                                        │
│  }                                                                          │
│                                                                             │
│  STRUCTURED DATA (JSON-LD)                                                  │
│  ─────────────────────────                                                 │
│  src/components/SEO/                                                        │
│  │                                                                          │
│  ├── OrganizationSchema    → Firmeninfos (SDIL/PROMStahl)                  │
│  ├── LocalBusinessSchema   → Kontaktdaten, Öffnungszeiten                  │
│  ├── ProductSchema         → Produktdetails, Preise, Bilder                │
│  ├── BreadcrumbSchema      → Navigation-Pfad                               │
│  ├── ArticleSchema         → Blog-Artikel Markup                           │
│  └── FAQSchema             → FAQ-Bereich pro Region                        │
│                                                                             │
│  AUTOMATISCH GENERIERT                                                      │
│  ─────────────────────                                                     │
│  /sitemap.xml   → src/app/sitemap.ts                                       │
│  /robots.txt    → src/app/robots.ts                                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## CSS-Architektur

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       STYLING ARCHITECTURE                                  │
│                     (src/app/globals.css)                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  TAILWIND CSS v4                                                            │
│  ───────────────                                                           │
│  @import "tailwindcss";                                                    │
│                                                                             │
│  CSS VARIABLES (Dark Mode Default)                                          │
│  ─────────────────────────────────                                         │
│  :root {                                                                    │
│    --modulo-black: #0A0A0A;      // Primärer Hintergrund                   │
│    --modulo-charcoal: #1A1A1A;   // Sekundärer Hintergrund                 │
│    --modulo-steel: #3D4550;      // Borders                                │
│    --modulo-silver: #B0B8C4;     // Muted Text                             │
│    --modulo-light: #FFFFFF;      // Primärer Text                          │
│    --modulo-accent: #2563eb;     // Blauer Akzent                          │
│  }                                                                          │
│                                                                             │
│  UTILITY CLASSES                                                            │
│  ───────────────                                                           │
│  .btn-primary      → Blauer CTA Button                                     │
│  .btn-outline      → Outline Button                                        │
│  .card             → Content Card mit Hover                                │
│  .tech-label       → Uppercase Monospace Labels                            │
│  .stat-number      → Große Statistiken                                     │
│  .text-gradient    → Blauer Gradient Text                                  │
│  .grid-pattern     → Subtiles Grid Background                              │
│  .tech-frame       → Ecken-Dekoration für Bilder                           │
│                                                                             │
│  TAILWIND @theme INTEGRATION                                                │
│  ───────────────────────────                                               │
│  @theme inline {                                                            │
│    --color-background: var(--background);                                  │
│    --color-accent: var(--modulo-accent);                                   │
│    --font-sans: var(--font-space-grotesk);                                 │
│    --font-mono: var(--font-jetbrains-mono);                                │
│  }                                                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Build & Deployment

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         BUILD PIPELINE                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  npm run build                                                              │
│      │                                                                      │
│      ▼                                                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ 1. TypeScript Compilation (strict mode)                             │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│      │                                                                      │
│      ▼                                                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ 2. Static Site Generation (SSG)                                     │   │
│  │    - generateStaticParams() für alle dynamischen Routen             │   │
│  │    - 7 Produktseiten + 9 Regionsseiten + N Artikel                  │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│      │                                                                      │
│      ▼                                                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ 3. Asset Optimization                                               │   │
│  │    - Next.js Image Optimization                                     │   │
│  │    - CSS Minification (Tailwind)                                    │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│      │                                                                      │
│      ▼                                                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ 4. Output: .next/ Directory                                         │   │
│  │    - Static HTML für alle Seiten                                    │   │
│  │    - Client-side JS Bundles                                         │   │
│  │    - Optimierte Assets                                              │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  DEPLOYMENT                                                                 │
│  ──────────                                                                │
│  Vercel-optimiert (Standard Next.js 16 Setup)                              │
│  - Automatisches Preview für jeden Branch                                  │
│  - Edge Functions für dynamische Features                                  │
│  - CDN für statische Assets                                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Wichtige Dateien Quick Reference

| Datei | Zweck | Zeilen |
|-------|-------|--------|
| `src/app/layout.tsx` | Root Layout, Fonts, Global Metadata | ~80 |
| `src/app/globals.css` | CSS Variables, Utilities, Theme | ~290 |
| `src/data/products.ts` | Alle Produktdaten | ~275 |
| `src/data/regions.ts` | Alle Regionsdaten (9 Bundesländer) | ~502 |
| `src/context/ThemeContext.tsx` | Dark/Light Mode Logic | ~56 |
| `src/components/Header.tsx` | Navigation + Theme Toggle | ~200 |
| `src/app/produkte/[slug]/page.tsx` | Produkt-Detailseite | ~300 |
| `src/app/parksysteme/[region]/page.tsx` | Regionale Landingpage | ~250 |

## Änderungsprotokoll

> Automatisch aktualisiert bei Code-Änderungen via Claude Code Hook.

```
[2025-02-04 12:00:00] ARCHITECTURE.md erstellt
[2026-02-04 14:14:28] ⚡ Erstellt: src/components/TestComponent.tsx (NEUE_KOMPONENTE)
```
