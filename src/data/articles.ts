export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  author: string;
  readingTime: number;
  featured: boolean;
}

export const articles: Article[] = [
  {
    slug: "welches-parksystem-passt",
    title: "Welches Parksystem passt zu mir? Der große Vergleich",
    metaTitle: "Parksystem Vergleich 2024 | Welches System passt zu mir?",
    metaDescription:
      "Finden Sie das richtige Parksystem: Parklifte, Doppelparker, Stapelparker im Vergleich. Vor- und Nachteile, Kosten und Einsatzbereiche erklärt.",
    excerpt:
      "Die Auswahl des richtigen Parksystems hängt von vielen Faktoren ab: Platzverhältnisse, Budget, Anzahl der Fahrzeuge und persönliche Anforderungen. Wir helfen Ihnen bei der Entscheidung.",
    category: "Kaufberatung",
    tags: ["Vergleich", "Kaufberatung", "Parkplattform"],
    publishedAt: "2024-01-15",
    updatedAt: "2024-01-15",
    author: "Modulo Parking Austria",
    readingTime: 8,
    featured: true,
    content: `
## Die wichtigsten Kriterien bei der Auswahl

Bei der Wahl des richtigen Parksystems sollten Sie folgende Faktoren berücksichtigen:

### 1. Verfügbare Deckenhöhe

Die Deckenhöhe ist oft der limitierende Faktor. Unsere Systeme haben unterschiedliche Anforderungen:

- **PARKER-C**: Mindestens 340 cm Deckenhöhe
- **PARKER-S**: Ab 295 cm einsetzbar (für niedrige Decken optimiert)
- **STACKER-P10**: Ab 310 cm Deckenhöhe

### 2. Unabhängiger vs. abhängiger Zugang

**Unabhängige Systeme** (PARKER-Serie) ermöglichen den Zugang zu jedem Fahrzeug, ohne andere bewegen zu müssen. **Abhängige Systeme** (STACKER-Serie) erfordern, dass das obere Fahrzeug zuerst entfernt wird.

### 3. Anzahl der Stellplätze

| Bedarf | Empfehlung |
|--------|------------|
| 2 Fahrzeuge | STACKER-P10 oder PARKER-C100 Basic |
| 2-4 Fahrzeuge | PARKER-C100 oder PARKER-S100 |
| 4-6+ Fahrzeuge | LS-System |

### 4. Budget

Die Investitionskosten variieren je nach System:

- **Einstiegslösungen**: STACKER-P10 Basic, PARKER-C100 Basic
- **Mittelklasse**: PARKER-C100, PARKER-S100
- **Premium**: LS-Systeme, automatische PALLET-Systeme

## Unsere Empfehlung

Für die meisten privaten Anwendungen empfehlen wir den **PARKER-C100** als Allrounder. Er bietet unabhängigen Zugang, flexible Konfiguration und ein ausgezeichnetes Preis-Leistungs-Verhältnis.

Für gewerbliche Anwendungen mit hohem Durchsatz empfehlen wir das **LS-System** oder das automatische **PALLET-System**.
    `,
  },
  {
    slug: "parksysteme-tiefgarage",
    title: "Parksysteme für Tiefgaragen: Die optimale Lösung bei begrenzter Höhe",
    metaTitle: "Parksysteme für Tiefgaragen | Niedrige Deckenhöhe optimal nutzen",
    metaDescription:
      "Parksysteme für Tiefgaragen mit niedriger Deckenhöhe. PARKER-S ab 295cm, STACKER-V10 für beengte Verhältnisse. Verdoppeln Sie Ihre Stellplätze.",
    excerpt:
      "Tiefgaragen haben oft begrenzte Deckenhöhen. Mit den richtigen Parksystemen können Sie dennoch die Stellplatzkapazität verdoppeln – ohne größere Umbaumaßnahmen.",
    category: "Anwendungen",
    tags: ["Tiefgarage", "Niedrige Decke", "PARKER-S"],
    publishedAt: "2024-02-10",
    updatedAt: "2024-02-10",
    author: "Modulo Parking Austria",
    readingTime: 6,
    featured: true,
    content: `
## Die Herausforderung: Begrenzte Deckenhöhe

Viele Tiefgaragen wurden mit Deckenhöhen von 250-300 cm gebaut. Für konventionelle Stapelparker ist das oft zu wenig. MODULO hat speziell für diese Situation die **PARKER-S Serie** entwickelt.

## Die Lösung: PARKER-S mit geneigten Plattformen

Das Besondere an der PARKER-S Serie ist das System mit geneigten Plattformen:

- Die untere Plattform ist leicht geneigt
- Dadurch reduziert sich die erforderliche Deckenhöhe auf nur **295 cm**
- Grubentiefen ab **155 cm** sind möglich

### Verfügbare Varianten

| Modell | Deckenhöhe ab | Grubentiefe ab | Tragkraft |
|--------|--------------|----------------|-----------|
| PARKER-S100 | 295 cm | 155 cm | 2,2t / 2,6t |
| PARKER-S100 Basic | 295 cm | 155 cm | 2,0t |
| PARKER-S120 | 290 cm | 170 cm | 2,2t / 2,6t |

## Planungshinweise

Bei der Planung eines Parksystems für Ihre Tiefgarage sollten Sie beachten:

1. **Exakte Vermessung** der Deckenhöhe an mehreren Punkten
2. **Prüfung der Bodenbelastbarkeit** für die Grube
3. **Klärung der Elektroinstallation** (400V Drehstrom)
4. **Zufahrtswege** für die Montage

## Unser Service

Wir bieten Ihnen eine kostenlose Vor-Ort-Begehung, bei der wir alle relevanten Maße aufnehmen und die beste Lösung für Ihre Tiefgarage ermitteln.
    `,
  },
  {
    slug: "doppelparker-vorteile",
    title: "5 Vorteile von Doppelparkern für Ihre Garage",
    metaTitle: "5 Vorteile von Doppelparkern | Parkplatz verdoppeln",
    metaDescription:
      "Doppelparker bieten mehr als nur zusätzlichen Parkraum. Erfahren Sie die 5 wichtigsten Vorteile von Parkplattformen für Ihre private oder gewerbliche Garage.",
    excerpt:
      "Doppelparker sind die effizienteste Methode, Ihre Parkkapazität zu verdoppeln. Doch sie bieten noch weitere Vorteile, die oft unterschätzt werden.",
    category: "Vorteile",
    tags: ["Doppelparker", "Vorteile", "Garage"],
    publishedAt: "2024-03-05",
    updatedAt: "2024-03-05",
    author: "Modulo Parking Austria",
    readingTime: 5,
    featured: false,
    content: `
## 1. Verdopplung der Parkkapazität

Der offensichtlichste Vorteil: Auf der Fläche eines Stellplatzes parken zwei Fahrzeuge. Bei aktuellen Grundstückspreisen kann das eine erhebliche Wertsteigerung bedeuten.

**Rechenbeispiel:**
- 1 Tiefgaragenstellplatz = ca. 25.000-40.000 €
- Mit Doppelparker: 2 Stellplätze zum Preis von ca. 1,5

## 2. Wertsteigerung der Immobilie

Parkplätze sind in urbanen Gebieten ein knappes Gut. Eine Immobilie mit doppelter Parkkapazität ist deutlich attraktiver für Käufer und Mieter.

## 3. Schutz des oberen Fahrzeugs

Bei vielen Doppelparker-Systemen ist das obere Fahrzeug vor Vandalismus und Diebstahl geschützt. Es ist nur erreichbar, wenn die Plattform abgesenkt wird.

## 4. Keine Baugenehmigung erforderlich

In den meisten Fällen können Doppelparker ohne Baugenehmigung in bestehende Garagen eingebaut werden. Die Systeme werden in die vorhandene Struktur integriert.

## 5. Einfache Bedienung

Moderne Doppelparker wie die MODULO Systeme sind intuitiv bedienbar:
- Per Schlüssel, Chip oder Fernbedienung
- Automatische Sicherheitsüberwachung
- Not-Aus-Schalter für maximale Sicherheit

## Fazit

Doppelparker sind eine lohnende Investition für jeden, der mehr Parkraum benötigt. Die Systeme amortisieren sich oft schneller als gedacht – besonders in Städten mit hohen Immobilienpreisen.
    `,
  },
  {
    slug: "parkplatz-verdoppeln",
    title: "Parkplatz verdoppeln: So funktioniert's mit Parkplattformen",
    metaTitle: "Parkplatz verdoppeln | Schritt für Schritt zur Parkplattform",
    metaDescription:
      "Verdoppeln Sie Ihren Parkplatz mit einer Parkplattform. Planung, Auswahl, Installation – der komplette Leitfaden für mehr Stellplätze.",
    excerpt:
      "Sie möchten Ihren Parkplatz verdoppeln? Mit Parkplattformen ist das einfacher als gedacht. Wir zeigen Ihnen den Weg von der Idee bis zur fertigen Installation.",
    category: "Ratgeber",
    tags: ["Anleitung", "Installation", "Planung"],
    publishedAt: "2024-03-20",
    updatedAt: "2024-03-20",
    author: "Modulo Parking Austria",
    readingTime: 7,
    featured: true,
    content: `
## Schritt 1: Bestandsaufnahme

Bevor Sie sich für ein Parksystem entscheiden, müssen Sie Ihre Gegebenheiten kennen:

### Zu messende Werte:
- **Deckenhöhe** (an mehreren Punkten)
- **Breite und Länge** der Garage
- **Tordurchfahrtshöhe**
- **Bodenbeschaffenheit**

## Schritt 2: Systemauswahl

Basierend auf Ihren Maßen und Anforderungen wählen Sie das passende System:

| Ihre Situation | Empfehlung |
|---------------|------------|
| Standardgarage, > 340 cm Höhe | PARKER-C100 |
| Niedrige Decke, 295-340 cm | PARKER-S100 |
| Minimal Platz, nur 2,5 m Breite | STACKER-P10 |
| Unterirdisch gewünscht | PARKER-O100 |

## Schritt 3: Angebot einholen

Kontaktieren Sie uns für ein unverbindliches Angebot. Wir benötigen:
- Ihre Maße
- Fotos der Garage
- Anzahl gewünschter Stellplätze
- Ihre Kontaktdaten

## Schritt 4: Vor-Ort-Begehung

Unser Techniker kommt zu Ihnen und prüft:
- Alle relevanten Maße
- Stromanschluss (400V Drehstrom)
- Zufahrtswege für die Montage
- Eventuelle Hindernisse

## Schritt 5: Installation

Die Installation erfolgt durch geschulte Fachkräfte:
- **Dauer**: 1-3 Tage je nach System
- **Vorbereitung**: Garage muss leer und zugänglich sein
- **Stromanschluss**: Muss vorhanden sein

## Schritt 6: Einweisung & Übergabe

Nach der Installation erhalten Sie eine ausführliche Einweisung in die Bedienung und Wartung Ihres neuen Parksystems.

## Jetzt starten

Bereit für mehr Parkplätze? Kontaktieren Sie uns für eine kostenlose Erstberatung!
    `,
  },
  {
    slug: "parksystem-kosten",
    title: "Was kostet ein Parksystem? Preise und Faktoren",
    metaTitle: "Parksystem Kosten & Preise | Was kostet eine Parkplattform?",
    metaDescription:
      "Parksystem Kosten im Überblick: Preise für Parklifte, Doppelparker und automatische Systeme. Faktoren, die den Preis beeinflussen.",
    excerpt:
      "Die Kosten für Parksysteme variieren je nach Typ, Größe und Ausstattung. Wir geben einen Überblick über Preisklassen und Faktoren, die den Preis beeinflussen.",
    category: "Kosten",
    tags: ["Preise", "Kosten", "Investition"],
    publishedAt: "2024-04-10",
    updatedAt: "2024-04-10",
    author: "Modulo Parking Austria",
    readingTime: 6,
    featured: false,
    content: `
## Preisklassen im Überblick

Die Kosten für Parksysteme lassen sich in drei Kategorien einteilen:

### Einstiegsklasse (ca. 8.000-15.000 €)
- STACKER-P10 Basic
- PARKER-C100 Basic
- Einfache abhängige Systeme

### Mittelklasse (ca. 15.000-30.000 €)
- PARKER-C100 mit Premium-Deck
- PARKER-S Serie
- Unabhängige Doppelparker

### Premiumklasse (ab 30.000 €)
- LS-Systeme (mehrstöckig)
- PALLET-Systeme (automatisch)
- Individuelle Sonderlösungen

## Faktoren, die den Preis beeinflussen

### 1. Systemtyp
Abhängige Systeme sind günstiger als unabhängige. Automatische Systeme kosten mehr als manuelle.

### 2. Tragfähigkeit
Höhere Tragkraft (2,6t statt 2,0t) kostet mehr, ist aber für schwere SUVs oder E-Autos empfehlenswert.

### 3. Deck-Ausführung
- Basic-Deck: Günstig, funktional
- Conti-Deck: Rutschhemmend
- Premium-Deck: Höchste Qualität

### 4. Installationsaufwand
- Tiefgarageninstallation mit Grube: Zusatzkosten für Erdarbeiten
- Vorhandene Grube: Günstiger
- Oberirdisch ohne Grube: Am günstigsten

## Return on Investment

Bei Immobilien in urbanen Lagen amortisiert sich ein Parksystem oft innerhalb weniger Jahre:

**Beispiel Wien:**
- Stellplatzwert: ca. 30.000 €
- Parksystem: ca. 15.000 €
- Wertsteigerung: ca. 15.000 € (2. Stellplatz)

## Individuelles Angebot

Für eine genaue Preiskalkulation kontaktieren Sie uns. Nach Besichtigung Ihrer Situation erstellen wir ein detailliertes Angebot.
    `,
  },
  {
    slug: "wartung-parksysteme",
    title: "Wartung von Parksystemen: Was Sie wissen müssen",
    metaTitle: "Parksystem Wartung | Service & Instandhaltung von Parkliften",
    metaDescription:
      "Regelmäßige Wartung hält Ihr Parksystem zuverlässig. Wartungsintervalle, Kosten und Tipps für die Pflege von Parkplattformen.",
    excerpt:
      "Ein Parksystem ist eine langfristige Investition. Mit der richtigen Wartung bleibt es jahrzehntelang zuverlässig. Wir erklären, worauf es ankommt.",
    category: "Service",
    tags: ["Wartung", "Service", "Instandhaltung"],
    publishedAt: "2024-05-15",
    updatedAt: "2024-05-15",
    author: "Modulo Parking Austria",
    readingTime: 5,
    featured: false,
    content: `
## Warum regelmäßige Wartung wichtig ist

Parksysteme sind mechanische Anlagen mit beweglichen Teilen. Regelmäßige Wartung:
- Erhält die Betriebssicherheit
- Verhindert kostspielige Reparaturen
- Verlängert die Lebensdauer
- Ist oft Voraussetzung für die Garantie

## Wartungsintervalle

### Jährliche Inspektion (empfohlen)
- Prüfung aller Sicherheitseinrichtungen
- Kontrolle der Hydraulik
- Schmierung beweglicher Teile
- Funktionsprüfung der Steuerung

### Halbjährliche Sichtprüfung (selbst durchführbar)
- Sichtkontrolle auf Beschädigungen
- Prüfung der Bedienelemente
- Reinigung der Sensoren
- Kontrolle der Ketten/Seile

## Was Sie selbst tun können

### Regelmäßige Reinigung
- Plattformen von Schmutz und Laub befreien
- Sensoren sauber halten
- Ablaufrinnen reinigen

### Sichtkontrolle
- Auf ungewöhnliche Geräusche achten
- Bewegungsablauf beobachten
- Anzeigen und Warnleuchten prüfen

## Unser Wartungsservice

Als MODULO Vertriebspartner bieten wir:
- Jährliche Inspektion durch Fachpersonal
- 24/7 Notfall-Hotline
- Ersatzteilversorgung
- Reparaturservice

## Wartungskosten

Die jährlichen Wartungskosten liegen typischerweise bei:
- Einfache Systeme: ca. 200-300 €
- Komplexe Systeme: ca. 400-600 €

## Fazit

Investieren Sie in regelmäßige Wartung – sie ist deutlich günstiger als Reparaturen und sichert den zuverlässigen Betrieb Ihres Parksystems.
    `,
  },
  {
    slug: "parksysteme-mehrfamilienhaus",
    title: "Parksysteme für Mehrfamilienhäuser: Lösungen für Wohnanlagen",
    metaTitle: "Parksysteme Mehrfamilienhaus | Parkplattformen für Wohnanlagen",
    metaDescription:
      "Parksysteme für Mehrfamilienhäuser und Wohnanlagen. Erfüllen Sie Stellplatzvorschriften effizient mit MODULO Parkplattformen.",
    excerpt:
      "Bauträger und Wohnungseigentümergemeinschaften stehen vor der Herausforderung, Stellplatzvorschriften zu erfüllen. Parksysteme bieten eine effiziente Lösung.",
    category: "Anwendungen",
    tags: ["Mehrfamilienhaus", "Wohnanlage", "Bauträger"],
    publishedAt: "2024-06-20",
    updatedAt: "2024-06-20",
    author: "Modulo Parking Austria",
    readingTime: 7,
    featured: false,
    content: `
## Die Herausforderung

Mehrfamilienhäuser müssen Stellplatzvorschriften erfüllen – oft 1 Stellplatz pro Wohnung oder mehr. In urbanen Lagen ist das eine große Herausforderung:
- Grundstücksfläche ist begrenzt und teuer
- Tiefgaragenbau ist kostenintensiv
- Bestehende Tiefgaragen haben zu wenig Plätze

## Die Lösung: Mehrstöckige Parksysteme

Mit MODULO Parksystemen lässt sich die Stellplatzanzahl auf gleicher Fläche verdoppeln oder verdreifachen.

### Empfohlene Systeme für Wohnanlagen

| System | Stellplätze | Besonderheit |
|--------|-------------|--------------|
| PARKER-C | 2-6 | Unabhängiger Zugang |
| LS-System | 6+ | Bis 3 Ebenen, automatisierbar |
| PALLET | variabel | Vollautomatisch |

## Vorteile für Bauträger

### 1. Kosteneinsparung bei Tiefgaragen
- Kleinere Tiefgarage nötig
- Weniger Aushub, weniger Beton
- Schnellere Bauzeit

### 2. Mehr Wohnfläche
- Eingesparte Tiefgaragenfläche kann anders genutzt werden
- Mehr Keller oder Technikräume möglich

### 3. Verkaufsargument
- Sichere, komfortable Stellplätze
- Moderner Eindruck der Anlage

## Planung und Umsetzung

### Frühzeitige Einbindung
Idealerweise wird das Parksystem bereits in der Entwurfsphase geplant. So können:
- Deckenhöhen optimiert werden
- Gruben vorgesehen werden
- Elektroinstallation geplant werden

### Nachrüstung bei Bestandsgebäuden
Auch in bestehenden Tiefgaragen können Parksysteme nachgerüstet werden:
- Prüfung der Statik erforderlich
- Stromanschluss muss vorhanden sein
- Zustimmung der Eigentümergemeinschaft nötig

## Verwaltung für WEG

Für Wohnungseigentümergemeinschaften bieten wir:
- Beratung zur Systemauswahl
- Angebote für Nachrüstung
- Wartungsverträge
- Schulung für die Verwaltung

## Kontakt für Bauträger

Wir beraten Bauträger und Architekten bereits in frühen Planungsphasen. Kontaktieren Sie uns für ein Gespräch über Ihr Projekt.
    `,
  },
];

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export const articleCategories = [
  "Alle",
  "Kaufberatung",
  "Anwendungen",
  "Vorteile",
  "Ratgeber",
  "Kosten",
  "Service",
];

