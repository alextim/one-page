import React, { useState } from 'react';
import SnackBar from '../SnackBar/SnackBar';
import Header from './Header';
import Navbar from './Navbar';

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
function Layout({ menuData, children }) {
  const [open, setOpen] = useState(false);
  const [stacked, setStacked] = useState(false);
  const closeHandler = () => setOpen(false);
  return (
    <div className="main-content js-focus-visible">
      <SnackBar
        label="We serve cookies on this site to analyze traffic, remember your preferences, and optimize your experience."
        open={open}
        stacked={stacked}
        action={{
          url: '/',
          title: 'More details',
        }}
        closeHandler={closeHandler}
      />
      <Header>
        <Navbar menuData={menuData} />
      </Header>

      <main>
        <button type="button" onClick={() => setOpen(!open)}>
          {open ? 'close' : 'open'}
        </button>
        <button type="button" onClick={() => setStacked(!stacked)}>
          {stacked ? 'normal' : 'stacked'}
        </button>
        {children}
      </main>

      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
