import styled from '@emotion/styled';

const ActionButton = styled.button`
  background-color: transparent;
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
  height: 40px;
  width: 40px;
  outline: none;
  color: ${(p) => p.theme.icon.color};

  svg {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${(p) => p.theme.icon.hoverColor};

    svg {
      transform: ${(p) => (p.isRotate ? 'rotate(45deg)' : 'none')};
    }
  }
`;

export default ActionButton;
