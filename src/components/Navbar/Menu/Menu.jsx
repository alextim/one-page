import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import NavItem from './NavItem';

const Wrapper = styled.div`
  position: absolute;
  top: ${(p) => p.theme.navbar.h[0]};
  left: 0;
  height: calc(100vh - ${(p) => p.theme.navbar.h[0]});
  width: 100%;
  margin: auto;

  /*
   background-color: inherit;
  */
  overflow-y: auto;
  transition: transform 0.5s linear;
  will-change: transform;
  z-index: 100;

  ${(p) => p.theme.mq.md} {
    position: static;
    display: inline-flex;
    align-items: center;
    top: 0;
    height: 100%;
    overflow: visible;
    transition: unset !important;
    will-change: unset !important;
  }
`;

const NavItems = styled.ul`
  border-top: 1px solid ${(p) => p.theme.nav.item.border.color};
  margin: 0;
  font-size: 1rem;

  ${(p) => p.theme.mq.md} {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
  }
`;

const Menu = ({ menuData, isMenuOpen, setIsMenuOpen }) => {
  const [activeItem, setActiveItem] = useState(null);
  const { pathname, hash } = useLocation();
  const { t } = useTranslation();
  const theme = useTheme();

  useEffect(() => {
    const targetId = hash ? hash.substring(1) : '';
    for (let i = 0; i < menuData.length; i++) {
      if (targetId === menuData[i].targetId) {
        setActiveItem(i);
        return;
      }
      if (pathname.indexOf(menuData[i].to) !== -1) {
        setActiveItem(i);
        return;
      }
    }
    setActiveItem(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash]);

  const onClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <Global
        styles={css`
          .mm {
            pointer-events: none;
            visibility: hidden;
            transform: translateX(-110%);

            &.js-mm--open {
              pointer-events: auto;
              visibility: visible;
              transform: unset;
            }
            ${theme.mq.md} {
              pointer-events: auto !important;
              visibility: visible !important;
              transform: none !important;
            }
          }
        `}
      />
      <Wrapper className={`mm${isMenuOpen ? ' js-mm--open' : ''}`}>
        <NavItems>
          {menuData.map(({ title, to, targetId }, i) => (
            <NavItem
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              no={i}
              isActive={i === activeItem}
              title={t(title)}
              to={to}
              targetId={targetId}
              onClick={onClick}
            />
          ))}
        </NavItems>
      </Wrapper>
    </>
  );
};

export default Menu;
