import React from 'react';

const LocaleContext = React.createContext(null);

export function I18nProvider({ locale, setLocale, children }) {
  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return React.useContext(LocaleContext);
}
