import React from 'react';

import Section from '../../Section';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';

const sections = {
  about: { title: 'About', component: About },
  skills: { title: 'Skills', component: Skills },
  experience: { title: 'Experience', component: Experience },
  contact: { title: 'Contact', component: Contact },
};

const ids = Object.keys(sections);
export const menuData = [
  ...ids.map((id) => ({ targetId: id, title: sections[id].title })),
  { to: '/blog', title: 'Blog' },
];

const ScrollSections = () => (
  <div>
    {ids.map((id) => (
      <Section key={id} id={id} title={sections[id].title}>
        {sections[id].component()}
      </Section>
    ))}
  </div>
);

export default ScrollSections;
