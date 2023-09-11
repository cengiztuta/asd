import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const Languages = ["en", "de", "cs", "es", "it", "ru", "fr"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: {
      "en-US": ["en"],
    },
    debug: true,
    whitelist: Languages,
    interpolation: {
      escapeValue: false,
    },
    lng: "en",
  });

i18n.on("languageChanged", (newLang) => {
  if (!Languages.includes(newLang)) {
    i18n.changeLanguage("en");
  }
});

export default i18n;
