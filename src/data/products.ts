export interface ProductVariant {
  name: string;
  capacity?: string;
  loadCapacity?: string;
  pitDepth?: string;
  ceilingHeight?: string;
  deckType?: string;
  description?: string;
}

export interface Product {
  slug: string;
  name: string;
  series: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  variants?: ProductVariant[];
  specs: {
    vehicles: string;
    levels: string;
    capacity: string;
  };
  images: string[];
  pdfs: { name: string; file: string; size: string }[];
  featured: boolean;
}

export const products: Product[] = [
  // PARKER-C Serie
  {
    slug: "parker-c",
    name: "PARKER-C",
    series: "Parker",
    category: "Unabhängige Plattformen",
    tagline: "Kompakte Lösung für bis zu 4 Fahrzeuge",
    description: "Ermöglicht das gleichzeitige Parken von bis zu vier Fahrzeugen mit unabhängigem Zugang für jedes Fahrzeug.",
    longDescription: `Die Parkplattform MODULO PARKER-C ermöglicht das gleichzeitige Parken von bis zu vier Fahrzeugen, wobei die Ein- und Ausfahrt jedes Fahrzeugs unabhängig von den anderen erfolgt.

Die Lösung verdoppelt die verfügbaren Parkplätze ohne bauliche Erweiterungen und eignet sich sowohl für private Garagen als auch größere Investitionen.

Jede Einheit verfügt über ein separates Bedienfeld, das durch einen speziellen Schlüssel oder Chips/Tokens vor unbefugter Nutzung geschützt ist. Zusätzlich ist jedes Bedienfeld mit einem Not-Aus-Schalter ausgestattet.`,
    features: [
      "Unabhängiger Zugang zu jedem Stellplatz",
      "Stabile Tragstruktur mit hydraulischem System",
      "Separate Bedienfelder pro Einheit",
      "Schutz durch Schlüssel, Chips oder Tokens",
      "Not-Aus-Schalter an jedem Bedienfeld",
      "Verdopplung der Parkkapazität ohne Anbau",
    ],
    variants: [
      { name: "PARKER-C100", capacity: "2-4 Fahrzeuge", loadCapacity: "2,2t oder 2,6t", description: "Universalste Variante" },
      { name: "PARKER-C100 Basic", capacity: "2-4 Fahrzeuge", loadCapacity: "2,0t", description: "Kostengünstige Einstiegslösung" },
      { name: "PARKER-C105", capacity: "2-4 Fahrzeuge", loadCapacity: "2,2t", description: "Premium-Deck mit rutschhemmender Oberfläche" },
      { name: "PARKER-C120 Basic", capacity: "4-6 Fahrzeuge", loadCapacity: "2,0t", description: "3-Ebenen-System" },
    ],
    specs: { vehicles: "2-6", levels: "2-3", capacity: "2,0-2,6t" },
    images: ["/images/products/parker-c-header.webp", "/images/products/parker-c-1.webp", "/images/products/parker-c-2.webp", "/images/products/parker-c-3.webp"],
    pdfs: [
      { name: "Parker C100 Datenblatt (DE)", file: "/docs/parker-c100-de.pdf", size: "2.0 MB" },
      { name: "Parker C100 Basic (CZ)", file: "/docs/modulo-parker-c100-basic-cz.pdf", size: "2.7 MB" },
      { name: "Parker C120 Basic (CZ)", file: "/docs/parker-c120-basic-cz.pdf", size: "1.7 MB" },
    ],
    featured: true,
  },

  // PARKER-S Serie
  {
    slug: "parker-s",
    name: "PARKER-S",
    series: "Parker",
    category: "Für niedrige Decken",
    tagline: "Platzsparend bei niedrigen Deckenhöhen",
    description: "System mit geneigten Plattformen für Garagen mit begrenzter Deckenhöhe oder eingeschränkter Grubentiefe.",
    longDescription: `Das System PARKER-S richtet sich speziell an Projekte mit begrenzter Deckenhöhe oder eingeschränkter Grubentiefe. Die untere Plattform verfügt über eine leichte Neigung, wodurch sich der Parkraum in Garagen verdoppeln lässt.

MODULO PARKER-S ist dediziert für Tiefgaragen und Garagen. Es ist jedoch hauptsächlich für Investitionen konzipiert, bei denen es Einschränkungen in Bezug auf die Deckenhöhe oder die Grubentiefe gibt.`,
    features: [
      "Optimiert für niedrige Deckenhöhen",
      "Geneigte Plattformen für minimale Grubentiefe",
      "Verdopplung der Stellplätze",
      "Hydraulisches System mit höchster Sicherheit",
      "Flexible Einsatzmöglichkeiten",
      "Manuelle oder automatische Bedienung",
    ],
    variants: [
      { name: "PARKER-S100", capacity: "2-4 Fahrzeuge", loadCapacity: "2,2t / 2,6t", pitDepth: "ab 155 cm", ceilingHeight: "ab 295 cm", deckType: "Conti-Deck" },
      { name: "PARKER-S100 Basic", capacity: "2-4 Fahrzeuge", loadCapacity: "2,0t", pitDepth: "ab 155 cm", ceilingHeight: "ab 295 cm", deckType: "Basic-Deck" },
      { name: "PARKER-S105", capacity: "2-4 Fahrzeuge", loadCapacity: "2,2t", deckType: "Premium-Deck (rutschhemmend)" },
      { name: "PARKER-S120", capacity: "2-4 Fahrzeuge", loadCapacity: "2,2t / 2,6t", pitDepth: "170-235 cm", ceilingHeight: "290-435 cm" },
      { name: "PARKER-S120 Basic", capacity: "2-4 Fahrzeuge", loadCapacity: "2,0t", pitDepth: "170-235 cm", ceilingHeight: "290-435 cm", deckType: "Basic-Deck" },
    ],
    specs: { vehicles: "2-4", levels: "2", capacity: "2,0-2,6t" },
    images: ["/images/products/parker-s-header.webp", "/images/products/parker-s100.webp", "/images/products/parker-s100-basic.webp", "/images/products/parker-s105.webp"],
    pdfs: [
      { name: "Parker S100 Datenblatt (DE)", file: "/docs/parker-s100-de.pdf", size: "1.1 MB" },
      { name: "Parker S100 Basic (DE)", file: "/docs/parker-s100-basic-de.pdf", size: "1.2 MB" },
      { name: "Parker S120 Datenblatt (DE)", file: "/docs/parker-s120-de.pdf", size: "2.0 MB" },
      { name: "Parker S120 Basic (CZ)", file: "/docs/modulo-parker-s120-basic-cz.pdf", size: "3.3 MB" },
      { name: "Parker S120 Basic Anleitung (CZ)", file: "/docs/modulo-parker-s120-basic-instrukce-cz.pdf", size: "1.1 MB" },
    ],
    featured: false,
  },

  // PARKER-O
  {
    slug: "parker-o",
    name: "PARKER-O",
    series: "Parker",
    category: "Eigenständige Plattform",
    tagline: "Unterflur-System für Privatnutzer",
    description: "Eigenständige Plattform für private Parkplätze. Die Konstruktion verschwindet vollständig unter der Erde.",
    longDescription: `Das MODULO PARKER-O100 ist eine unabhängige Parkplattform, die speziell für private Nutzer konzipiert wurde. Die Konstruktion verläuft vollständig unterirdisch, wodurch die Oberfläche nahtlos gestaltet werden kann.

Die Plattform kann als Teil einer Zufahrtsstraße oder Hofeinfahrt integriert werden. Perfekt für Haushalte mit zwei Fahrzeugen, die ihre Fläche optimal nutzen möchten.`,
    features: [
      "Vollständig unterirdische Konstruktion",
      "Nahtlose Oberflächengestaltung",
      "Diskrete Parkraumerweiterung",
      "Für 2 Fahrzeuge konzipiert",
      "Integration in bestehende Umgebung",
      "Ideal für private Stellplätze",
    ],
    specs: { vehicles: "2", levels: "2", capacity: "2,0t" },
    images: ["/images/products/parker-o-header.webp", "/images/products/parker-o-1.webp", "/images/products/parker-o-2.webp", "/images/products/parker-o-3.webp"],
    pdfs: [
      { name: "Parker O100 Datenblatt (DE)", file: "/docs/parker-o100-de.pdf", size: "932 KB" },
      { name: "Parker O100 Datenblatt (CZ)", file: "/docs/modulo-parker-o100-cz.pdf", size: "2.1 MB" },
    ],
    featured: false,
  },

  // STACKER-P
  {
    slug: "stacker-p",
    name: "STACKER-P10",
    series: "Stacker",
    category: "Abhängige Plattformen",
    tagline: "Kompakt & günstig",
    description: "Platzsparendes Parksystem für kleine Unternehmen, Hotels und Mehrfamilienhäuser. Nur 2,5m Breite erforderlich.",
    longDescription: `Der MODULO STACKER-P10 ist für Einrichtungen mit geringem Stellplatzbedarf konzipiert, wie z.B. kleine Gewerbebetriebe, kleine Mehrfamilienhäuser und Hotels.

Das System besticht durch benutzerfreundliche Bedienung und unkomplizierte Installation. Mit einer Breite von nur 2,5 Metern passt es auf einen Standardparkplatz. Die Plattform umschließt den unteren Stellplatz vollständig und schützt das geparkte Fahrzeug.`,
    features: [
      "Nur 2,5m Breite erforderlich",
      "Vollständiger Schutz des unteren Fahrzeugs",
      "Einfache und unkomplizierte Installation",
      "Benutzerfreundliche Bedienung",
      "Variable Höheneinstellung",
      "Kostengünstige Lösung",
    ],
    variants: [
      { name: "STACKER-P10", description: "Standard-Version" },
      { name: "STACKER-P10 Basic", description: "Kostengünstige Basisversion" },
    ],
    specs: { vehicles: "2", levels: "2", capacity: "2,0t" },
    images: ["/images/products/stacker-p-header.webp", "/images/products/stacker-p10.webp", "/images/products/stacker-p10-slide.webp"],
    pdfs: [
      { name: "Stacker P10 Datenblatt (DE)", file: "/docs/stacker-p10-de.pdf", size: "1.1 MB" },
      { name: "Stacker P10 Basic (DE)", file: "/docs/stacker-p10-basic-de.pdf", size: "8.6 MB" },
      { name: "Stacker P10 Datenblatt (CZ)", file: "/docs/modulo-stacker-p10-cz.pdf", size: "1.8 MB" },
    ],
    featured: true,
  },

  // STACKER-V
  {
    slug: "stacker-v",
    name: "STACKER-V10",
    series: "Stacker",
    category: "Abhängige Plattformen",
    tagline: "Leichteste Variante",
    description: "Innovatives Parksystem für Garagen mit begrenzter Deckenhöhe. Die leichteste aller MODULO-Parkplattformen.",
    longDescription: `Das MODULO STACKER-V10 ist ein innovatives Parksystem für Garagen mit begrenzter Deckenhöhe. Die obere Plattform ist abgewinkelt und senkt sich ab, um den Raum optimal zu nutzen.

Es ist die leichteste aller MODULO-Parkplattformen und vereint Flexibilität, Sicherheit und maximale Raumnutzung. Ideal für Mehrfamilienhäuser und öffentliche Einrichtungen.`,
    features: [
      "Leichteste MODULO-Parkplattform",
      "Optimiert für niedrige Deckenhöhen",
      "Abgewinkelte obere Plattform",
      "Nur 2,5m Breite erforderlich",
      "Hohe Flexibilität und Sicherheit",
      "Einfache Installation",
    ],
    specs: { vehicles: "2", levels: "2", capacity: "2,0t" },
    images: ["/images/products/stacker-v-header.webp", "/images/products/stacker-v-1.webp", "/images/products/stacker-v-2.webp", "/images/products/stacker-v-3.webp"],
    pdfs: [
      { name: "Stacker V10 Datenblatt (DE)", file: "/docs/stacker-v10-de.pdf", size: "1.2 MB" },
      { name: "Stacker V10 Datenblatt (CZ)", file: "/docs/modulo-stacker-v10-cz.pdf", size: "2.2 MB" },
    ],
    featured: false,
  },

  // LS-System
  {
    slug: "ls-system",
    name: "LS-System",
    series: "LS",
    category: "Mehrstöckige Systeme",
    tagline: "Bis zu 3 Ebenen & Automatisierung",
    description: "Mehrstöckiges System mit bis zu drei Ebenen. Optional mit Schiebetoren und vollständiger Automatisierung.",
    longDescription: `Der MODULO LS ist ein System unabhängiger Parkplattformen mit bis zu drei Ebenen: unterirdisch (-1), ebenerdig (0) und oberirdisch (+1).

Das System ermöglicht optionale Schiebetorsysteme und vollständige Automatisierung, wodurch das Aussteigen beim Anfordern entfällt. Plattformen auf Ebene 0 bewegen sich horizontal, während Plattformen auf Ebenen -1 und +1 sich vertikal bewegen.`,
    features: [
      "Bis zu 3 Ebenen (-1, 0, +1)",
      "Unabhängige Parkplätze auf jeder Ebene",
      "Optionale Schiebetorsysteme",
      "Vollständige Automatisierung möglich",
      "Fernbedienungssteuerung",
      "Flexible Konfigurationen",
    ],
    variants: [
      { name: "LS1000", description: "2 Ebenen (0, +1)" },
      { name: "LS1100", description: "2 Ebenen (-1, 0)" },
      { name: "LS1110", description: "3 Ebenen (-1, 0, +1)" },
      { name: "LS1200", description: "Erweiterte Version" },
    ],
    specs: { vehicles: "6+", levels: "2-3", capacity: "2,0t" },
    images: ["/images/products/ls-header.webp"],
    pdfs: [
      { name: "LS1000 Datenblatt (DE)", file: "/docs/ls1000-de.pdf", size: "2.5 MB" },
      { name: "LS1100 Datenblatt (DE)", file: "/docs/ls1100-de.pdf", size: "2.9 MB" },
      { name: "LS1110 Datenblatt (DE)", file: "/docs/ls1110-de.pdf", size: "2.9 MB" },
      { name: "LS1200 Datenblatt (DE)", file: "/docs/ls1200-de.pdf", size: "1.3 MB" },
      { name: "LS1000 Datenblatt (CZ)", file: "/docs/modulo-LS1000-cz.pdf", size: "1.3 MB" },
      { name: "LS1100 Datenblatt (CZ)", file: "/docs/modulo-ls1100-cz.pdf", size: "1.4 MB" },
      { name: "LS1200 Datenblatt (CZ)", file: "/docs/modulo-ls1200-cz.pdf", size: "2.2 MB" },
    ],
    featured: true,
  },

  // LSM-System
  {
    slug: "lsm-system",
    name: "LSM-System",
    series: "LSM",
    category: "Mehrstöckige Systeme",
    tagline: "Bis Ebene +4 erweiterbar",
    description: "Bodenverankertes, halbautomatisches System für dichte städtische Bebauung. Vertikal bis Ebene +4 und horizontal erweiterbar.",
    longDescription: `Das MODULO LSM ist ein bodenverankertes, halbautomatisches Parksystem, das Stellplätze unabhängig vervielfacht. Es kombiniert Tragkonstruktion, Hydrauliksystem mit Aggregat und Elektrokomponenten zu einer flexibel skalierbaren Lösung.

Das System ist die ideale Antwort für dichte städtische Bebauung, in der die Errichtung eines konventionellen oder unterirdischen Stahlbeton-Parkhauses nicht möglich ist. Es lässt sich sowohl vertikal – von Ebene 0 bis Ebene +4 – als auch horizontal erweitern und parkt bis zu sechs Fahrzeuge auf einem einzigen konventionellen Stellplatz.

Dank seines besonders leisen Betriebs eignet sich das LSM auch für den Einsatz innerhalb von Wohngebäuden. Jede Einheit verfügt über ein eigenes, per Schlüssel gegen unbefugte Nutzung gesichertes Bedienfeld. Anzahl und Anordnung der Stellplätze werden individuell an das Projekt angepasst.`,
    features: [
      "Erweiterbar von Ebene 0 bis Ebene +4",
      "Vertikal und horizontal skalierbar",
      "Bis zu 6 Fahrzeuge auf einem Stellplatz",
      "Besonders leiser Betrieb – auch in Wohngebäuden",
      "Ideal für dichte städtische Bebauung",
      "Individuelles, schlüsselgesichertes Bedienfeld",
    ],
    specs: { vehicles: "bis 6", levels: "bis +4", capacity: "2,0t" },
    images: ["/images/products/lsm-header.webp"],
    pdfs: [],
    featured: false,
  },

  // PALLET-System
  {
    slug: "pallet",
    name: "PALLET-System",
    series: "Pallet",
    category: "Automatische Systeme",
    tagline: "Automatische Schiebe-Paletten",
    description: "Automatisiertes Parksystem mit verschiebbaren Paletten. Verhindert Fehlparkierungen und Kollisionen zuverlässig.",
    longDescription: `Das MODULO PALLET ist ein automatisiertes Parksystem basierend auf automatischen Schiebepaletten. Anders als andere MODULO-Plattformen ermöglicht es kein gestapeltes, sondern vollautomatisches Parken in einem definierten Bereich.

Das System verhindert falsch abgestellte Fahrzeuge und Kollisionen zuverlässig. Es reduziert die Manövrierfläche erheblich durch vordefinierte Palettenrouten und ist ideal für Standorte mit Höhenbeschränkungen.`,
    features: [
      "Automatische Schiebe-Paletten",
      "Verhindert Fehlparkierungen",
      "Reduziert Manövrierfläche",
      "Flexible Konfigurationen",
      "Ideal bei Höhenbeschränkungen",
      "Vollautomatischer Betrieb",
    ],
    variants: [
      { name: "PALLET-T10", description: "Standard-Version" },
      { name: "PALLET-L10", description: "Erweiterte Version" },
    ],
    specs: { vehicles: "variabel", levels: "1", capacity: "2,0t" },
    images: ["/images/products/pallet-header.webp", "/images/products/pallet-system.webp", "/images/products/pallet-slide.webp"],
    pdfs: [
      { name: "Pallet T10 Datenblatt (DE)", file: "/docs/pallet-t10-de.pdf", size: "827 KB" },
      { name: "Pallet L10 Datenblatt (DE)", file: "/docs/pallet-l10-de.pdf", size: "822 KB" },
      { name: "Pallet T10 Datenblatt (CZ)", file: "/docs/pallet-t10-cz.pdf", size: "1.3 MB" },
    ],
    featured: false,
  },
];

