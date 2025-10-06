import * as Localization from "react-native-localize";
import i18n from "i18n-js";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

i18n.translations = {
  en,
  ar,
};

const currentLocale = Localization.getLocales()[0].languageCode;
i18n.locale = currentLocale;

i18n.fallbacks = true;

export default i18n;
