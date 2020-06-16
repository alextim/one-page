import React from 'react';
import styled from '@emotion/styled';

const StyledInput = styled.input`
  /*
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
  */
`;

const HoneyPotInput = ({ value, onChange }) => (
  <StyledInput
    type="email"
    name="email"
    tabIndex="-1"
    autoComplete="nope"
    placeholder="Email"
    value={value}
    onChange={onChange}
  />
);

export default HoneyPotInput;
