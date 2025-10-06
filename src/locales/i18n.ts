import { I18n } from "i18n-js";
import * as RNLocalize from "react-native-localize";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18nManager } from "react-native";

import en from "./en.json";
import ar from "./ar.json";

const i18n = new I18n({ en, ar });
i18n.defaultLocale = "en";

export const initLanguage = async (): Promise<string> => {
  try {
    const savedLang = await AsyncStorage.getItem("appLang");
    const locale =
      savedLang || RNLocalize.getLocales()[0]?.languageCode || "en";

    i18n.locale = locale;

    const isRTL = locale === "ar";
    I18nManager.allowRTL(isRTL);
    I18nManager.forceRTL(isRTL);

    return locale;
  } catch (error) {
    console.log("Error initializing language:", error);
    i18n.locale = "en";
    return "en";
  }
};

export const changeLanguage = async (lang: "en" | "ar") => {
  try {
    await AsyncStorage.setItem("appLang", lang);
    i18n.locale = lang;

    const isRTL = lang === "ar";
    I18nManager.allowRTL(isRTL);
    I18nManager.forceRTL(isRTL);
  } catch (error) {
    console.log("Error changing language:", error);
  }
};

export const getCurrentLanguage = async (): Promise<string> => {
  const savedLang = await AsyncStorage.getItem("appLang");
  return savedLang || i18n.locale || "en";
};

export default i18n;
