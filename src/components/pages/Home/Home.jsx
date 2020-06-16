import React from 'react';
import Layout from '../../Layout';
import Hero from './Hero';
import ScrollSections from './ScrollSections';

const Home = () => (
  <Layout hero={<Hero />}>
    <ScrollSections />
  </Layout>
);

export default Home;
