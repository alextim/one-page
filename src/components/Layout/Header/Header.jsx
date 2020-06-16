import React, { useState } from 'react';
import styled from '@emotion/styled';

import useDocumentScrollThrottled from './useDocumentScrollThrottled';

const Wrapper = styled.header``;

const Header = ({ children }) => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 50;
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

  const headerClasses = `header${shouldHideHeader ? ' js-header-hidden' : ''}${
    shouldShowShadow ? ' js-header-shadow' : ''
  }`;

  return (
    <Wrapper id="header" className={headerClasses}>
      {children}
    </Wrapper>
  );
};

export default Header;
