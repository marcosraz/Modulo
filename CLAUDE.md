# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Detaillierte Architektur:** Siehe [ARCHITECTURE.md](./ARCHITECTURE.md) für Diagramme, Datenfluss und Änderungsprotokoll.

## Project Overview

Modullo is a Next.js 16 marketing website for the official distribution of MODULO parking systems in Austria. It's a B2C information portal showcasing hydraulic parking platforms that double parking capacity.

## Development Commands

```bash
npm run dev          # Start development server (Turbopack)
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint
```

## Tech Stack

- **Framework:** Next.js 16.1.6 with App Router
- **React:** 19.2.3
- **Styling:** Tailwind CSS v4 with CSS variables for theming
- **Fonts:** Space Grotesk (body), JetBrains Mono (technical labels)
- **TypeScript:** Strict mode enabled
- **Path alias:** `@/*` maps to `./src/*`

## Architecture

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # CSS variables, utilities
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── robots.ts           # SEO robots.txt
│   ├── produkte/           # Product catalog
│   │   ├── page.tsx        # Product grid with category filter
│   │   └── [slug]/page.tsx # Product detail (SSG)
│   ├── parksysteme/[region]/ # Regional landing pages (9 Austrian regions)
│   ├── ratgeber/           # Blog/guide articles
│   └── referenzen/         # Customer case studies
├── components/
│   ├── Header.tsx          # Navigation with dropdown menu
│   ├── Footer.tsx          # Multi-column footer
│   ├── Providers.tsx       # Client-side context wrapper
│   └── SEO/                # JSON-LD structured data components
│       ├── ProductSchema.tsx
│       ├── OrganizationSchema.tsx
│       ├── LocalBusinessSchema.tsx
│       ├── BreadcrumbSchema.tsx
│       ├── ArticleSchema.tsx
│       └── FAQSchema.tsx
├── context/
│   └── ThemeContext.tsx    # Dark/light mode with localStorage
└── data/
    ├── products.ts         # Product definitions (7 series, variants, PDFs)
    ├── regions.ts          # 9 Austrian regions with FAQs
    ├── articles.ts         # Blog article content
    └── references.ts       # Customer project case studies
```

### Data Flow

All content is centralized in `src/data/`:
- Products: `getProductBySlug()`, `getProductsByCategory()`, `categories[]`
- Regions: `getRegionBySlug()`, `regions[]`
- Used with `generateStaticParams()` for SSG at build time

### Routing Patterns

Dynamic routes use Next.js `generateStaticParams()` for static site generation:
```typescript
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}
```

Metadata is generated dynamically per page:
```typescript
export async function generateMetadata({ params }) {
  const { slug } = await params;
  // Return SEO metadata
}
```

## Design System

### CSS Variables (in globals.css)

Dark mode (default):
- `--modulo-black: #0A0A0A` - Primary background
- `--modulo-charcoal: #1A1A1A` - Secondary background
- `--modulo-accent: #2563eb` - Blue accent for CTAs

Light mode activated via `[data-theme="light"]` attribute on `<html>`.

### Key CSS Classes

- `.btn-primary` - Blue CTA buttons
- `.btn-outline` - Outlined buttons
- `.card` - Content cards with hover effects
- `.tech-label` - Uppercase monospace labels
- `.stat-number` - Large statistics display
- `.text-gradient` - Blue gradient text
- `.grid-pattern` - Subtle grid background
- `.tech-frame` - Corner decoration for images

### Theme Switching

ThemeContext (`src/context/ThemeContext.tsx`) manages dark/light mode:
- Persists to localStorage
- Sets `data-theme` attribute on document root
- SSR-safe with hydration handling

## Product Data Model

```typescript
interface Product {
  slug: string;
  name: string;
  series: string;           // Parker, Stacker, LS, Pallet
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  variants?: ProductVariant[];
  specs: { vehicles: string; levels: string; capacity: string };
  images: string[];         // Paths to /public/images/products/
  pdfs: { name: string; file: string; size: string }[];
  featured: boolean;
}
```

Product series:
- **Parker** (C, S, O) - Independent platforms
- **Stacker** (P10, V10) - Dependent platforms
- **LS** (1000, 1100, 1110, 1200) - Multi-level systems
- **Pallet** (T10, L10) - Automated systems

## Assets

- Product images: `/public/images/products/` (WebP optimized)
- PDF datasheets: `/public/docs/` (German language)
- Logo: `/public/images/logos/MODULO.svg`

## SEO Implementation

- All pages have dynamic metadata (title, description, Open Graph)
- Structured data via JSON-LD in `components/SEO/`
- Dynamic sitemap at `/sitemap.xml`
- Language: German (de_AT locale)

## Git Commit

```bash
git add <files>
git commit -m "Commit message

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

## Claude Code Hooks

Zwei Hooks aktualisieren automatisch `ARCHITECTURE.md`:

### 1. Logging-Hook (Bash - kostenlos)
- **Trigger:** Nach jedem `Edit` oder `Write` in `src/`
- **Aktion:** Fügt Eintrag ins Änderungsprotokoll ein
- **Script:** `.claude/hooks/update-architecture.sh`

### 2. Architektur-Update-Hook (Haiku - günstig)
- **Trigger:** Nur bei `Write` (neue Dateien)
- **Model:** `haiku` (~$0.001 pro Aufruf)
- **Aktion:** Aktualisiert Diagramme bei signifikanten Änderungen:
  - Neue Komponente → Komponenten-Hierarchie
  - Neue Route → Routing-Architektur
  - Neue Daten → Data Layer

Signifikante Änderungen werden im Log mit ⚡ markiert.
