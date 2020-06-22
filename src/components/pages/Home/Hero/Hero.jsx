import React from 'react';
import styled from '@emotion/styled';

import HeroImg from './HeroImg';

const Wrapper = styled.div`
  position: relative;
`;

const StyledHeroImg = styled(HeroImg)`
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

const Hero = ({ title, description }) => (
  <Wrapper>
    <StyledHeroImg alt="Hello" />
    <InnerWrapper>
      <h1>{title}</h1>
      {description && <div>{description}</div>}
    </InnerWrapper>
  </Wrapper>
);

export default Hero;
