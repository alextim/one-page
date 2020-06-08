import styled from '@emotion/styled';

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${(p) => p.theme.navbar.h[0]};
  margin: 0 auto;
  max-width: 100rem;
  color: ${(p) => p.theme.header.color};
  background-color: ${(p) => p.theme.header.bg};
  ${(p) => p.theme.mq.md} {
    align-items: center;
    justify-content: flex-start;
    height: ${(p) => p.theme.navbar.h[1]};
    position: relative;
  }
`;

const LeftRight = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  top: 0;
`;

export const Left = styled(LeftRight)`
  justify-content: center;
  margin-left: 1rem;
`;

export const Right = styled(LeftRight)`
  margin: 0 1rem 0 auto;
  ${(p) => p.theme.mq.md} {
    margin-left: 0;
  }
`;
