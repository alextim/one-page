import React from 'react';

import SnackBar from '../SnackBar';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * https://flexbox.ninja/demos/holy-grail-layout/
 * https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/
 * https://www.developerdrive.com/holy-grail-layout-flexbox/
 *
 * https://www.sitepoint.com/css-position-sticky-introduction-polyfills/
 * https://css-tricks.com/couple-takes-sticky-footer/
 *
 * https://flexbox.ninja/demos/same-height-columns/
 *
 * https://w3bits.com/css-masonry/
 * https://w3bits.com/tools/masonry-generator/
 *
 * https://w3bits.com/labs/rainbow-text/
 *
 * https://w3bits.com/labs/css-responsive-nav/
 *
 * https://w3bits.com/labs/css-snowfall/
 *
 */
const Layout = ({ menuData, children }) => (
  <div className="main-content js-focus-visible">
    <SnackBar />
    <Header>
      <Navbar menuData={menuData} />
    </Header>

    <main>{children}</main>

    <Footer />
  </div>
);

export default Layout;
