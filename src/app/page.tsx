import { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsOverview from "@/components/ProductsOverview";
import Benefits from "@/components/Benefits";
import TargetGroups from "@/components/TargetGroups";
import Downloads from "@/components/Downloads";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { FAQSchema } from "@/components/SEO";

export const metadata: Metadata = {
  title: "Automatische Parksysteme & Parklifte für Österreich",
  description:
    "MODULO Parkplattformen verdoppeln Ihre Parkkapazität. Parklifte, Doppelparker und Stapelparker für Tiefgaragen, Mehrfamilienhäuser und Gewerbe. Beratung & Montage in ganz Österreich.",
  alternates: {
    canonical: "https://modullo-parking.at",
  },
  openGraph: {
    title: "Modullo Parking Austria | Automatische Parksysteme",
    description:
      "Verdoppeln Sie Ihre Parkkapazität mit MODULO Parkplattformen. Parklifte und Doppelparker für Österreich.",
    url: "https://modullo-parking.at",
  },
};

const homepageFAQs = [
  {
    question: "Was sind Parkplattformen?",
    answer:
      "Parkplattformen sind mechanische Systeme, die es ermöglichen, mehrere Fahrzeuge übereinander zu parken. Dadurch kann die Parkkapazität auf gleichem Raum verdoppelt oder sogar verdreifacht werden. MODULO bietet verschiedene Systeme wie Parklifte, Doppelparker und Stapelparker an.",
  },
  {
    question: "Für wen eignen sich MODULO Parksysteme?",
    answer:
      "MODULO Parksysteme eignen sich für Privatpersonen mit Doppelgaragen, Mehrfamilienhäuser, Hotels, Gewerbebetriebe und öffentliche Parkeinrichtungen. Die Systeme sind skalierbar von 2 bis über 100 Stellplätzen.",
  },
  {
    question: "Wie viel Platz benötigt ein Parksystem?",
    answer:
      "Die MODULO Systeme sind für unterschiedliche Platzverhältnisse konzipiert. Der STACKER-P10 benötigt nur 2,5m Breite. Die PARKER-S Serie ist speziell für niedrige Deckenhöhen ab 295cm optimiert.",
  },
  {
    question: "Sind die Parksysteme sicher?",
    answer:
      "Ja, alle MODULO Systeme sind nach europäischen Sicherheitsnormen zertifiziert und verfügen über Not-Aus-Schalter, Überlastungssicherung und Sensoren. Die Bedienung erfolgt über gesicherte Bedienfelder mit Schlüssel oder Chip.",
  },
];

export default function Home() {
  return (
    <>
      <FAQSchema faqs={homepageFAQs} />
      <Header />
      <main>
        <Hero />
        <ProductsOverview />
        <Benefits />
        <TargetGroups />
        <Downloads />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
