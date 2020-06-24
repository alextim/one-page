import React /* , { Suspense } */ from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { defaultLocale, secondLocale, supportedLocale } from '../../i18n';

import localizeTo from '../../helpers/localizeTo';
import * as ROUTES from '../../constants/routes';
import ScrollToPosOnMount from './ScrollToPosOnMount';

import HomePage from '../pages/Home';

import Blog from '../pages/Blog';
import NotFound from '../pages/NotFound';
import PrivacyEn from '../pages/Privacy/en';
import PrivacyRu from '../pages/Privacy/ru';
/*
const Blog = React.lazy(() => import('../pages/Blog/index.js'));
const NotFound = React.lazy(() => import('../pages/NotFound/index.js'));
const PrivacyEn = React.lazy(() => import('../pages/Privacy/en/index.jsx'));
const PrivacyRu = React.lazy(() => import('../pages/Privacy/ru/index.jsx'));
*/
/*
const AdminRedirect = () => {
  window.location = ROUTES.ADMIN;
  return null;
};
*/

/*
const getRuntimeLocale = () => {
  const [locale] = (navigator.language || navigator.browserLanguage || defaultLocale).split('-');
  return locale;
};
*/
const HomeRoute = ({ match }) => {
  const { i18n } = useTranslation();
  const { hash } = useLocation();
  let lang;
  if (match.url === ROUTES.HOME) {
    lang = defaultLocale;
  } else {
    lang = match.url.substring(1, 3);
    if (lang === defaultLocale) {
      const to = ROUTES.HOME + (hash || '');
      return <Redirect to={to} />;
    }
  }

  if (i18n.language !== lang) {
    i18n.changeLanguage(lang);
  }
  return <HomePage />;
};

function OtherRoutes(component, match) {
  const { i18n } = useTranslation();

  let lang = match.url.substring(1, 3);

  if (!supportedLocale(lang)) {
    lang = defaultLocale;
  }
  const currentLanguage = i18n.language;
  if (currentLanguage !== lang) {
    i18n.changeLanguage(lang);
  }
  return component[lang] || component;
}

const BlogRoute = ({ match }) => OtherRoutes(<Blog />, match);

const PrivacyRoute = ({ match }) => OtherRoutes({ ru: <PrivacyRu />, en: <PrivacyEn /> }, match);

const routeTemplates = [
  //  { path: ROUTES.ADMIN, localize: false, exact: true, component: AdminRedirect },
  { path: ROUTES.HOME, localize: 'all', exact: true, component: HomeRoute },
  { path: ROUTES.BLOG, localize: true, exact: true, component: BlogRoute },
  { path: ROUTES.PRIVACY, localize: true, exact: true, component: PrivacyRoute },
  { path: undefined, localize: false, exact: undefined, component: NotFound },
];

const DefaultLanguageRedirect = ({ match }) => {
  let path = match.url.substring(3);
  if (!path) {
    path = '/';
  }
  return <Redirect to={path} />;
};

const routes = [];
routes.push(
  <Route
    key={`/${defaultLocale}/:id`}
    path={`/${defaultLocale}/:id`}
    component={DefaultLanguageRedirect}
  />
);
routeTemplates.forEach(({ path, component, exact, localize }) => {
  let key = path || 'notfound';
  routes.push(<Route key={key} path={path} component={component} exact={exact} />);
  if (localize) {
    if (localize === 'all') {
      key = localizeTo(path, defaultLocale, true);
      routes.push(<Route key={key} path={key} component={component} exact={exact} />);
    }
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
