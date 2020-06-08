import React from 'react';

const ColorModeContext = React.createContext(null);

export function ColorModeProvider({ isDark, setIsDark, children }) {
  return (
    <ColorModeContext.Provider value={{ isDark, setIsDark }}>{children}</ColorModeContext.Provider>
  );
}

export function useColorMode() {
  return React.useContext(ColorModeContext);
}
