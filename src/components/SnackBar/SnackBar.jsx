import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

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
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
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

const SnackBar = ({ label, action, open, stacked, closeHandler }) => {
  return (
    <>
      <Global
        styles={css`
          .a-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            border: 0;
            border-radius: 3px;
            color: #3740ff;
            cursor: pointer;
            font: 500 0.875rem/2.25rem 'Roboto', sans-serif;
            height: 56px;
            letter-spacing: 1px;
            outline: 0;
            padding: 0 16px;
            position: relative;
            text-decoration: none;
            text-transform: uppercase;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeSpeed;
            overflow: hidden;
            padding: 0 16px;
            position: relative;
            text-decoration: none;
            text-transform: uppercase;
            transition: background-color 0.2s, box-shadow 0.2s;
            vertical-align: middle;
            white-space: nowrap;
            -webkit-tap-highlight-color: transparent;
            align-items: center;
            background: transparent;
            border: 0;
            border-radius: 3px;
            color: #3740ff;
            cursor: pointer;
            display: inline-flex;
            font: 500 0.875rem/2.25rem 'Roboto', sans-serif;
            height: 56px;
            justify-content: center;
            letter-spacing: 1px;
            outline: 0;
            padding: 0 16px;
            position: relative;
            text-decoration: none;
            text-transform: uppercase;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeSpeed;
            overflow: hidden;
            padding: 0 16px;
            position: relative;
            text-decoration: none;
            text-transform: uppercase;
            transition: background-color 0.2s, box-shadow 0.2s;
            vertical-align: middle;
            white-space: nowrap;

            &:after {
              bottom: 0;
              content: '';
              left: 0;
              pointer-events: none;
              position: absolute;
              right: 0;
              top: 0;
              transition: background-color 0.2s, border 0.2s;
              z-index: 1;
            }

            &:active::after {
              background-color: rgba(55, 64, 255, 0.16);
            }
            &:focus:not(.focus-visible) {
              js-focus-visible & {
                outline: none;
              }
            }

            @media (hover: hover) {
              &:hover::after {
                background-color: rgba(55, 64, 255, 0.04);
              }
              &:focus::after {
                background-color: rgba(55, 64, 255, 0.12);
              }
              &:hover,
              &:focus {
                background: #fff;
                box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                  0 1px 10px 0 rgba(0, 0, 0, 0.12);
                outline: none;
                text-decoration: none;
              }
              &:focus {
                outline: 1px solid rgba(55, 64, 255, 0.8);
                outline-offset: -3px;
              }

              &:hover,
              &:focus {
                background: #fff;
                box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                  0 1px 10px 0 rgba(0, 0, 0, 0.12);
                outline: none;
                text-decoration: none;
              }
            }
          }
          .a-button--primary,
          .a-button--primary:hover,
          .a-button--primary:focus,
          .a-button--primary:active {
            background-color: #3740ff;
            color: #fff;
          }
          .a-button--primary:focus {
            outline: 1px solid rgba(255, 255, 255, 0.8);
          }
          .a-button--secondary,
          .a-button--secondary:hover,
          .a-button--secondary:focus,
          .a-button--secondary:active {
            background-color: #fff;
            border: 1px solid #dadce0;
            color: #202124;
          }
          .a-button--secondary:focus {
            outline: 1px solid rgba(32, 33, 36, 0.6);
          }

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

          .sb-action {
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
          }
        `}
      />
      <Container>
        <Wrapper open={open}>
          <InnerWrapper
            className={`${open ? 'sb-iw__open ' : ''}${stacked ? 'sb-iw__stacked' : ''}`}
          >
            <Label>{label}</Label>
            <ActionsWrapper className={`${stacked ? 'sb-aw__stacked' : ''}`}>
              {action && (
                <a href={action.url} className="a-button sb-action">
                  {action.title}
                </a>
              )}
              <button type="button" className="a-button sb-action" onClick={closeHandler}>
                Ok
              </button>
            </ActionsWrapper>
          </InnerWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default SnackBar;
