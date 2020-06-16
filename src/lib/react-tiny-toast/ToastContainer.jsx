/* eslint-disable react/no-array-index-key */
import React, { useEffect, useReducer, useRef } from 'react';
import { createPortal } from 'react-dom';
import { toastManager } from './toast';
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

    return Object.keys(mapper).map((position, index) => {
      const resultContent = mapper[position].map(({ key, content, variant }) => {
        let animationCssClass = 'toast-item-animation-top';
        if (position.indexOf('bottom')) {
          animationCssClass = 'toast-item-animation-bottom';
        }
        return (
          <div key={key} className={`toast-item toast-item-${variant} ${animationCssClass}`}>
            {content}
          </div>
        );
      });
      // TODO key={index}
      return (
        <div key={index} className={`toast-container ${position}`}>
          {resultContent}
        </div>
      );
    });
  };

  if (!toastRef.current) {
    return null;
  }
  return createPortal(markup(), toastRef.current);
};

export default ToastContainer;
