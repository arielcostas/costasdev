import Spanish from "./es.json";
import English from "./en.json";

export const SHOW_DEFAULT_LANGUAGE = false;
export const DEFAULT_LANGUAGE = "es";

export type LanguageKeys = "es" | "en";

export const languages: Record<LanguageKeys, { code: string; name: string }> = {
  es: {
    code: "es",
    name: "Español",
  },
  en: {
    code: "en",
    name: "English",
  },
};

export const LANGUAGE_CODES = Object.keys(languages);

export const useTranslations = (lang: string | undefined) => {
  switch (lang) {
    case languages.en.code:
      return English;
    case languages.es.code:
    default:
      return Spanish;
  }
};

export function getUrlWithoutLocale(url: string) {
  return url.replace(/\/[a-z]{2}\//, "/");
}
