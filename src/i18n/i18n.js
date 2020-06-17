import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from '../locale/ru.json';
import en from '../locale/en.json';

// i18n.use(initReactI18next).init({
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en,
      ru,
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV !== 'production',
    ns: ['common', 'home'],
    defaultNS: 'common',
    keySeparator: false,
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
    },
  });

export default i18n;
