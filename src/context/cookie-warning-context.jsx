import React from 'react';

const CookieWarningContext = React.createContext(null);

const CookieWarningProvider = ({ children, isCookieWarned, onCloseCookierWarning }) => (
  <CookieWarningContext.Provider value={{ isCookieWarned, onCloseCookierWarning }}>
    {children}
  </CookieWarningContext.Provider>
);

export const useCookieWarning = () => React.useContext(CookieWarningContext);

export default CookieWarningProvider;
