import React from 'react';
import { useTranslation } from 'react-i18next';

import Section from '../../Section';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';

const sections = {
  about: { title: 'nav.about', component: About },
  skills: { title: 'nav.skills', component: Skills },
  experience: { title: 'nav.experience', component: Experience },
  contact: { title: 'nav.contact', component: Contact },
};

const ids = Object.keys(sections);
export const menuData = [
  ...ids.map((id) => ({ targetId: id, title: sections[id].title })),
  { to: '/blog', title: 'nav.blog' },
];

const ScrollSections = () => {
  const { t } = useTranslation();
  return (
    <div>
      {ids.map((id) => (
        <Section key={id} id={id} title={t(sections[id].title)}>
          {sections[id].component()}
        </Section>
      ))}
    </div>
  );
};

export default ScrollSections;
