import styled from '@emotion/styled';

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  ${(props) => props.theme.mq.md} {
    flex-direction: row;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { MenuItems };
