import React from 'react';
import { Helmet } from 'react-helmet-async';

const Seo = ({ title, desciption, noindex, metas = [] }) => {
  const { href } = window.location;
  const path = href;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {desciption && <meta name="description" content={desciption} />}
      <link rel="canonical" href={path} />
      <meta name="theme-color" content="#fff" />
      {noindex && <meta name="robots" content="noindex" />}
      {metas &&
        Object.keys(metas).map((name) => <meta key={name} name={name} content={metas[name]} />)}
    </Helmet>
  );
};

export default Seo;
