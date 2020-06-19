import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { defaultLocale, secondLocale, supportedLocale } from '../../i18n';

import localizeTo from '../../helpers/localizeTo';
import * as ROUTES from '../../constants/routes';
import ScrollToPosOnMount from './ScrollToPosOnMount';

import HomePage from '../pages/Home';
import Blog from '../pages/Blog';
import Privacy from '../pages/Privacy';
import NotFound from '../pages/NotFound';

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

const AppRouter = () => {
  return (
    <Router>
      <ScrollToPosOnMount />
      <Switch>{routes.map((route) => route)}</Switch>
    </Router>
  );
};

export default AppRouter;
