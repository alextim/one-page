import React from 'react';

const SnackBarContext = React.createContext(null);

export function SnackBarProvider({ label, stacked, action, open, onClose, children }) {
  return (
    <SnackBarContext.Provider value={{ label, stacked, action, open, onClose }}>
      {children}
    </SnackBarContext.Provider>
  );
}

export function useSnackBar() {
  return React.useContext(SnackBarContext);
}
