export interface Region {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroText: string;
  challenges: string[];
  solutions: string[];
  majorCities: string[];
  faqs: { question: string; answer: string }[];
}

export const regions: Region[] = [
  {
    slug: "wien",
    name: "Wien",
    shortName: "Wien",
    description:
      "Als Hauptstadt und größte Stadt Österreichs steht Wien vor besonderen Herausforderungen beim Parken. Hohe Grundstückspreise, denkmalgeschützte Gebäude und strenge Bauvorschriften erfordern innovative Lösungen zur Parkraumoptimierung.",
    metaTitle: "Parksysteme Wien | Parkplattformen & Parklifte für die Hauptstadt",
    metaDescription:
      "MODULO Parksysteme für Wien: Parkplattformen, Parklifte und Doppelparker für Tiefgaragen, Mehrfamilienhäuser und Gewerbe. Beratung & Montage in Wien und Umgebung.",
    keywords: [
      "Parksysteme Wien",
      "Parkplattformen Wien",
      "Parklift Wien",
      "Doppelparker Wien",
      "Tiefgarage Wien",
      "Parkraum Wien",
    ],
    heroText:
      "Verdoppeln Sie Ihre Parkkapazität in Wien – auch bei begrenztem Platz und strengen Bauvorschriften.",
    challenges: [
      "Extrem hohe Grundstückspreise machen jeden Quadratmeter wertvoll",
      "Denkmalschutz erschwert bauliche Erweiterungen",
      "Strenge Stellplatzverordnung für Neubauten",
      "Begrenzte Deckenhöhen in Altbauten",
      "Parkplatzmangel in Innenstadtbezirken",
    ],
    solutions: [
      "Verdopplung der Stellplätze ohne Flächenerweiterung",
      "PARKER-S Serie speziell für niedrige Deckenhöhen",
      "Unterirdische PARKER-O Systeme für denkmalgeschützte Bereiche",
      "Erfüllung der Stellplatzverordnung auf kleinstem Raum",
      "Mehrstöckige LS-Systeme für maximale Kapazität",
    ],
    majorCities: [
      "1. Bezirk Innere Stadt",
      "Leopoldstadt",
      "Landstraße",
      "Wieden",
      "Favoriten",
      "Döbling",
    ],
    faqs: [
      {
        question: "Welches Parksystem eignet sich für Wiener Altbauten?",
        answer:
          "Für Wiener Altbauten mit typischerweise niedrigen Deckenhöhen empfehlen wir die PARKER-S Serie. Diese Systeme sind ab einer Deckenhöhe von nur 295cm einsetzbar und nutzen geneigte Plattformen für minimale Grubentiefe.",
      },
      {
        question: "Wie erfülle ich die Wiener Stellplatzverordnung?",
        answer:
          "Mit MODULO Parksystemen können Sie die vorgeschriebene Anzahl an Stellplätzen auf der Hälfte der Fläche realisieren. Bei Neubauten reduziert das die erforderliche Tiefgaragenfläche erheblich.",
      },
      {
        question: "Gibt es Fördermöglichkeiten für Parksysteme in Wien?",
        answer:
          "Für Parksysteme, die E-Mobilität unterstützen, können unter Umständen Förderungen beantragt werden. Wir beraten Sie gerne zu aktuellen Fördermöglichkeiten.",
      },
    ],
  },
  {
    slug: "niederoesterreich",
    name: "Niederösterreich",
    shortName: "NÖ",
    description:
      "Niederösterreich als größtes Bundesland verbindet urbane Zentren wie St. Pölten mit ländlichen Regionen. Besonders im Wiener Umland steigt der Bedarf an platzsparenden Parklösungen für Einfamilienhäuser und Wohnanlagen.",
    metaTitle: "Parksysteme Niederösterreich | Parkplattformen für NÖ",
    metaDescription:
      "MODULO Parksysteme für Niederösterreich: Parklifte und Doppelparker für Einfamilienhäuser, Wohnanlagen und Gewerbe in St. Pölten, Baden, Mödling und ganz NÖ.",
    keywords: [
      "Parksysteme Niederösterreich",
      "Parkplattformen NÖ",
      "Parklift St. Pölten",
      "Doppelparker Wiener Umland",
      "Parkplattform Mödling",
    ],
    heroText:
      "Platzsparende Parklösungen für Niederösterreich – von St. Pölten bis ins Wiener Umland.",
    challenges: [
      "Wachsende Wohngebiete im Wiener Umland",
      "Steigende Fahrzeuganzahl pro Haushalt",
      "Begrenzte Grundstücksflächen bei Neubauprojekten",
      "Nachträglicher Stellplatzbedarf bei Bestandsgebäuden",
      "Platzmangel in historischen Ortskernen",
    ],
    solutions: [
      "PARKER-C für private Doppelgaragen",
      "STACKER-P10 als kompakte Lösung für kleine Grundstücke",
      "PARKER-O unterirdische Systeme für Vorgärten",
      "Mehrstöckige Systeme für Wohnanlagen",
      "Flexible Lösungen für Bestandsgebäude",
    ],
    majorCities: [
      "St. Pölten",
      "Baden",
      "Mödling",
      "Klosterneuburg",
      "Wiener Neustadt",
      "Krems",
    ],
    faqs: [
      {
        question: "Welches System für mein Einfamilienhaus in NÖ?",
        answer:
          "Für Einfamilienhäuser empfehlen wir den PARKER-C100 Basic als kosteneffiziente Lösung oder den PARKER-O100 für unterirdische Installation, die Ihren Garten unberührt lässt.",
      },
      {
        question: "Können Parksysteme nachträglich eingebaut werden?",
        answer:
          "Ja, viele unserer Systeme eignen sich für die Nachrüstung. Der STACKER-P10 benötigt nur 2,5m Breite und kann oft ohne größere Umbauten installiert werden.",
      },
    ],
  },
  {
    slug: "oberoesterreich",
    name: "Oberösterreich",
    shortName: "OÖ",
    description:
      "Oberösterreich als Industrieland mit Zentren wie Linz, Wels und Steyr hat einen hohen Bedarf an effizienten Parklösungen für Gewerbe und Industrie. Auch private Haushalte profitieren von platzsparenden Systemen.",
    metaTitle: "Parksysteme Oberösterreich | Parkplattformen Linz & OÖ",
    metaDescription:
      "MODULO Parksysteme für Oberösterreich: Industrielle und private Parklösungen in Linz, Wels, Steyr und ganz OÖ. Parklifte, Doppelparker und automatische Systeme.",
    keywords: [
      "Parksysteme Oberösterreich",
      "Parkplattformen Linz",
      "Parklift Wels",
      "Doppelparker Steyr",
      "Gewerbe Parksysteme OÖ",
    ],
    heroText:
      "Effiziente Parklösungen für Oberösterreichs Industrie und Privathaushalte.",
    challenges: [
      "Hoher Parkplatzbedarf in Industriezonen",
      "Mitarbeiterparkplätze bei wachsenden Unternehmen",
      "Begrenzte Flächen in städtischen Zentren",
      "Mehrfamilienhäuser mit zu wenig Stellplätzen",
      "Historische Stadtkerne mit Platzmangel",
    ],
    solutions: [
      "Skalierbare LS-Systeme für Gewerbebetriebe",
      "PALLET-Systeme für automatisierte Großparkplätze",
      "PARKER-C für Mehrfamilienhäuser",
      "Kompakte STACKER für beengte Verhältnisse",
      "Maßgeschneiderte Lösungen für Industriekunden",
    ],
    majorCities: ["Linz", "Wels", "Steyr", "Leonding", "Traun", "Gmunden"],
    faqs: [
      {
        question: "Welches System für Gewerbebetriebe in OÖ?",
        answer:
          "Für Gewerbebetriebe empfehlen wir je nach Bedarf die LS-Systeme mit bis zu 3 Ebenen oder das vollautomatische PALLET-System für maximale Effizienz bei geringem Personaleinsatz.",
      },
      {
        question: "Bieten Sie Service in ganz Oberösterreich?",
        answer:
          "Ja, wir bieten Beratung, Installation und Service in ganz Oberösterreich – von Linz bis ins Mühlviertel, vom Innviertel bis ins Salzkammergut.",
      },
    ],
  },
  {
    slug: "salzburg",
    name: "Salzburg",
    shortName: "Salzburg",
    description:
      "Die Festspielstadt Salzburg verbindet historisches Erbe mit modernem Wohnen. Der beschränkte Platz in der Altstadt und strenge Bauvorschriften erfordern durchdachte Parklösungen, die sich harmonisch einfügen.",
    metaTitle: "Parksysteme Salzburg | Parkplattformen für Stadt & Land",
    metaDescription:
      "MODULO Parksysteme für Salzburg: Diskrete Parkplattformen für die Festspielstadt, Parklifte für Wohnprojekte und automatische Systeme für Hotels.",
    keywords: [
      "Parksysteme Salzburg",
      "Parkplattformen Salzburg Stadt",
      "Parklift Salzburg",
      "Hotel Parksystem",
      "Tiefgarage Salzburg",
    ],
    heroText:
      "Diskrete Parklösungen für Salzburg – von der historischen Altstadt bis zu modernen Wohnprojekten.",
    challenges: [
      "UNESCO-Welterbe Altstadt mit strengen Auflagen",
      "Hoher Tourismus mit saisonalem Parkdruck",
      "Begrenzte Erweiterungsmöglichkeiten für Hotels",
      "Steile Hanglage erschwert Tiefgaragenbau",
      "Premium-Immobilien mit hohen Anforderungen",
    ],
    solutions: [
      "Unterirdische PARKER-O für denkmalgeschützte Bereiche",
      "Automatische PALLET-Systeme für Hotels",
      "Kompakte STACKER für Hanglagen",
      "Mehrstöckige LS-Systeme für neue Wohnprojekte",
      "Premium-Ausführungen für gehobene Ansprüche",
    ],
    majorCities: [
      "Salzburg Stadt",
      "Hallein",
      "Wals-Siezenheim",
      "Seekirchen",
      "Zell am See",
      "St. Johann",
    ],
    faqs: [
      {
        question: "Welche Lösungen gibt es für Hotels in Salzburg?",
        answer:
          "Für Hotels empfehlen wir das PALLET-System mit vollautomatischem Betrieb. Gäste stellen ihr Fahrzeug ab, das System übernimmt automatisch – perfekt für den Concierge-Service.",
      },
      {
        question: "Sind Parksysteme in der Salzburger Altstadt möglich?",
        answer:
          "Ja, mit dem unterirdischen PARKER-O100 können Sie auch im sensiblen Altstadtbereich Parkplätze schaffen. Die Oberfläche bleibt unberührt und fügt sich harmonisch ein.",
      },
    ],
  },
  {
    slug: "tirol",
    name: "Tirol",
    shortName: "Tirol",
    description:
      "In den Tiroler Alpen ist Baugrund besonders wertvoll. Steile Hänge, Schneelast und touristische Anforderungen stellen besondere Ansprüche an Parksysteme. MODULO bietet robuste Lösungen für alpine Verhältnisse.",
    metaTitle: "Parksysteme Tirol | Parkplattformen Innsbruck & Alpenregion",
    metaDescription:
      "MODULO Parksysteme für Tirol: Robuste Parkplattformen für alpine Verhältnisse in Innsbruck, Kitzbühel, Kufstein und den Tiroler Skigebieten.",
    keywords: [
      "Parksysteme Tirol",
      "Parkplattformen Innsbruck",
      "Parklift Kitzbühel",
      "Skigebiet Parkplatz",
      "Alpine Parksysteme",
    ],
    heroText:
      "Robuste Parklösungen für Tirols anspruchsvolle alpine Bedingungen.",
    challenges: [
      "Begrenzter Baugrund in Tallagen",
      "Steile Hanglage erschwert Garagenbau",
      "Hohe Schneelast und alpine Witterung",
      "Saisonaler Parkdruck durch Tourismus",
      "Premium-Chalets mit begrenztem Grundstück",
    ],
    solutions: [
      "Vollverzinkte Konstruktion für Schnee und Feuchtigkeit",
      "PARKER-S für Hanglagen mit Höhenbeschränkung",
      "STACKER-V10 als leichteste Variante für Dachgaragen",
      "Unterirdische Systeme für Chalets",
      "Robuste Systeme für kommerzielle Skipark-Anlagen",
    ],
    majorCities: [
      "Innsbruck",
      "Kufstein",
      "Kitzbühel",
      "Schwaz",
      "Wörgl",
      "St. Anton",
    ],
    faqs: [
      {
        question: "Sind MODULO Systeme für alpine Winter geeignet?",
        answer:
          "Ja, alle MODULO Systeme sind vollverzinkt und damit optimal gegen Korrosion durch Schnee, Streusalz und Feuchtigkeit geschützt. Die robuste Stahlkonstruktion hält alpinen Bedingungen stand.",
      },
      {
        question: "Welches System für Chalets in Tirol?",
        answer:
          "Für Chalets empfehlen wir je nach Situation den PARKER-O100 (unterirdisch) für diskrete Integration oder den STACKER-V10 für bestehende Garagen mit begrenzter Höhe.",
      },
    ],
  },
  {
    slug: "steiermark",
    name: "Steiermark",
    shortName: "Steiermark",
    description:
      "Die Steiermark verbindet die Landeshauptstadt Graz mit ländlichen Regionen und Industriestandorten. Die Vielfalt der Anforderungen – von urbanen Tiefgaragen bis zu Gewerbeparklösungen – erfordert flexible Systeme.",
    metaTitle: "Parksysteme Steiermark | Parkplattformen Graz & Umgebung",
    metaDescription:
      "MODULO Parksysteme für die Steiermark: Parkplattformen für Graz, Leoben und die steirische Industrie. Parklifte, Doppelparker und gewerbliche Lösungen.",
    keywords: [
      "Parksysteme Steiermark",
      "Parkplattformen Graz",
      "Parklift Leoben",
      "Gewerbe Parksysteme Steiermark",
      "Doppelparker Graz",
    ],
    heroText:
      "Flexible Parklösungen für die Steiermark – von Graz bis zur Obersteiermark.",
    challenges: [
      "Urbaner Verdichtungsdruck in Graz",
      "Industriestandorte mit Mitarbeiterparkplatz-Bedarf",
      "Wachsende Wohngebiete am Stadtrand",
      "Historische Grazer Altstadt",
      "Diverse Anforderungen je nach Region",
    ],
    solutions: [
      "LS-Systeme für städtische Mehrfamilienhäuser",
      "PALLET-Systeme für Industriebetriebe",
      "PARKER-C für Wohnanlagen am Stadtrand",
      "Diskrete Lösungen für die Altstadt",
      "Skalierbare Systeme für verschiedene Größen",
    ],
    majorCities: [
      "Graz",
      "Leoben",
      "Kapfenberg",
      "Bruck an der Mur",
      "Leibnitz",
      "Weiz",
    ],
    faqs: [
      {
        question: "Welche Systeme für Grazer Neubauprojekte?",
        answer:
          "Für Neubauprojekte in Graz empfehlen wir die frühe Einbindung in die Planung. Mit LS-Systemen können Sie auf minimaler Grundfläche maximale Stellplätze realisieren.",
      },
      {
        question: "Bieten Sie Service für Industriebetriebe?",
        answer:
          "Ja, wir betreuen zahlreiche Industriekunden in der Steiermark. Von der Bedarfsanalyse über die Installation bis zum 24/7-Service – alles aus einer Hand.",
      },
    ],
  },
  {
    slug: "kaernten",
    name: "Kärnten",
    shortName: "Kärnten",
    description:
      "Kärntens Seen und Berge machen das Bundesland zu einem touristischen Hotspot. Hotels, Ferienwohnungen und Wohnanlagen in den begehrten Lagen profitieren von platzsparenden Parklösungen.",
    metaTitle: "Parksysteme Kärnten | Parkplattformen Klagenfurt & Seenregion",
    metaDescription:
      "MODULO Parksysteme für Kärnten: Parkplattformen für Hotels am Wörthersee, Wohnanlagen in Klagenfurt und touristische Einrichtungen in ganz Kärnten.",
    keywords: [
      "Parksysteme Kärnten",
      "Parkplattformen Klagenfurt",
      "Parklift Wörthersee",
      "Hotel Parkplatz Kärnten",
      "Doppelparker Villach",
    ],
    heroText:
      "Parklösungen für Kärntens Seen und Städte – diskret und platzsparend.",
    challenges: [
      "Premium-Lagen am See mit begrenztem Baugrund",
      "Saisonaler Tourismus mit Parkspitzen",
      "Hotels mit zu wenig Gästeparkplätzen",
      "Wachsender Wohnungsbau in Klagenfurt",
      "Platzmangel in touristischen Ortszentren",
    ],
    solutions: [
      "Unterirdische Systeme für Seegrundstücke",
      "Automatische PALLET-Systeme für Hotels",
      "Kompakte STACKER für kleine Grundstücke",
      "Mehrstöckige Systeme für städtische Projekte",
      "Saisonale Kapazitätserweiterung",
    ],
    majorCities: [
      "Klagenfurt",
      "Villach",
      "Wolfsberg",
      "Velden",
      "Pörtschach",
      "Spittal",
    ],
    faqs: [
      {
        question: "Welche Lösungen für Hotels am Wörthersee?",
        answer:
          "Für Seehotels bieten wir unterirdische PARKER-O Systeme, die den wertvollen Seeblick nicht beeinträchtigen, sowie automatische PALLET-Systeme für komfortables Valet-Parking.",
      },
      {
        question: "Können Parksysteme saisonal erweitert werden?",
        answer:
          "Ja, mit modularen Systemen können Sie Kapazitäten flexibel anpassen. Für die Hochsaison lassen sich zusätzliche Stellplatzebenen aktivieren.",
      },
    ],
  },
  {
    slug: "burgenland",
    name: "Burgenland",
    shortName: "Burgenland",
    description:
      "Das Burgenland verbindet Weinbau, Tourismus und wachsende Wohngebiete nahe Wien. Besonders im Nordburgenland steigt durch die Nähe zur Bundeshauptstadt der Bedarf an modernen Parklösungen.",
    metaTitle: "Parksysteme Burgenland | Parkplattformen Eisenstadt & Umgebung",
    metaDescription:
      "MODULO Parksysteme für das Burgenland: Parkplattformen für Weingüter, Wohnanlagen in Eisenstadt und den wachsenden Wohnraum nahe Wien.",
    keywords: [
      "Parksysteme Burgenland",
      "Parkplattformen Eisenstadt",
      "Parklift Nordburgenland",
      "Weingut Parkplatz",
      "Doppelparker Neusiedl",
    ],
    heroText:
      "Moderne Parklösungen für das wachsende Burgenland – von Eisenstadt bis zum Neusiedler See.",
    challenges: [
      "Starkes Bevölkerungswachstum im Nordburgenland",
      "Pendlerverkehr nach Wien",
      "Tourismus am Neusiedler See",
      "Weingüter mit Gästeparkplatz-Bedarf",
      "Neue Wohnanlagen mit Stellplatzbedarf",
    ],
    solutions: [
      "PARKER-C für Einfamilienhäuser und Doppelgaragen",
      "Kompakte Systeme für Weingüter",
      "Mehrstöckige Lösungen für Wohnprojekte",
      "Flexible Systeme für saisonalen Tourismus",
      "Nachrüstlösungen für Bestandsgebäude",
    ],
    majorCities: [
      "Eisenstadt",
      "Neusiedl am See",
      "Oberwart",
      "Mattersburg",
      "Rust",
      "Pinkafeld",
    ],
    faqs: [
      {
        question: "Welches System für Weingüter im Burgenland?",
        answer:
          "Für Weingüter mit Gästeverkehr empfehlen wir den PARKER-C100 oder ein kompaktes STACKER-System. So können Sie die Stellplätze für Weinverkostungen verdoppeln ohne zusätzlichen Flächenverbrauch.",
      },
      {
        question: "Bieten Sie Service auch im Südburgenland?",
        answer:
          "Ja, wir betreuen das gesamte Burgenland von Neusiedl bis Jennersdorf. Die Anfahrt zu Beratung und Service ist im gesamten Bundesland möglich.",
      },
    ],
  },
  {
    slug: "vorarlberg",
    name: "Vorarlberg",
    shortName: "Vorarlberg",
    description:
      "Vorarlberg als westlichstes Bundesland verbindet alpine Topographie mit wirtschaftlicher Stärke. Begrenzte Talflächen, hohe Baulandpreise und Schneelast erfordern intelligente Parklösungen.",
    metaTitle: "Parksysteme Vorarlberg | Parkplattformen Bregenz & Rheintal",
    metaDescription:
      "MODULO Parksysteme für Vorarlberg: Robuste Parkplattformen für das Rheintal, Bregenz, Dornbirn und die Vorarlberger Alpenregion.",
    keywords: [
      "Parksysteme Vorarlberg",
      "Parkplattformen Bregenz",
      "Parklift Dornbirn",
      "Rheintal Parksystem",
      "Alpine Parkplattformen",
    ],
    heroText:
      "Platzsparende Parklösungen für Vorarlbergs begrenzte Talflächen.",
    challenges: [
      "Extrem begrenzte Talflächen",
      "Hohe Grundstückspreise im Rheintal",
      "Alpine Witterung mit hoher Schneelast",
      "Wirtschaftsstarke Region mit Parkdruck",
      "Grenznahe Lage mit Pendlerverkehr",
    ],
    solutions: [
      "Vollverzinkte Systeme für alpine Bedingungen",
      "Mehrstöckige LS-Systeme für maximale Ausnutzung",
      "PARKER-S für Hanglagen und enge Täler",
      "Gewerbliche Lösungen für Industriebetriebe",
      "Robuste Konstruktion für Schneelast",
    ],
    majorCities: [
      "Bregenz",
      "Dornbirn",
      "Feldkirch",
      "Bludenz",
      "Lustenau",
      "Hard",
    ],
    faqs: [
      {
        question: "Sind die Systeme für Vorarlberger Winter geeignet?",
        answer:
          "Ja, alle MODULO Systeme sind vollverzinkt und für alpine Schneelast ausgelegt. Die hydraulischen Systeme funktionieren auch bei tiefen Temperaturen zuverlässig.",
      },
      {
        question: "Welche Lösungen für Gewerbebetriebe im Rheintal?",
        answer:
          "Für die wirtschaftsstarken Betriebe im Rheintal bieten wir skalierbare LS-Systeme und automatische PALLET-Lösungen für effiziente Mitarbeiter- und Besucherparkplätze.",
      },
    ],
  },
];

export function getAllRegionSlugs(): string[] {
  return regions.map((r) => r.slug);
}

// --- i18n ---------------------------------------------------------------
import type { Locale } from "@/i18n/config";
import regionsEn from "./translations/regions.en.json";
import regionsCs from "./translations/regions.cs.json";

type RegionOverlay = Partial<
  Pick<
    Region,
    "shortName" | "heroText" | "description" | "challenges" | "solutions" | "metaTitle" | "metaDescription" | "keywords" | "faqs"
  >
>;

const regionOverlays: Record<string, Record<string, RegionOverlay>> = {
  en: regionsEn as Record<string, RegionOverlay>,
  cs: regionsCs as Record<string, RegionOverlay>,
};

export function getRegions(locale: Locale): Region[] {
  if (locale === "de") return regions;
  const overlay = regionOverlays[locale] ?? {};
  return regions.map((r) => ({ ...r, ...(overlay[r.slug] ?? {}) }));
}

export function getRegionBySlug(slug: string, locale: Locale = "de"): Region | undefined {
  return getRegions(locale).find((r) => r.slug === slug);
}
