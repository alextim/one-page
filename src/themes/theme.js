import mq from './mq';
import { paletteDefault, paletteDark } from './colors';

const baseTheme = {
  mq,
  isDark: false,
  sizes: {
    container: {
      px: ['1rem', '1.5rem'],
      w: {
        min: 300,
        max: 1400,
      },
    },
  },
  colors: {
    ...paletteDefault,
    navigation: {
      socialLink: '#78757a',
    },
    headings: paletteDefault.text.primary,
    text: paletteDefault.text.primary,
    bg: paletteDefault.bg.default,
  },
  header: {
    color: paletteDefault.text.primary,
    bg: paletteDefault.common.white,
    border: paletteDefault.divider,
  },
  navbar: {
    h: ['3rem', '3.5rem'],
  },
  hamburger: {
    color: paletteDefault.text.primary,
    bg: paletteDefault.common.white,
    shadow: paletteDefault.common.black,
  },
  nav: {
    item: {
      border: {
        color: '#dadce0',
      },
      focus: {
        bg: 'rgba(32, 33, 36, 0.12)',
      },
      hover: {
        color: paletteDefault.common.black,
        bg: 'rgba(32, 33, 36, 0.04)',
      },
      active: {
        bg: 'rgba(32, 33, 36, 0.16)',
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
  form: {
    error: {
      color: 'crimson',
    },
    input: {
      color: paletteDefault.text.secondary,
      bg: paletteDefault.bg.paper,
      border: {
        color: 'rgb(226, 232, 240)',
        focus: 'rgb(49, 130, 206)',
        hover: 'rgb(203, 213, 224)',
      },
    },
  },
};

const themeDark = {
  ...baseTheme,
  isDark: true,
  colors: {
    ...paletteDark,
    headings: paletteDark.text.primary,
    text: paletteDark.text.primary,
    bg: paletteDark.bg.default,
  },
  header: {
    color: paletteDark.text.primary,
    bg: paletteDark.common.black,
    border: paletteDark.common.black,
  },
  hamburger: {
    color: paletteDark.text.primary,
    bg: paletteDark.common.black,
    shadow: paletteDark.common.black,
  },
  nav: {
    ...baseTheme.nav,
    item: {
      ...baseTheme.nav.item,
      focus: {
        bg: 'rgba(132,133, 136, 0.88)',
      },
      hover: {
        color: paletteDark.common.white,
        bg: 'rgba(132, 133, 136, 0.96)',
      },
      active: {
        bg: 'rgba(132, 133, 136, 0.80)',
      },
    },
  },
  footer: {
    ...baseTheme.footer,
    color: '#181716',
    bg: '#e6e6e6',
  },
  form: {
    ...baseTheme.form,
    input: {
      ...baseTheme.form.input,
      color: '#b3b9c5',
      bg: '#1e1e1e',
    },
  },
};

export { themeDark, baseTheme as themeLight };
