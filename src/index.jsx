import React /* , { Suspense } */ from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

import './i18n';
// import Loading from './components/Loading';

const rootElement = document.getElementById('root');
/*
const WrappedApp = () => (
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
*/
const WrappedApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<WrappedApp />, rootElement);
} else {
  ReactDOM.render(<WrappedApp />, rootElement);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
