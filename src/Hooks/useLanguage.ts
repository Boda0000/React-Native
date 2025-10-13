import { useState, useEffect } from "react";
import { I18nManager } from "react-native";
import i18n, { changeLanguage, getCurrentLanguage } from "../locales/i18n";

export function useLanguage() {
  const [lang, setLang] = useState(i18n.locale);

  useEffect(() => {
    const initLang = async () => {
      const current = await getCurrentLanguage();
      setLang(current);
      i18n.locale = current;
      I18nManager.forceRTL(current === "ar");
    };
    initLang();
  }, []);

  const toggleLanguage = async () => {
    const newLang = lang === "en" ? "ar" : "en";
    await changeLanguage(newLang);
    i18n.locale = newLang;
    I18nManager.forceRTL(newLang === "ar");
    setLang(newLang);
  };

  return { lang, toggleLanguage };
}
