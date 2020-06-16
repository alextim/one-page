/* eslint-disable indent */
import React from 'react';
import styled from '@emotion/styled';
import { HashLink as Link } from 'react-router-hash-link';
import scrollWidthOffset from '../../../../helpers/scrollWithOffset';

const Wrapper = styled.li`
  display: block;
  width: 100%;
  border-bottom: 1px solid ${(p) => p.theme.nav.item.border.color};

  &:last-child {
    border-bottom: 0;
  }

  ${(p) => p.theme.mq.md} {
    width: auto;
    height: 100%;
    border-bottom: 0;
  }
`;

const NavItem = ({ no, title, to, targetId, isActive, onClick }) => {
  const handleClick = () => {
    onClick(no);
  };

  const Anchor = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.625rem 1.5rem;
    white-space: nowrap;
    cursor: pointer;
    touch-action: none;
    opacity: 1;

    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
      outline: 0;
    }

    &:focus {
      background-color: ${(p) => p.theme.nav.item.focus.bg};
    }

    &:hover {
      color: ${(p) => p.theme.nav.item.hover.color};
      background-color: ${(p) => p.theme.nav.item.hover.bg};
    }

    &:active {
      background-color: ${(p) => p.theme.nav.item.active.bg};
    }

    ${(p) => p.theme.mq.md} {
      width: auto;
      height: 100%;
      padding: 0.75rem 0.75rem;
      box-shadow: ${(p) =>
        isActive ? `0 -2px 0 ${p.theme.nav.item.shadow.active} inset` : 'unset'};
    }
  `;
  return (
    <Wrapper>
      <Anchor
        to={targetId ? `/#${targetId}` : to}
        aria-label={`Go to ${title}`}
        scroll={scrollWidthOffset}
        onClick={handleClick}
      >
        {title}
      </Anchor>
    </Wrapper>
  );
};

export default NavItem;