// --- i18n ---------------------------------------------------------------
import type { Locale } from "@/i18n/config";
import articlesEn from "./translations/articles.en.json";
import articlesCs from "./translations/articles.cs.json";

type ArticleOverlay = Partial<
  Pick<Article, "title" | "excerpt" | "content" | "metaTitle" | "metaDescription" | "tags">
>;

const articleOverlays: Record<string, Record<string, ArticleOverlay>> = {
  en: articlesEn as Record<string, ArticleOverlay>,
  cs: articlesCs as Record<string, ArticleOverlay>,
};

export function getArticles(locale: Locale): Article[] {
  if (locale === "de") return articles;
  const overlay = articleOverlays[locale] ?? {};
  return articles.map((a) => ({ ...a, ...(overlay[a.slug] ?? {}) }));
}

export function getArticleBySlug(slug: string, locale: Locale = "de"): Article | undefined {
  return getArticles(locale).find((a) => a.slug === slug);
}

const articleCategoryLabels: Record<Locale, Record<string, string>> = {
  de: {
    Alle: "Alle", Kaufberatung: "Kaufberatung", Anwendungen: "Anwendungen",
    Vorteile: "Vorteile", Ratgeber: "Ratgeber", Kosten: "Kosten", Service: "Service",
  },
  en: {
    Alle: "All", Kaufberatung: "Buying Advice", Anwendungen: "Applications",
    Vorteile: "Benefits", Ratgeber: "Guide", Kosten: "Costs", Service: "Service",
  },
  cs: {
    Alle: "Vše", Kaufberatung: "Poradenství", Anwendungen: "Použití",
    Vorteile: "Výhody", Ratgeber: "Rádce", Kosten: "Náklady", Service: "Servis",
  },
};

export function getArticleCategoryLabels(locale: Locale): Record<string, string> {
  return articleCategoryLabels[locale] ?? articleCategoryLabels.de;
}
