/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import localizeTo from '../../helpers/localizeTo';

const LocalizedLink = ({ to, children, onClick, scroll, ...props }) => {
  const { i18n } = useTranslation();
  const localized = localizeTo(to, i18n.language);

  return scroll ? (
    <HashLink to={localized} scroll={scroll} onClick={onClick} {...props}>
      {children}
    </HashLink>
  ) : (
    <Link to={localized} {...props}>
      {children}
    </Link>
  );
};

export default LocalizedLink;
