import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({ title, desciption, noindex, metas = [] }) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {desciption && <meta name="description" content={desciption} />}
      <meta name="theme-color" content="#fff" />
      {noindex && <meta name="robots" content="noindex" />}
      {metas &&
        Object.keys(metas).map((name) => <meta key={name} name={name} content={metas[name]} />)}
    </Helmet>
  );
};

export default Seo;
