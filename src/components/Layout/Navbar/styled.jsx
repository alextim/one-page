import styled from '@emotion/styled';

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${(props) => props.theme.navbar.h[0]};
  margin: 0 auto;
  max-width: 100rem;
  color: #202124;
  background-color: ${(props) => props.theme.navbar.bg};
  a {
    color: #202124;
  }
  ${(props) => props.theme.mq.md} {
    align-items: center;
    justify-content: flex-start;
    height: ${(props) => props.theme.navbar.h[1]};
    position: relative;
  }
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  height: 100%;
  top: 0;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem 0 auto;
  height: 100%;
  top: 0;
  ${(props) => props.theme.mq.md} {
    margin-left: 0;
  }
`;
