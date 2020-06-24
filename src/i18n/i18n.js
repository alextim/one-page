import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../locales/en/translation.json';
import ru from '../locales/ru/translation.json';

export const defaultLocale = 'en';
export const secondLocale = 'ru';

export const locales = {
  [defaultLocale]: 'English',
  [secondLocale]: 'Русский',
};

export const supportedLocale = (locale) => !!locales[locale];

i18n
  // .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // lng: 'en',
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    fallbackLng: defaultLocale,
    // initImmediate: false,
    whitelist: Object.keys(locales),
    load: 'languageOnly',
    // preload: ['en', 'ru'],
    debug: process.env.NODE_ENV !== 'production',
    // keySeparator: true,
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
