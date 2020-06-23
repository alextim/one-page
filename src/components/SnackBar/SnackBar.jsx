/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import Button from '../Button';

const Container = styled.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0;
  pointer-events: none;
  right: 0;
  z-index: 300;

  @media (min-width: 481px) {
    margin: 8px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  visibility: ${(p) => (p.open ? 'visible' : 'hidden')};
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(32, 33, 36);
`;
/*

*/
const Label = styled.div`
  color: hsla(0, 0%, 100%, 0.87);
  font-size: 0.875rem;
  padding: 14px 16px;
`;

const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0;
  margin-right: 8px;
`;

const styleAction = css`
  font-size: 0.875rem;
  color: #3fc4ff;
  height: auto;

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

const SnackBar = ({ label, action, open, stacked, onClose }) => {
  return (
    <Container>
      <Global
        styles={css`
          .sb-iw__open {
            transform: scale(1);
            opacity: 1;
            pointer-events: auto;
          }

          .sb-iw__stacked {
            flex-direction: column;
            align-items: flex-start;
          }

          .sb-aw__stacked {
            align-self: flex-end;
            margin-bottom: 8px;
          }
        `}
      />

      <Wrapper open={open}>
        <InnerWrapper className={`${open ? 'sb-iw__open ' : ''}${stacked ? 'sb-iw__stacked' : ''}`}>
          <Label>{label}</Label>
          <ActionsWrapper className={`${stacked ? 'sb-aw__stacked' : ''}`}>
            {action && (
              <Button as="Link" to={action.url} style={styleAction} onClick={onClose}>
                {action.title}
              </Button>
            )}
            <Button style={styleAction} onClick={onClose}>
              Ok
            </Button>
          </ActionsWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

export default SnackBar;
