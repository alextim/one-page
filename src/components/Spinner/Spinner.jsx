/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, css, keyframes } from '@emotion/core';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Inner = styled.div`
  border: 2px solid #ccc;
  border-top-color: ${(p) => p.theme.colors.text};
`;

const Spinner = ({ width = 1.5 }) => {
  const innerWrapperStyle = css`
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${width}rem;
    height: ${width}rem;
    margin-top: -${width / 2}rem;
    margin-left: -${width / 2}rem;
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;
  `;

  return (
    <Wrapper css={innerWrapperStyle}>
      <Inner css={innerWrapperStyle} />
    </Wrapper>
  );
};

export default Spinner;
