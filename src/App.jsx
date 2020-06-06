import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  useCheckLocalStorageSchema,
  useDarkMode,
  useSelectedLanguage,
  // useCookieWarned,
} from './hooks';
import { themeLight, themeDark } from './themes';
import GlobalStyles from './components/GlobalStyles';
import { AppContext } from './context';
import Home from './components/Home';
import Privacy from './components/Privacy';
import Page404 from './components/Page404';
/*
import Menu from './components/Menu';
<Menu menuItems={menuItems} />
*/
// http://weaintplastic.com/

const App = () => {
  // Clear local storage is schema version not match
  useCheckLocalStorageSchema();
  const [isDark, setIsDark] = useDarkMode();
  // const [isCookieWarned, setIsCookieWarned] = useCookieWarned();
  const [selectedLanguage, setSelectedLanguage] = useSelectedLanguage();
  const [isCookieWarned, setIsCookieWarned] = useState(false);

  const snackBar = {
    label:
      'We serve cookies on this site to analyze traffic, remember your preferences, and optimize your experience.',
    stacked: true,
    action: {
      url: '/privacy',
      title: 'More details',
    },
    open: !isCookieWarned,
    onClose: () => setIsCookieWarned(true),
  };

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLanguage = () => setSelectedLanguage(selectedLanguage === 'en' ? 'ru' : 'en');

  const appContext = {
    snackBar,
    isDark,
    toggleTheme,
    selectedLanguage,
    toggleLanguage,
  };

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <AppContext.Provider value={appContext}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/privacy">
              <Privacy />
            </Route>
            <Route component={Page404} />
          </Switch>
        </Router>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
