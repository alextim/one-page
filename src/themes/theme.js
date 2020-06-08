import mq from './mq';
import colors from './colors';

const baseTheme = {
  mq,
  isDark: false,
  colors: {
    ...colors,
    navigation: {
      socialLink: '#78757a',
    },
    text: colors.black,
    bg: '#fcfcfc',
  },
  header: {
    color: '#202124',
    bg: '#fff',
  },
  navbar: {
    h: ['3rem', '3.5rem'],
  },
  hamburger: {
    color: '#fff',
    bg: '#005587',
    shadow: '#000',
  },
  nav: {
    item: {
      border: {
        color: '#dadce0',
      },
      bg: {
        focus: 'rgba(32, 33, 36, 0.12)',
        hover: 'rgba(32, 33, 36, 0.04)',
        active: 'rgba(32, 33, 36, 0.16)',
      },
      shadow: {
        active: '#3740ff',
      },
    },
  },
  icon: {
    color: 'rgb(170, 170, 170)',
    hoverColor: 'rgb(119, 119, 119)',
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
    ...baseTheme.colors,
    text: colors.white,
    bg: colors.black,
  },
  header: {
    color: '#fff',
    bg: '#000',
  },
  hamburger: {
    color: 'red',
    bg: '#005587',
    shadow: '#000',
  },
  nav: {
    ...baseTheme.nav,
    item: {
      ...baseTheme.nav.item,
      bg: {
        focus: 'rgba(132,133, 136, 0.88)',
        hover: 'rgba(132, 133, 136, 0.96)',
        active: 'rgba(132, 133, 136, 0.80)',
      },
    },
  },
  footer: {
    ...baseTheme.footer,
    color: '#181716',
    bg: '#e6e6e6',
  },
};

export { themeDark, baseTheme as themeLight };
