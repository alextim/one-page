import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CookieWarning = ({ onClose }) => (
  <Wrapper>
    Hello
    <button type="button" style={{ pointerEvents: 'auto' }} onClick={onClose}>
      Ok
    </button>
  </Wrapper>
);

export default CookieWarning;
