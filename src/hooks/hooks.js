import { useEffect } from 'react';
// https://github.com/huchenme/hacker-tab-extension/blob/master/src/helpers/github.js
import useLocalStorage from './useLocalStorage';
import {
  KEY_SELECTED_CODE_LANGUAGE,
  KEY_SELECTED_SPOKEN_LANGUAGE,
  KEY_SCHEMA_VERSION,
  KEY_DARK_MODE,
  CURRENT_SCHEMA_VERSION,
} from '../helpers/localStorage';

export const useSelectedLanguage = () => useLocalStorage(KEY_SELECTED_CODE_LANGUAGE, 'en'); // allLanguagesValue);

export const useSelectedSpokenLanguage = () => useLocalStorage(KEY_SELECTED_SPOKEN_LANGUAGE, 'en'); // allSpokenLanguagesValue);

export const useDarkMode = () => {
  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const [mode, setMode] = useLocalStorage(
    KEY_DARK_MODE,
    Boolean(window.matchMedia(preferDarkQuery).matches)
  );
  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => setMode(Boolean(mediaQuery.matches));
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [setMode]);

  return [mode, setMode];
};

export const useCheckLocalStorageSchema = () => {
  const [schemaVersion, setSchemaVersion] = useLocalStorage(KEY_SCHEMA_VERSION);
  if (schemaVersion !== CURRENT_SCHEMA_VERSION) {
    window.localStorage.clear();
    setSchemaVersion(CURRENT_SCHEMA_VERSION);
  }
};
