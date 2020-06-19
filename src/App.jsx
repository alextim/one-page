import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import * as ROUTES from './constants/routes';
import localizeTo from './helpers/localizeTo';

import { getHeaderHeight } from './helpers/scrollWithOffset';

import {
  useCheckLocalStorageSchema,
  useDarkMode,
  // useCookieWarned,
} from './hooks';
import { themeLight, themeDark } from './themes';
import GlobalStyles from './components/GlobalStyles';
import { ColorModeProvider, SnackBarProvider } from './context';
import { I18nProvider, defaultLocale, secondLocale, supportedLocale } from './i18n';

import HomePage from './components/pages/Home';
import Blog from './components/pages/Blog';
import Privacy from './components/pages/Privacy';
import NotFound from './components/pages/NotFound';

// http://weaintplastic.com/

const ScrollToPosOnMount = () => {
  const { hash } = useLocation();
  useEffect(() => {
    let y = 0;
    if (hash) {
      const id = hash.substr(1);
      const el = document.getElementById(id);
      if (el) {
        const yOffset = getHeaderHeight();
        y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
      }
    }
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, [hash]);

  return null;
};

const AdminRedirect = () => {
  window.location = ROUTES.ADMIN;
  return null;
};

/*
const getRuntimeLocale = () => {
  const [locale] = (navigator.language || navigator.browserLanguage || defaultLocale).split('-');
  return locale;
};
*/
const HomeRoute = ({ match }) => {
  const { i18n } = useTranslation();
  const { hash } = useLocation();
  let lang = match.url.substring(1);
  if (lang) {
    lang = lang.replace('/', '');
    if (!supportedLocale(lang)) {
      lang = defaultLocale;
    }
  } else {
    lang = defaultLocale;
  }
  if (i18n.language !== lang) {
    i18n.changeLanguage(lang);
  }

  const url = match.url.endsWith('/') ? match.url.slice(0, -1) : match.url;
  if (url === `${ROUTES.HOME}${defaultLocale}`) {
    return <Redirect to={`${ROUTES.HOME}${hash || ''}`} />;
  }
  return <HomePage />;
};

function otherRoutes(path, match, i18n) {
  let lang = match.url.substring(1, 3);

  if (!supportedLocale(lang)) {
    lang = defaultLocale;
  }
  const currentLanguage = i18n.language;
  if (currentLanguage !== lang) {
    i18n.changeLanguage(lang);
  }
  if (match.url === `/${defaultLocale}${path}`) {
    return <Redirect to={path} />;
  }
  return null;
}

const BlogRoute = ({ match }) => {
  const { i18n } = useTranslation();
  const result = otherRoutes(ROUTES.BLOG, match, i18n);
  return result || <Blog />;
};

const PrivacyRoute = ({ match }) => {
  const { i18n } = useTranslation();
  const result = otherRoutes(ROUTES.PRIVACY, match, i18n);
  return result || <Privacy />;
};

const routeTemplates = [
  { path: ROUTES.ADMIN, component: AdminRedirect, exact: true, localize: false },
  { path: ROUTES.HOME, component: HomeRoute, exact: true, localize: true },
  { path: ROUTES.BLOG, component: BlogRoute, exact: true, localize: true },
  { path: ROUTES.PRIVACY, component: PrivacyRoute, exact: true, localize: true },
  { path: undefined, component: NotFound, exact: undefined, localize: false },
];

const routes = [];
routeTemplates.forEach(({ path, component, exact, localize }) => {
  let key = path || 'notfound';
  routes.push(<Route key={key} path={path} component={component} exact={exact} />);
  if (localize) {
    key = localizeTo(path, defaultLocale, true);
    routes.push(<Route key={key} path={key} component={component} exact={exact} />);
    key = localizeTo(path, secondLocale);
    routes.push(<Route key={key} path={key} component={component} exact={exact} />);
  }
});

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
            <Router>
              <ScrollToPosOnMount />
              <Switch>{routes.map((route) => route)}</Switch>
            </Router>
          </SnackBarProvider>
        </I18nProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
