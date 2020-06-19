import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import AppRouter from './AppRouter';

import {
  useCheckLocalStorageSchema,
  useDarkMode,
  // useCookieWarned,
} from '../../hooks';
import { themeLight, themeDark } from '../../themes';
import GlobalStyles from '../GlobalStyles';
import { ColorModeProvider, SnackBarProvider } from '../../context';
import { I18nProvider } from '../../i18n';

// http://weaintplastic.com/

const App = () => {
  // Clear local storage is schema version not match
  useCheckLocalStorageSchema();
  const [isDark, setIsDark] = useDarkMode();
  // const [isCookieWarned, setIsCookieWarned] = useCookieWarned();
  const [isCookieWarned, setIsCookieWarned] = useState(false);

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <ColorModeProvider isDark={isDark} setIsDark={setIsDark}>
        <I18nProvider>
          <SnackBarProvider
            label="We serve cookies on this site to analyze traffic, remember your preferences, and optimize your experience."
            stacked
            action={{
              url: '/privacy',
              title: 'More details',
            }}
            open={!isCookieWarned}
            onClose={() => setIsCookieWarned(true)}
          >
            <GlobalStyles />
            <AppRouter />
          </SnackBarProvider>
        </I18nProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
