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
  year: number;
  featured: boolean;
}

export const references: Reference[] = [
  {
    id: "ref-001",
    name: "Wohnanlage Mariahilfer Straße",
    location: {
      city: "Wien",
      country: "Österreich",
    },
    products: ["PARKER-C100", "PARKER-S100"],
    description:
      "Moderne Wohnanlage mit 48 Wohneinheiten. Die Tiefgarage wurde mit 24 PARKER-Systemen ausgestattet, wodurch die Stellplatzanzahl von 24 auf 48 verdoppelt werden konnte.",
    category: "residential",
    parkingSpaces: 48,
    year: 2023,
    featured: true,
  },
  {
    id: "ref-002",
    name: "Hotel Alpenblick",
    location: {
      city: "Innsbruck",
      country: "Österreich",
    },
    products: ["PALLET-T10"],
    description:
      "4-Sterne Hotel mit automatischem Parkiersystem. Das PALLET-System ermöglicht den Gästen komfortables Valet-Parking – Fahrzeug abstellen, den Rest übernimmt das System.",
    category: "hotel",
    parkingSpaces: 32,
    year: 2022,
    featured: true,
  },
  {
    id: "ref-003",
    name: "Bürokomplex TechPark",
    location: {
      city: "Linz",
      country: "Österreich",
    },
    products: ["LS1110"],
    description:
      "Moderner Bürokomplex mit mehrstöckigem Parksystem. Das dreistöckige LS-System schafft 120 Stellplätze auf der Fläche von 40.",
    category: "commercial",
    parkingSpaces: 120,
    year: 2023,
    featured: true,
  },
  {
    id: "ref-004",
    name: "Mehrfamilienhaus Graz-Geidorf",
    location: {
      city: "Graz",
      country: "Österreich",
    },
    products: ["PARKER-C100 Basic"],
    description:
      "Wohnhaus mit 12 Parteien. Durch den Einsatz von 6 PARKER-Systemen konnte jede Partei zwei Stellplätze erhalten.",
    category: "residential",
    parkingSpaces: 24,
    year: 2024,
    featured: false,
  },
  {
    id: "ref-005",
    name: "Seehotel Pörtschach",
    location: {
      city: "Pörtschach",
      country: "Österreich",
    },
    products: ["PARKER-O100"],
    description:
      "Luxushotel am Wörthersee mit unterirdischem Parksystem. Die PARKER-O Systeme verschwinden komplett unter der Oberfläche und bewahren den wertvollen Seeblick.",
    category: "hotel",
    parkingSpaces: 16,
    year: 2023,
    featured: false,
  },
  {
    id: "ref-006",
    name: "Gewerbepark Salzburg Nord",
    location: {
      city: "Salzburg",
      country: "Österreich",
    },
    products: ["STACKER-P10", "PARKER-C100"],
    description:
      "Gewerbeparkgelände mit verschiedenen Nutzern. Die flexible Kombination aus STACKER- und PARKER-Systemen bedient unterschiedliche Nutzerbedürfnisse.",
    category: "commercial",
    parkingSpaces: 64,
    year: 2022,
    featured: false,
  },
  {
    id: "ref-007",
    name: "Stadtparkgarage Bregenz",
    location: {
      city: "Bregenz",
      country: "Österreich",
    },
    products: ["LS1000", "LS1100"],
    description:
      "Öffentliche Parkgarage im Stadtzentrum. Die LS-Systeme ermöglichen effiziente Parkraumnutzung auf engem Raum.",
    category: "public",
    parkingSpaces: 180,
    year: 2021,
    featured: false,
  },
  {
    id: "ref-008",
    name: "Villa Döbling",
    location: {
      city: "Wien",
      country: "Österreich",
    },
    products: ["PARKER-O100"],
    description:
      "Private Villa mit unterirdischem Doppelparker. Das System ist unsichtbar in die Zufahrt integriert und bietet Platz für 4 Fahrzeuge.",
    category: "residential",
    parkingSpaces: 4,
    year: 2024,
    featured: false,
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
