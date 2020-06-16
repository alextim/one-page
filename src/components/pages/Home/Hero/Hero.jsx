import React from 'react';
import styled from '@emotion/styled';
import hero from '../../../../images/hero.jpg';

const Wrapper = styled.div`
  position: relative;
  
  /*
  overflow: hidden;

  background-color: #000;
  background-image: url(${hero});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  background-attachment: fixed;
  background-position: 50% 0px;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.25;
    z-index: 1;
  }
  */
`;

const Img = styled.img`
  position: relative;
  max-height: 30rem;
`;

const InnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Hero = () => (
  <Wrapper>
    <Img src={hero} alt="" />
    <InnerWrapper>
      <h1>Hello</h1>
      <div>Lorem ipsum dolor sit amet, qui no mutat facilis concludaturque</div>
    </InnerWrapper>
  </Wrapper>
);

export default Hero;
