import { defaultLocale } from '../i18n';

const localizeTo = (to, lang, force = false) => {
  if (!lang) {
    return to;
  }
  if (lang === defaultLocale) {
    if (!force) {
      return to;
    }
  }
  if (to === '/') {
    return `/${lang}`;
  }
  return `/${lang}${to}`;
};

export default localizeTo;
