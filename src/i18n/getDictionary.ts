import type { Locale } from "./config";

const dictionaries = {
  de: () => import("./dictionaries/de").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
  cs: () => import("./dictionaries/cs").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
