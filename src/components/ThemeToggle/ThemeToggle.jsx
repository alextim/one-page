import React from 'react';

import { useDarkMode } from '../../hooks';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <button type="button" onClick={() => setIsDark(!isDark)}>
      {isDark ? 'light' : 'dark'}
    </button>
  );
};

export default ThemeToggle;
