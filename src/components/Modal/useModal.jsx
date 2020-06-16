import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import disableScroll from 'disable-scroll';

import { ModalWrapper, ModalOverlay, ModalContent, StyledModalCloseButton } from './styled';

const ESC_KEY = 27;

const Modal = ({ children, isOpen = false, close, elementId = 'root' }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.keyCode === ESC_KEY) {
      e.stopPropagation();
      close();
    } else {
      e.preventDefault();
    }
  };

  if (isOpen === false) {
    return null;
  }
  const ModalCloseButton = () => <StyledModalCloseButton onClick={() => close()} />;

  return createPortal(
    <ModalWrapper ref={ref} tabIndex="-1" onKeyDown={handleKeyDown}>
      <ModalOverlay />
      <ModalContent>
        {children}
        <ModalCloseButton />
      </ModalContent>
    </ModalWrapper>,
    document.getElementById(elementId)
  );
};

const useModal = (elementId = 'root', options = {}) => {
  const { onClose, preventScroll = true } = options;
  const [isOpen, setOpen] = useState(false);
  const [closeTimer, setCloseTimer] = useState(null);

  const closeWithoutTimeout = useCallback(() => {
    if (onClose) {
      onClose();
    }
    setOpen(false);
    if (closeTimer) {
      clearTimeout(closeTimer);
      setCloseTimer(null);
    }
    if (preventScroll) {
      disableScroll.off();
    }
  }, [closeTimer, onClose, preventScroll]);

  const close = useCallback(
    (closeTimeoutMS = 0) => {
      if (closeTimeoutMS === 0) {
        closeWithoutTimeout();
        return;
      }
      if (closeTimer) {
        closeWithoutTimeout();
        return;
      }
      setCloseTimer(setTimeout(closeWithoutTimeout, closeTimeoutMS));
    },
    [closeTimer, closeWithoutTimeout]
  );

  const open = useCallback(() => {
    setOpen(true);
    if (preventScroll) {
      disableScroll.on();
    }
  }, [preventScroll]);

  const ModalWrap = useCallback(
    ({ children }) => (
      <Modal isOpen={isOpen} close={close} elementId={elementId}>
        {children}
      </Modal>
    ),
    [isOpen, close, elementId]
  );

  return [ModalWrap, open, close, isOpen];
};

export default useModal;
