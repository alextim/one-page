import React from 'react';

import { useTranslation } from 'react-i18next';
import Layout from '../../Layout';
import Seo from '../../Seo';

const title = '404';
const metaDescription = 'Page Not Found';

const metas = {
  'prerender-status-code': '404',
};

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={title} desciption={metaDescription} noindex metas={metas} />
      <h1>{title}</h1>
      <p>{t('page-not-found')}</p>
    </Layout>
  );
};

export default NotFound;
