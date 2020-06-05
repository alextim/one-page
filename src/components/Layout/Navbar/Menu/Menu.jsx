import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import NavItem from './NavItem';
import { useScrollMenu } from '../../../../hooks';

const Wrapper = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  height: calc(100vh - 3rem);
  width: 100%;
  margin: auto;
  background-color: #fff;

  z-index: 100;

  overflow-y: auto;

  transition: transform 0.5s linear;
  will-change: transform;

  ${(props) => props.theme.mq.md} {
    position: static;
    display: inline-flex;
    align-items: center;

    height: 100%;

    overflow: visible;

    transition: unset !important;
    will-change: unset !important;
  }
`;

const NavItems = styled.ul`
  border-top: 1px solid #ebebeb;
  ${(props) => props.theme.mq.md} {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
  }
`;

const Menu = ({ menuData, open }) => {
  const theme = useTheme();
  const { activeItem } = useScrollMenu(menuData);
  return (
    <>
      <Global
        styles={css`
          .mm {
            pointer-events: none;
            visibility: hidden;
            transform: translateX(-110%);

            &.mm--open {
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
      <Wrapper className={`mm${open ? ' mm--open' : ''}`}>
        <NavItems>
          {menuData.map(({ title, to, targetId }, i) => (
            <NavItem
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              title={title}
              to={to}
              targetId={targetId}
              active={targetId === activeItem}
            />
          ))}
        </NavItems>
      </Wrapper>
    </>
  );
};

export default Menu;
