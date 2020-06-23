/* eslint-disable no-alert */
import React from 'react';
import styled from '@emotion/styled';

import { ToastContainer, toast } from '../../lib/react-tiny-toast';

import SnackBar from '../SnackBar';
import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { menuData } from '../pages/Home';
import Container from '../Container';

import useCookieWarningToast from './useCookieWarningToast';

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

const InnerWrapper = styled(Container)`
  margin-top: 3rem;
  margin-bottom: 3rem;
  ${(p) => p.theme.mq.md} {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;
/*
            label="We serve cookies on this site to analyze traffic, remember your preferences, and optimize your experience."
            stacked
            action={{
              url: '/privacy',
              title: 'More details',
            }}
*/
const MAIN_CONTENT_ID = 'main-content';

const Layout = ({ hero, title, children }) => {
  useCookieWarningToast();

  return (
    <div
      id={MAIN_CONTENT_ID}
      className={`main-content ${hero ? 'js-with-hero ' : ''}js-focus-visible`}
    >
      <ToastContainer parentId={MAIN_CONTENT_ID} />
      <SnackBar />
      <Header>
        <Navbar menuData={menuData} />
      </Header>

      <main>
        {hero && hero}
        <InnerWrapper>
          {title && <h1>{title}</h1>}
          <button
            type="button"
            onClick={() =>
              toast.show({ label: 'toast' }, { timeout: 30000, position: 'bottom-center' })
            }
          >
            New Toast
          </button>
          {children}
        </InnerWrapper>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
