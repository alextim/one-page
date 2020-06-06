import mq from './mq';
import colors from './colors';

const baseTheme = {
  mq,
  isDark: false,
  colors: {
    ...colors,
    text: colors.black,
    bg: '#fcfcfc',
  },
  navbar: {
    h: ['3rem', '3.5rem'],
    color: '#fff',
    bg: '#fff',
  },
  hamburger: {
    color: '#fff',
    bg: '#005587',
    shadow: '#000',
  },
  footer: {
    minHeight: '14rem',
    color: '#181716',
    bg: '#e6e6e6',
  },
};

const themeDark = {
  ...baseTheme,
  isDark: true,
  colors: {
    text: colors.white,
    bg: colors.black,
  },
  navbar: {
    ...baseTheme.navbar,
    color: '#fff',
    bg: '#fff',
  },
  hamburger: {
    color: 'red',
    bg: '#005587',
    shadow: '#000',
  },
  footer: {
    ...baseTheme.footer,
    color: '#181716',
    bg: '#e6e6e6',
  },
};

export { themeDark, baseTheme as themeLight };
