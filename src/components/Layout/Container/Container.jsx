import styled from '@emotion/styled';

// https://createthrive.com/about
const ContainerFullWidth = styled.div`
  min-width: ${(p) => p.theme.sizes.container.w.min}px;
  max-width: ${(p) => p.theme.sizes.container.w.max}px;
  margin: 0 auto;
`;

const Container = styled(ContainerFullWidth)`
  padding: 0 ${(p) => p.theme.sizes.container.px[0]};
  ${(p) => p.theme.mq.md} {
    padding: 0 ${(p) => p.theme.sizes.container.px[1]};
  }
`;

const StrechedBackground = styled.div`
  padding-left: -1rem;
  padding-right: -1rem;
  ${(p) => p.theme.mq.md} {
    padding-left: -1.5rem;
    padding-right: -1.5rem;
  }
`;

export { ContainerFullWidth, StrechedBackground };

export default Container;
