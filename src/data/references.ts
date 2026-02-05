export interface Reference {
  id: string;
  name: string;
  location: {
    city: string;
    country: string;
  };
  products: string[];
  description: string;
  category: "residential" | "commercial" | "hotel" | "public";
  parkingSpaces: number;
  year?: number;
  featured: boolean;
  sourceUrl?: string;
}

export const references: Reference[] = [
  {
    id: "ref-001",
    name: "Wohnanlage Warszawa-Wilanów",
    location: {
      city: "Warschau",
      country: "Polen",
    },
    products: ["PARKER-C100"],
    description:
      "Großes Wohnbauprojekt im Stadtteil Wilanów mit 204 Stellplätzen. Die unabhängigen PARKER-C100 Plattformen ermöglichen jedem Bewohner flexiblen Zugang zu seinem Fahrzeug.",
    category: "residential",
    parkingSpaces: 204,
    featured: true,
    sourceUrl: "https://moduloparking.com/realizacje/warszawa-wilanow",
  },
  {
    id: "ref-002",
    name: "Bankzentrale Kraków",
    location: {
      city: "Krakau",
      country: "Polen",
    },
    products: ["PARKER-S100"],
    description:
      "Firmensitz einer Bank mit 16 Stellplätzen auf begrenztem Raum. Die PARKER-S100 Systeme wurden speziell für die niedrige Deckenhöhe der Tiefgarage ausgewählt.",
    category: "commercial",
    parkingSpaces: 16,
    featured: true,
    sourceUrl: "https://moduloparking.com/realizacje/siedziba-banku-krakow",
  },
  {
    id: "ref-003",
    name: "Hotel Focus Premium Sopot",
    location: {
      city: "Sopot",
      country: "Polen",
    },
    products: ["PARKER-O100"],
    description:
      "Luxushotel an der polnischen Ostseeküste. Die unterirdischen PARKER-O100 Systeme verschwinden komplett unter der Oberfläche und bewahren das ästhetische Erscheinungsbild des Hotels.",
    category: "hotel",
    parkingSpaces: 12,
    featured: true,
    sourceUrl: "https://moduloparking.com/realizacje/hotel-focus-sopot",
  },
  {
    id: "ref-004",
    name: "Mehrfamilienhaus Gdańsk",
    location: {
      city: "Danzig",
      country: "Polen",
    },
    products: ["PARKER-C100"],
    description:
      "Modernes Mehrfamilienhaus mit 68 Stellplätzen. Die PARKER-C100 Plattformen verdoppeln die Parkkapazität in der Tiefgarage.",
    category: "residential",
    parkingSpaces: 68,
    featured: true,
    sourceUrl: "https://moduloparking.com/realizacje/budynek-wielorodzinny-gdansk",
  },
  {
    id: "ref-005",
    name: "Wohnanlage Poznań Marcelińska",
    location: {
      city: "Posen",
      country: "Polen",
    },
    products: ["PARKER-C100 Basic", "PARKER-S120 Basic"],
    description:
      "Kombination aus 8 PARKER-C100 Basic und 5 PARKER-S120 Basic Plattformen. Die flexible Lösung bedient unterschiedliche Anforderungen der Bewohner.",
    category: "residential",
    parkingSpaces: 26,
    year: 2025,
    featured: false,
    sourceUrl: "https://moduloparking.com/realizacje/poznan-1",
  },
  {
    id: "ref-006",
    name: "Mehrfamilienhaus Bydgoszcz",
    location: {
      city: "Bydgoszcz",
      country: "Polen",
    },
    products: ["PALLET-T10"],
    description:
      "Automatisches Parksystem mit 17 PALLET-T10 Schiebeplattformen. Das System verhindert Fehlparkierungen und ermöglicht effiziente Raumnutzung.",
    category: "residential",
    parkingSpaces: 34,
    featured: false,
    sourceUrl: "https://moduloparking.com/realizacje/budynek-wielorodzinny-bydgoszcz-3",
  },
  {
    id: "ref-007",
    name: "Ferienanlage Kołobrzeg",
    location: {
      city: "Kolberg",
      country: "Polen",
    },
    products: ["PARKER-C100"],
    description:
      "Parkanlage in der beliebten Ostsee-Kurstadt. Die MODULO Systeme bieten Urlaubern und Bewohnern zuverlässige Parkmöglichkeiten.",
    category: "residential",
    parkingSpaces: 24,
    featured: false,
    sourceUrl: "https://moduloparking.com/realizacje/kolobrzeg",
  },
  {
    id: "ref-008",
    name: "Apartmentanlage Międzyzdroje",
    location: {
      city: "Misdroy",
      country: "Polen",
    },
    products: ["PARKER-C100"],
    description:
      "Ferienresort auf der Insel Wollin. Die platzsparenden Parksysteme maximieren den Stellplatz für die Gäste der Anlage.",
    category: "residential",
    parkingSpaces: 20,
    featured: false,
    sourceUrl: "https://moduloparking.com/realizacje/miedzyzdroje",
  },
];

export function getReferenceById(id: string): Reference | undefined {
  return references.find((r) => r.id === id);
}

export function getFeaturedReferences(): Reference[] {
  return references.filter((r) => r.featured);
}

export function getReferencesByCategory(
  category: Reference["category"]
): Reference[] {
  return references.filter((r) => r.category === category);
}

export const referenceCategories = [
  { value: "all", label: "Alle Projekte" },
  { value: "residential", label: "Wohnanlagen" },
  { value: "commercial", label: "Gewerbe" },
  { value: "hotel", label: "Hotels" },
  { value: "public", label: "Öffentlich" },
];
