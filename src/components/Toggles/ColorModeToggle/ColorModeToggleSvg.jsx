/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ActionButton from './ActionButton';
import { useColorMode } from '../../../context';

import { ReactComponent as MoonIcon } from '../../../images/moon2.svg';
import { ReactComponent as SunIcon } from '../../../images/sun.svg';

const ColorModeToggle = () => {
  const { isDark, setIsDark } = useColorMode();
  const label = isDark ? 'Activate light mode' : 'Activate dark mode';
  const clickHandler = (e) => {
    e.preventDefault();
    setIsDark(!isDark);
  };

  return (
    <ActionButton aria-label={label} isRotate={isDark} onClick={clickHandler}>
      {isDark ? (
        <SunIcon
          css={css`
            fill: currentColor;
          `}
        />
      ) : (
        <MoonIcon
          css={css`
            fill: currentColor;
          `}
        />
      )}
    </ActionButton>
  );
};

export default ColorModeToggle;
