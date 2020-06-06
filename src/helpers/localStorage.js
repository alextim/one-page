export const CURRENT_SCHEMA_VERSION = '2';

export const KEY_SELECTED_CODE_LANGUAGE = 'selectedLanguage';
export const KEY_SELECTED_SPOKEN_LANGUAGE = 'selectedSpokenLanguage';
export const KEY_SCHEMA_VERSION = 'schemaVersion';
export const KEY_DARK_MODE = 'preferDarkMode';
export const KEY_COOKIE_WARNED = 'cookieWarned';

export const getObject = (key) => JSON.parse(localStorage.getItem(key));
export const setObject = (key, value) => localStorage.setItem(key, JSON.stringify(value));
