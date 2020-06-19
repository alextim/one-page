import React from 'react';
import styled from '@emotion/styled';
import Link from '../LocalizedLink';
import * as ROUTES from '../../constants/routes';

const Wrapper = styled.div`
  color: red;
`;

const Logo = () => (
  <Wrapper>
    <Link to={ROUTES.HOME}>A.T.</Link>
  </Wrapper>
);

export default Logo;
