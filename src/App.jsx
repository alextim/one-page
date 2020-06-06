import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useCheckLocalStorageSchema, useDarkMode, useCookieWarned } from './hooks';
import { themeLight, themeDark } from './themes';
import GlobalStyles from './components/GlobalStyles';
import { SnackBarContext } from './context';
import Home from './components/Home';
import Privacy from './components/Privacy';
/*
import Menu from './components/Menu';
<Menu menuItems={menuItems} />
*/
// http://weaintplastic.com/

const App = () => {
  // Clear local storage is schema version not match
  useCheckLocalStorageSchema();
  const [isDark] = useDarkMode();
  // const [isCookieWarned, setIsCookieWarned] = useCookieWarned();
  const [isCookieWarned, setIsCookieWarned] = useState(false);

  const snackBarInitial = {
    label:
      'We serve cookies on this site to analyze traffic, remember your preferences, and optimize your experience.',
    stacked: true,
    action: {
      url: '/',
      title: 'More details',
    },
    open: !isCookieWarned,
    onClose: () => setIsCookieWarned(true),
  };

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <SnackBarContext.Provider value={snackBarInitial}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/privacy">
              <Privacy />
            </Route>
          </Switch>
        </Router>
      </SnackBarContext.Provider>
    </ThemeProvider>
  );
};

export default App;
