import baseTheme from './baseTheme';
import colors from './colors';

const themeLight = {
  ...baseTheme,
  isDark: false,
  colors: {
    ...colors,
    text: colors.black,
    bg: colors.white,
  },
};

const themeDark = {
  ...baseTheme,
  isDark: true,
  colors: {
    ...colors,
    text: colors.white,
    bg: colors.black,
  },
};

export { themeDark, themeLight };
