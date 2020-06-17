import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

import * as ROUTES from './constants/routes';

import { getHeaderHeight } from './helpers/scrollWithOffset';

import {
  useCheckLocalStorageSchema,
  useDarkMode,
  useSelectedLanguage,
  // useCookieWarned,
} from './hooks';
import { themeLight, themeDark } from './themes';
import GlobalStyles from './components/GlobalStyles';
import { ColorModeProvider, SnackBarProvider } from './context';
import { I18nProvider } from './i18n';

import HomePage from './components/pages/Home';
import Blog from './components/pages/Blog';
import Privacy from './components/pages/Privacy';
import Page404 from './components/pages/Page404';

// http://weaintplastic.com/

const ScrollToPosOnMount = () => {
  const { hash } = useLocation();
  useEffect(() => {
    let y = 0;
    if (hash) {
      const yOffset = getHeaderHeight();
      const id = hash.substr(1);
      const el = document.getElementById(id);
      if (el) {
        y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
      }
    }
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, [hash]);

  return null;
};

const adminRedirect = () => {
  window.location = 'https://msn.com';
  return null;
};

const App = () => {
  // Clear local storage is schema version not match
  useCheckLocalStorageSchema();
  const [isDark, setIsDark] = useDarkMode();
  // const [isCookieWarned, setIsCookieWarned] = useCookieWarned();
  const [selectedLanguage, setSelectedLanguage] = useSelectedLanguage();
  const [isCookieWarned, setIsCookieWarned] = useState(false);

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <ColorModeProvider isDark={isDark} setIsDark={setIsDark}>
        <I18nProvider locale={selectedLanguage} setLocale={setSelectedLanguage}>
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
            <Router>
              <ScrollToPosOnMount />
              <Switch>
                <Route exact path={ROUTES.HOME} component={HomePage} />
                <Route exact path={ROUTES.PRIVACY} component={Privacy} />
                <Route exact path={ROUTES.BLOG} component={Blog} />
                <Route exact path={ROUTES.LOGIN} component={adminRedirect} />
                <Route component={Page404} />
              </Switch>
            </Router>
          </SnackBarProvider>
        </I18nProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
