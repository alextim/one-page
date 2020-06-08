import React from 'react';
import Layout from '../../Layout';
import { ScrollSections, menuData } from './Sections';

const Home = () => (
  <Layout menuData={menuData}>
    <ScrollSections />
  </Layout>
);

export default Home;
