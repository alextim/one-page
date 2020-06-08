import React from 'react';
import styled from '@emotion/styled';

import { useLocale } from '../../../context';

const IconWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /*
    both padding and appearance are here to help
    Mobile Safari rendering correctly, at least on
    older iOS versions — tested on iOS 12.4.2 / iPhone 5s
  */
  padding: 0;
  appearance: none;
  background: transparent;

  /* border-radius: 5px; */
  border: 0;
  cursor: pointer;
  height: 40px;

  /*
    roughly compensates for the additional whitespace of this specific
    "icon button" in relation to its "social icon" siblings;
    leave the left untouched for some separation from the aforementioned
  */
  margin-right: -11px;
  opacity: 0.75;

  /*
    allows us to use the default :focus
    outline without the "moon mask" being taken into account
    by the browser when rendering the outline —
    not an ideal solution, but good for now
  */
  overflow: hidden;
  position: relative;

  /*
    scaling to 75% of the original size
    scales the "moon" shape from 24px to 18px,
    aligning it with the rest of the main nav's
    "social icons"; sun and its rays are slightly larger;
    good for now, too ;-)
  */
  transform: scale(0.75);
  transition: opacity 0.3s ease;
  vertical-align: middle;
  width: 40px;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: 0;
  }
`;

const LocaleToggle = () => {
  const { locale, setLocale } = useLocale();

  const clickHandler = (e) => {
    e.preventDefault();
    setLocale(locale === 'en' ? 'ru' : 'en');
  };
  return (
    <IconWrapper type="button" onClick={clickHandler}>
      {locale === 'en' ? 'EN' : 'RU'}
    </IconWrapper>
  );
};

export default LocaleToggle;
