import React, { useState, useRef, useMemo } from 'react';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import Hamburger from './Menu/Hamburger';
import Logo from './Logo';
import Menu from './Menu';

import { useScrollYPosition } from '../../../hooks';

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
const BODY_PREVENT_SCROLLING = 'body__prevent-scrolling';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  margin: 0 auto;
  max-width: 100rem;
  color: #202124;
  background-color: #fff;
  a {
    color: #202124;
  }
  ${(props) => props.theme.mq.md} {
    align-items: center;
    justify-content: flex-start;
    height: 3.5rem;
    position: relative;
  }
`;
/*
  top: 0;
  height: 100%;
  */
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  height: 100%;
  top: 0;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem 0 auto;
  height: 100%;
  top: 0;
  ${(props) => props.theme.mq.md} {
    margin-left: 0;
  }
`;

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
    setIsMenuOpen(value);
    /*
    if (!value) {
      submenuRefs.forEach(element => {
        element.current && element.current.setVisible(false);
      });
    }
    */
    if (value) {
      if (!document.body.classList.contains(BODY_PREVENT_SCROLLING)) {
        document.body.classList.add(BODY_PREVENT_SCROLLING);
      }
    } else if (document.body.classList.contains(BODY_PREVENT_SCROLLING)) {
      document.body.classList.remove(BODY_PREVENT_SCROLLING);
    }
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
          <Menu menuData={menuData} open={isMenuOpen} />
          <Right>
            <div>
              <b>
                {
                  // eslint-disable-next-line no-plusplus
                  ++rendersCount.current
                }
              </b>
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
