import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { useCheckLocalStorageSchema, useDarkMode } from './hooks';
import { themeLight, themeDark } from './themes';
import GlobalStyles from './components/GlobalStyles';

import Section from './components/Section';

import Menu from './components/Menu';

import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

const menuData = {
  about: { title: 'About', component: About },
  skills: { title: 'Skills', component: Skills },
  experience: { title: 'Experience', component: Experience },
  contact: { title: 'Contact', component: Contact },
};
// http://weaintplastic.com/
const ids = Object.keys(menuData);
const menuItems = ids.map((id) => ({ id, title: menuData[id].title }));

const ScrollSections = () => (
  <div>
    {ids.map((id) => (
      <Section key={id} id={id} title={menuData[id].title}>
        {menuData[id].component()}
      </Section>
    ))}
  </div>
);

const App = () => {
  // Clear local storage is schema version not match
  useCheckLocalStorageSchema();
  const [isDark, setIsDark] = useDarkMode();

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <GlobalStyles />
      <Menu menuItems={menuItems} />
      <ScrollSections />
      <button type="button" onClick={() => setIsDark(!isDark)}>
        {isDark ? 'light' : 'dark'}
      </button>
    </ThemeProvider>
  );
};

export default App;
