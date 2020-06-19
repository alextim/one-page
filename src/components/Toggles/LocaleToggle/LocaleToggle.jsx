import React from 'react';
import styled from '@emotion/styled';

import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { defaultLocale, secondLocale } from '../../../i18n';

import localizeTo from '../../../helpers/localizeTo';

const IconWrapper = styled.button`
  font-weight: ${(p) => (p.active ? 700 : 400)};
  border: 0;
  cursor: pointer;
  height: 40px;
  min-width: unset;
  background: transparent;
  :hover {
    color: white;
  }
`;

const LocaleToggle = () => {
  const { i18n } = useTranslation();
  const history = useHistory();
  const { pathname, hash } = useLocation();

  const currentLanguage = i18n.language;

  const clickHandler = (e, lang) => {
    e.preventDefault();

    const prevLanguage = currentLanguage || defaultLocale;
    if (lang === prevLanguage) {
      return;
    }

    i18n.changeLanguage(lang);

    let to;
    if (prevLanguage === defaultLocale) {
      to = localizeTo(pathname, lang);
    } else {
      to = pathname.replace(`/${secondLocale}`, '');
    }
    if (hash) {
      if (!to.endsWith('/')) {
        to += '/';
      }
      to += hash;
    }
    history.push(to);
  };

  return (
    <>
      <IconWrapper
        type="button"
        active={!currentLanguage || currentLanguage === defaultLocale}
        onClick={(e) => clickHandler(e, defaultLocale)}
      >
        {defaultLocale}
      </IconWrapper>
      <IconWrapper
        type="button"
        active={currentLanguage === secondLocale}
        onClick={(e) => clickHandler(e, secondLocale)}
      >
        {secondLocale}
      </IconWrapper>
    </>
  );
};

export default LocaleToggle;
