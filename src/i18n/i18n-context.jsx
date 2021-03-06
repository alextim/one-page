import React from 'react';
import { I18nextProvider } from 'react-i18next';

// https://codesandbox.io/s/j2nxmjywx5?file=/index.js:1411-1425
import i18n from './i18n';

const I18nProvider = ({ children }) => <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;

export default I18nProvider;