export const categories = [
  "Alle",
  "Unabhängige Plattformen",
  "Für niedrige Decken",
  "Eigenständige Plattform",
  "Abhängige Plattformen",
  "Mehrstöckige Systeme",
  "Automatische Systeme",
];

// --- i18n ---------------------------------------------------------------
// German is the source. EN/CS text comes from JSON overlays keyed by slug.
// `category` stays a stable German key (used for filter logic); only its
// *display* label is localised via getCategoryLabels().
import type { Locale } from "@/i18n/config";
import productsEn from "./translations/products.en.json";
import productsCs from "./translations/products.cs.json";

type ProductOverlay = Partial<
  Pick<Product, "tagline" | "description" | "longDescription" | "features">
> & {
  specs?: Partial<Product["specs"]>;
  variants?: Partial<ProductVariant>[];
};

const productOverlays: Record<string, Record<string, ProductOverlay>> = {
  en: productsEn as Record<string, ProductOverlay>,
  cs: productsCs as Record<string, ProductOverlay>,
};

export function getProducts(locale: Locale): Product[] {
  if (locale === "de") return products;
  const overlay = productOverlays[locale] ?? {};
  return products.map((p) => {
    const t = overlay[p.slug];
    if (!t) return p;
    return {
      ...p,
      tagline: t.tagline ?? p.tagline,
      description: t.description ?? p.description,
      longDescription: t.longDescription ?? p.longDescription,
      features: t.features ?? p.features,
      specs: { ...p.specs, ...(t.specs ?? {}) },
      variants: p.variants?.map((v, i) => ({ ...v, ...(t.variants?.[i] ?? {}) })),
    };
  });
}

