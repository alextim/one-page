import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import disableScroll from 'disable-scroll';

import { ModalWrapper, ModalOverlay, ModalContent, StyledModalCloseButton } from './styled';

const ESC_KEY = 27;

let timer;

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

  const closeWithoutTimeout = () => {
    if (onClose) {
      onClose();
    }
    setOpen(false);
    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }
    if (preventScroll) {
      disableScroll.off();
    }
  };

  const close = (closeTimeoutMS = 0) => {
    if (closeTimeoutMS === 0 || timer) {
      closeWithoutTimeout();
      return;
    }
    timer = setTimeout(closeWithoutTimeout, closeTimeoutMS);
  };

  const open = () => {
    setOpen(true);
    if (preventScroll) {
      disableScroll.on();
    }
  };

  const ModalWrap = ({ children }) => (
    <Modal isOpen={isOpen} close={close} elementId={elementId}>
      {children}
    </Modal>
  );

  return [ModalWrap, open, close, isOpen];
};

export default useModal;
