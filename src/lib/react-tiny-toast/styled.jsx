import styled from '@emotion/styled';

import Button from '../../components/Button';

export const ToastList = styled.div`
  position: fixed;
`;

const bg = {
  default: 'rgb(32, 33, 36)',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
};

export const ToastItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(p) => (p.stacked ? 'flex-start' : 'center')};
  flex-direction: ${(p) => (p.stacked ? 'column' : 'row')};
  pointer-events: auto;
  color: #f8f9fa;
  background-color: ${(p) => bg[p.variant]};
  font-size: 0.875rem;
  border-radius: 2px;
  box-shadow: -4px -4px 16px -6px rgba(0, 0, 0, 1);
`;

export const Label = styled.div`
  color: hsla(0, 0%, 100%, 0.87);
  font-size: 0.875rem;
  padding: 14px 16px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0;
  margin-right: 8px;
  align-self: ${(p) => (p.stacked ? 'flex-end' : 'unset')};
  margin-bottom: ${(p) => (p.stacked ? '8px' : 'unset')};
`;

export const Action = styled(Button)`
  color: #3fc4ff;
  height: 2rem;

  + .sb-action {
    margin-left: 8px;
  }

  &:active,
  &:focus,
  &:hover {
    box-shadow: none;
  }

  &:active {
    background: rgba(63, 196, 255, 0.16);
  }

  &:focus {
    background: rgba(63, 196, 255, 0.12);
  }

  &:hover {
    background: rgba(63, 196, 255, 0.08);
  }
`;
