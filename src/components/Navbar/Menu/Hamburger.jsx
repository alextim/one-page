import React from 'react';
import styled from '@emotion/styled';

/*   box-shadow: 0 5px 7px -6px ${(p) => p.theme.hamburger.shadow}; */

const Wrap = styled.div`
  background-color: ${(p) => p.theme.hamburger.bg};
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
  margin-right: 1rem;

  ${(p) => p.theme.mq.md} {
    display: none;
  }
`;

const InnerWrap = styled.div`
  position: relative;
  top: 0;
  height: 1.3rem;
  width: 1.9rem;
  margin-top: 1.2rem;
  margin-left: 0.6rem;
  cursor: pointer;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;

  span,
  span::before,
  span::after {
    border-radius: 1px;
    height: 0.125rem;
    width: 1.25rem;
    background: ${(p) => p.theme.hamburger.color};
    position: absolute;
    display: block;
    content: '';
    transition: all 300ms ease-in-out;
  }

  span {
    background-color: ${(p) => (p.open ? 'transparent' : p.theme.hamburger.color)};

    &::before {
      top: ${(p) => (p.open ? 0 : '-0.625rem')};
      transform: ${(p) => (p.open ? 'rotate(45deg)' : 'none')};
    }

    &::after {
      top: ${(p) => (p.open ? 0 : '0.625rem')};
      bottom: -0.625rem;
      transform: ${(p) => (p.open ? 'rotate(-45deg)' : 'none')};
    }
  }
`;

const Hamburger = ({ open, onClick }) => {
  return (
    <Wrap onClick={onClick}>
      <InnerWrap open={open}>
        <span />
      </InnerWrap>
    </Wrap>
  );
};

export default Hamburger;
