/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

const styleButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 3.5rem;
  background: transparent;
  border: 0;
  border-radius: 3px;
  color: #3740ff;
  font: 500 0.875rem/2.25rem;
  outline: 0;
  padding: 0 1rem;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.2s, box-shadow 0.2s;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    pointer-events: none;
    transition: background-color 0.2s, border 0.2s;
    z-index: 1;
  }

  &:active::after {
    background-color: rgba(55, 64, 255, 0.16);
  }

  &:focus:not(.focus-visible) {
    .js-focus-visible & {
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
  }
`;

const stylePrimary = css`
  color: #fff;
  background-color: #3740ff;

  &:hover,
  &:focus,
  &:active {
    background-color: #3740ff;
    color: #fff;
  }

  &:focus {
    outline: 1px solid rgba(255, 255, 255, 0.8);
  }
`;

const styleSecondary = css`
  color: #202124;
  background-color: #fff;
  border: 1px solid #dadce0;

  &:hover,
  &:focus,
  &:active {
    background-color: #fff;
    border: 1px solid #dadce0;
    color: #202124;
  }

  &:focus {
    outline: 1px solid rgba(32, 33, 36, 0.6);
  }
`;

const Button = ({ classes, type, style, as, primary, secondary, children, ...props }) => {
  const styles = [styleButton];
  if (primary) {
    styles.push(stylePrimary);
  }
  if (secondary) {
    styles.push(styleSecondary);
  }
  if (style) {
    styles.push(style);
  }

  return as === 'Link' ? (
    <Link css={styles} {...props}>
      {children}
    </Link>
  ) : (
    <button css={styles} type={type || 'button'} {...props}>
      {children}
    </button>
  );
};

export default Button;
