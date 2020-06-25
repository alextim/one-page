import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { HelmetProvider } from 'react-helmet-async';

import AOS from 'aos';
import 'aos/dist/aos.css';

import AppRouter from './AppRouter';

import {
  useCheckLocalStorageSchema,
  useDarkMode,
  // useCookieWarned,
} from '../../hooks';
import { themeLight, themeDark } from '../../themes';
import GlobalStyles from '../GlobalStyles';
import { ColorModeProvider, CookieWarningProvider } from '../../context';
import { I18nProvider } from '../../i18n';

// http://weaintplastic.com/

const App = () => {
  // Clear local storage is schema version not match
  useCheckLocalStorageSchema();
  const [isDark, setIsDark] = useDarkMode();
  // const [isCookieWarned, setIsCookieWarned] = useCookieWarned();
  const [isCookieWarned, setIsCookieWarned] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
        <ColorModeProvider isDark={isDark} setIsDark={setIsDark}>
          <I18nProvider>
            <CookieWarningProvider
              isCookieWarned={isCookieWarned}
              onCloseCookierWarning={() => setIsCookieWarned(true)}
            >
              <GlobalStyles />
              <AppRouter />
            </CookieWarningProvider>
          </I18nProvider>
        </ColorModeProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
