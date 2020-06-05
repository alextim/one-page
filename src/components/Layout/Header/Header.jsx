import React, { useState } from 'react';
import styled from '@emotion/styled';
import useDocumentScrollThrottled from './useDocumentScrollThrottled';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #202124;
  z-index: 100;
  // transition: transform .8s ease-in-out;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
`;

const Header = ({ children }) => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 200;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? { boxShadow: '0 9px 9px -9px rgba(0, 0, 0, 0.13)' } : {};
  const hiddenStyle = shouldHideHeader ? { transform: 'translateY(-110%)' } : {};

  return <Wrapper css={{ ...shadowStyle, ...hiddenStyle }}>{children}</Wrapper>;
};

export default Header;
