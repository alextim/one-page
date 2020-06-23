/* eslint-disable react/no-array-index-key */
/** @jsx jsx */
import { useEffect, useReducer, useRef } from 'react';
import { createPortal } from 'react-dom';
import { css, jsx, Global } from '@emotion/core';

import { toastManager } from './toast';
import { Label, ToastList, ToastItem, ActionsWrapper, Action } from './styled';

import './index.css';

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const reducer = (state, action) => {
  const { type, data } = action;
  if (type === ADD) {
    if (state.filter((i) => i.uniqueCode && i.uniqueCode === data.uniqueCode).length) {
      return state;
    }
    return [...state, data];
  }
  if (type === REMOVE) {
    return state.filter((i) => i.id !== data.id);
  }
  return state;
};

const ToastContainer = ({ parentId }) => {
  const toastRootElementId = 'react-tiny-toast-main-container';
  const [data, dispatch] = useReducer(reducer, []);
  const toastRef = useRef(null);

  const callback = (actionType, content, options) => {
    if (actionType === ADD) {
      dispatch({ type: ADD, data: { content, ...options, key: `${options.id}` } });
    }
    if (options.pause && actionType === REMOVE) {
      dispatch({ type: REMOVE, data: { id: options.id } });
    } else if (!options.pause) {
      window.setTimeout(() => {
        dispatch({ type: REMOVE, data: { id: options.id } });
      }, options.timeout);
    }
  };

  useEffect(() => {
    toastManager.subscribe(callback);
  }, []);

  useEffect(() => {
    const node = document.createElement('div');
    node.setAttribute('id', toastRootElementId);
    let parent;
    if (parentId) {
      parent = document.getElementById(parentId);
      if (!parent) {
        throw new Error(`element ID="${parentId}" not found`);
      }
    } else {
      parent = document.body;
    }
    parent.appendChild(node);
    toastRef.current = node;
    return () => parent.removeChild(node);
  }, [parentId]);

  const positionMaintainer = () => {
    const mapper = {};
    data.forEach(({ position, ...rest }) => {
      if (position) {
        if (!mapper[position]) {
          mapper[position] = [];
        }
        mapper[position].push(rest);
      }
    });
    return mapper;
  };

  const markup = () => {
    const mapper = positionMaintainer();

    return Object.keys(mapper).map((position) => {
      let align;
      if (position.includes('center')) {
        align = 'center';
      } else if (position.includes('left')) {
        align = 'flex-start';
      } else {
        align = 'flex-end';
      }

      const resultContent = mapper[position].map(({ key, content, variant }) => {
        let animationCssClass = 'toast-item-animation-top';
        if (position.indexOf('bottom')) {
          animationCssClass = 'toast-item-animation-bottom';
        }
        const { label, actions, stacked } = content;
        return (
          <ToastItem
            key={key}
            variant={variant || 'default'}
            stacked={stacked}
            className={animationCssClass}
          >
            <Label>{label}</Label>
            {actions && (
              <ActionsWrapper stacked={stacked}>
                {actions.map(({ title, to, onClick }) => (
                  <Action as={to ? 'Link' : ''} to={to} onClick={onClick}>
                    {title}
                  </Action>
                ))}
              </ActionsWrapper>
            )}
          </ToastItem>
        );
      });

      return (
        <ToastList
          key={position}
          css={{
            top: position.includes('top') ? 0 : 'unset',
            bottom: position.includes('bottom') ? 0 : 'unset',
            alignSelf: align,
            '@media (min-width: 481px)': {
              margin: '0.5rem',
            },
          }}
        >
          <Global
            styles={css`
              @-webkit-keyframes toast-animation-from-top {
                from {
                  top: 100px;
                  opacity: 0.8;
                }

                to {
                  top: 0;
                  opacity: 1;
                }
              }

              @-webkit-keyframes toast-animation-from-bottom {
                from {
                  bottom: 100px;
                  opacity: 0.8;
                }

                to {
                  bottom: 0;
                  opacity: 1;
                }
              }

              @keyframes toast-animation-from-top {
                from {
                  top: 100px;
                  opacity: 0.8;
                }

                to {
                  top: 0;
                  opacity: 1;
                }
              }

              @keyframes toast-animation-from-bottom {
                from {
                  bottom: 100px;
                  opacity: 0.8;
                }

                to {
                  bottom: 0;
                  opacity: 1;
                }
              }

              .toast-item-animation-top {
                animation: toast-animation-from-top 0.5s ease-in-out;
              }

              .toast-item-animation-bottom {
                animation: toast-animation-from-bottom 0.5s ease-in-out;
              }
            `}
          />
          {resultContent}
        </ToastList>
      );
    });
  };

  if (!toastRef.current) {
    return null;
  }
  return createPortal(markup(), toastRef.current);
};

export default ToastContainer;
