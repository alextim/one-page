import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { useCheckLocalStorageSchema, useDarkMode } from './hooks';
import { themeLight, themeDark } from './themes';
import GlobalStyles from './components/GlobalStyles';
import { ScrollSections, menuData } from './components/ScrollSections';
import Layout from './components/Layout';

/*
import Menu from './components/Menu';
<Menu menuItems={menuItems} />
*/
// http://weaintplastic.com/

const App = () => {
  // Clear local storage is schema version not match
  useCheckLocalStorageSchema();
  const [isDark, setIsDark] = useDarkMode();

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <GlobalStyles />
      <Layout menuData={menuData}>
        <ScrollSections />
        <button type="button" onClick={() => setIsDark(!isDark)}>
          {isDark ? 'light' : 'dark'}
        </button>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
