import { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsOverview from "@/components/ProductsOverview";
import Benefits from "@/components/Benefits";
import TargetGroups from "@/components/TargetGroups";
import Process from "@/components/Process";
import Downloads from "@/components/Downloads";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { FAQSchema } from "@/components/SEO";
import { getDictionary } from "@/i18n/getDictionary";
import { type Locale, hreflangAlternates } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const baseUrl = locale === "cs" ? "https://moduloparking.cz" : "https://moduloparking.at";
  const localePath = locale === "de" || locale === "cs" ? "" : `/${locale}`;

  return {
    title: dict.common.meta.siteTitle,
    description: dict.common.meta.siteDescription,
    alternates: {
      canonical: `${baseUrl}${localePath}`,
      languages: hreflangAlternates("/"),
    },
    openGraph: {
      title: dict.common.meta.siteTitle,
      description: dict.common.meta.siteDescription,
      url: `${baseUrl}${localePath}`,
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const homepageFAQs = dict.home.faq.map((faq: { question: string; answer: string }) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <>
      <FAQSchema faqs={homepageFAQs} />
      <Header locale={locale} dict={dict} />
      <main id="main">
        <Hero locale={locale} dict={dict} />
        <Reveal><ProductsOverview locale={locale} dict={dict} /></Reveal>
        <Reveal><Benefits locale={locale} dict={dict} /></Reveal>
        <Reveal><TargetGroups locale={locale} dict={dict} /></Reveal>
        <Reveal><Process locale={locale} dict={dict} /></Reveal>
        <Reveal><Downloads locale={locale} dict={dict} /></Reveal>
        <Reveal><CTA locale={locale} dict={dict} /></Reveal>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
