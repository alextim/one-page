import React from 'react';

import { AppContext } from '../../context';

const LanguageToggle = () => {
  return (
    <AppContext.Consumer>
      {({ selectedLanguage, toggleLanguage }) => (
        <button type="button" onClick={toggleLanguage}>
          {selectedLanguage === 'en' ? 'EN' : 'RU'}
        </button>
      )}
    </AppContext.Consumer>
  );
};

export default LanguageToggle;
