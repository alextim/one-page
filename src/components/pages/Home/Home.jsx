import React from 'react';
import { useTranslation } from 'react-i18next';

import Layout from '../../Layout';
import Seo from '../../Seo';

import Hero from './Hero';
import ScrollSections from './ScrollSections';

const Home = () => {
  const { t } = useTranslation();

  const title = t('site.title');
  const description = t('site.description');
  const metaTitle = t('site.metatitle');
  const metaDescription = t('site.metadescription');

  return (
    <Layout hero={<Hero title={title} description={description} />}>
      <Seo title={metaTitle} desciption={metaDescription} />
      <ScrollSections />
    </Layout>
  );
};

export default Home;