export function getProductBySlug(slug: string, locale: Locale): Product | undefined {
  return getProducts(locale).find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string, locale: Locale = "de"): Product[] {
  return getProducts(locale).filter((p) => p.category === category);
}

const categoryLabels: Record<Locale, Record<string, string>> = {
  de: {
    Alle: "Alle",
    "Unabhängige Plattformen": "Unabhängige Plattformen",
    "Für niedrige Decken": "Für niedrige Decken",
    "Eigenständige Plattform": "Eigenständige Plattform",
    "Abhängige Plattformen": "Abhängige Plattformen",
    "Mehrstöckige Systeme": "Mehrstöckige Systeme",
    "Automatische Systeme": "Automatische Systeme",
  },
  en: {
    Alle: "All",
    "Unabhängige Plattformen": "Independent Platforms",
    "Für niedrige Decken": "For Low Ceilings",
    "Eigenständige Plattform": "Standalone Platform",
    "Abhängige Plattformen": "Dependent Platforms",
    "Mehrstöckige Systeme": "Multi-Level Systems",
    "Automatische Systeme": "Automatic Systems",
  },
  cs: {
    Alle: "Vše",
    "Unabhängige Plattformen": "Nezávislé platformy",
    "Für niedrige Decken": "Pro nízké stropy",
    "Eigenständige Plattform": "Samostatná platforma",
    "Abhängige Plattformen": "Závislé platformy",
    "Mehrstöckige Systeme": "Vícepodlažní systémy",
    "Automatische Systeme": "Automatické systémy",
  },
};

export function getCategoryLabels(locale: Locale): Record<string, string> {
  return categoryLabels[locale] ?? categoryLabels.de;
}
