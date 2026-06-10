export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://moduloparking.at/#organization",
    name: "Modulo Parking Austria",
    image: "https://moduloparking.at/images/logos/MODULO.svg",
    description:
      "Offizieller Vertrieb von MODULO Parkplattformen in Österreich. Parksysteme, Parklifte, Doppelparker und automatische Parkplattformen für Garagen und Tiefgaragen.",
    url: "https://moduloparking.at",
    telephone: "+43-676-726-34-87",
    email: "info@moduloparking.at",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AT",
      addressRegion: "Österreich",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.5162,
      longitude: 14.5501,
    },
    areaServed: [
      { "@type": "Country", name: "Austria" },
      { "@type": "State", name: "Wien" },
      { "@type": "State", name: "Niederösterreich" },
      { "@type": "State", name: "Oberösterreich" },
      { "@type": "State", name: "Steiermark" },
      { "@type": "State", name: "Salzburg" },
      { "@type": "State", name: "Tirol" },
      { "@type": "State", name: "Kärnten" },
      { "@type": "State", name: "Vorarlberg" },
      { "@type": "State", name: "Burgenland" },
    ],
    priceRange: "$$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
