import React from 'react';
import styled from '@emotion/styled';

const Wrap = styled.div`
  background-color: #005587;
  box-shadow: 0 5px 7px -6px #000;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
  margin-right: 1rem;
  ${(props) => props.theme.mq.md} {
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
  span:before,
  span:after {
    border-radius: 1px;
    height: 0.125rem;
    width: 1.25rem;
    background: white;
    position: absolute;
    display: block;
    content: '';
    transition: all 300ms ease-in-out;
  }
  span {
    background-color: ${(props) => (props.open ? 'transparent' : 'white')};
  }
  span:before {
    top: ${(props) => (props.open ? 0 : '-0.625rem')};
    transform: ${(props) => (props.open ? 'rotate(45deg)' : 'none')};
  }
  span:after {
    top: ${(props) => (props.open ? 0 : '0.625rem')};
    bottom: -0.625rem;
    transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'none')};
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
