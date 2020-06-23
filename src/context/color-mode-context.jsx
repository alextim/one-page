import React from 'react';

const ColorModeContext = React.createContext(null);

const ColorModeProvider = ({ isDark, setIsDark, children }) => (
  <ColorModeContext.Provider value={{ isDark, setIsDark }}>{children}</ColorModeContext.Provider>
);

export const useColorMode = () => React.useContext(ColorModeContext);

export default ColorModeProvider;
