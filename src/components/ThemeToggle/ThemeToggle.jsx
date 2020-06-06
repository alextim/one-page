import React from 'react';

import { AppContext } from '../../context';

const ThemeToggle = () => {
  return (
    <AppContext.Consumer>
      {({ isDark, toggleTheme }) => (
        <button type="button" onClick={toggleTheme}>
          {isDark ? 'light' : 'dark'}
        </button>
      )}
    </AppContext.Consumer>
  );
};

export default ThemeToggle;
