import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.li`
  display: block;
  width: 100%;

  border-bottom: 1px solid #dadce0;
  &:last-child {
    border-bottom: none;
  }
  ${(props) => props.theme.mq.md} {
    width: auto;
    height: 100%;
    margin: 0 1rem 0 0;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Anchor = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.625rem 1.5rem;
  white-space: nowrap;
  cursor: pointer;
  touch-action: none;

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    outline: 0;
  }

  &:focus {
    background-color: rgba(32, 33, 36, 0.12);
  }

  &:hover {
    background-color: rgba(32, 33, 36, 0.04);
  }

  &:active {
    background-color: rgba(32, 33, 36, 0.16);
  }

  ${(props) => props.theme.mq.md} {
    width: auto;
    height: 100%;
    padding: 0.75rem 0.75rem;

    &:hover {
      box-shadow: inset 0 -2px 0 0 blue;
      transition: box-shadow 0.4s ease;
    }
  }
`;

const NavItem = ({ title, to, targetId, active }) => {
  const [anchorTarget, setAnchorTarget] = useState(null);

  let handleClick;
  let func;
  let ariaCaption;

  if (targetId) {
    handleClick = (e) => {
      e.preventDefault();
      anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    func = () => setAnchorTarget(document.getElementById(targetId));
    ariaCaption = 'Scroll';
  } else {
    func = () => {};
    ariaCaption = 'Go';
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(func, []);

  return (
    <Wrapper>
      <Anchor
        href={targetId ? `#${targetId}` : to}
        active={active}
        aria-label={`${ariaCaption} to ${title}`}
        onClick={handleClick}
      >
        {title}
      </Anchor>
    </Wrapper>
  );
};

export default NavItem;
