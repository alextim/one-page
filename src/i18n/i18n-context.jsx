import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// https://codesandbox.io/s/j2nxmjywx5?file=/index.js:1411-1425

const LocaleContext = React.createContext(null);

export function I18nProvider({ locale, setLocale, children }) {
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return React.useContext(LocaleContext);
}
