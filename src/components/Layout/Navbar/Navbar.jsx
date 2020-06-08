import React, { useState, useRef, useMemo } from 'react';
import { css, Global } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import { useScrollYPosition } from '../../../hooks';
import { Wrapper, Left, Right } from './styled';
import Hamburger from './Menu/Hamburger';
import Logo from './Logo';
import Menu from './Menu';
import { ColorModeToggle, LocaleToggle } from '../../Toggles';

/*
const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const useCurrentWitdh = () => {
  let [width, setWidth] = useState(getWidth());

  useLayoutEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return width;
};
const BP = 48 * 16;
*/
const BODY_PREVENT_SCROLLING = 'js-body__prevent-scrolling';

const Navbar = ({ menuData }) => {
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const rendersCount = useRef(0);

  const effect = (prevPos, currPos) => {
    const isShow = currPos > prevPos; // && Math.abs(currPos - prevPos) > 100;
    // console.warn(isShow, isNavbarVisible, prevPos, currPos);
    if (isShow !== isNavbarVisible) {
      setIsNavbarVisible(isShow);
    }
  };

  useScrollYPosition(effect, [isNavbarVisible], null, false, 300);

  const setIsMenuOpenWrap = (value) => {
    const list = document.body.classList;
    const hasClass = list.contains(BODY_PREVENT_SCROLLING);
    if (value) {
      if (!hasClass) {
        list.add(BODY_PREVENT_SCROLLING);
      }
    } else if (hasClass) {
      list.remove(BODY_PREVENT_SCROLLING);
    }
    setIsMenuOpen(value);
  };

  const toggleOpen = () => setIsMenuOpenWrap(!isMenuOpen);

  return useMemo(
    () => (
      <>
        <Global
          styles={css`
            ${theme.mq.md_max} {
              .${BODY_PREVENT_SCROLLING} {
                height: 100%;
                position: fixed;
              }
            }
          `}
        />
        <Wrapper smaller={!isNavbarVisible}>
          <Left>
            <Hamburger open={isMenuOpen} onClick={toggleOpen} />
            <Logo />
          </Left>
          <Menu menuData={menuData} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpenWrap} />
          <Right>
            <LocaleToggle />
            <ColorModeToggle />
            <div>
              <b>{++rendersCount.current}</b>
            </div>
          </Right>
        </Wrapper>
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isNavbarVisible, isMenuOpen]
  );
};

export default Navbar;
