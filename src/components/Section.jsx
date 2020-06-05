import React from 'react';
// HOC
// https://gist.github.com/heygrady/f9bf3b6dd93fe3d87ba87430fd3c20d5
// https://github.com/facebook/react/blob/044015760883d03f060301a15beef17909abbf71/docs/docs/higher-order-components.md#dont-use-hocs-inside-the-render-method
const Section = ({ id, title, children }) => (
  <section id={id}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;
