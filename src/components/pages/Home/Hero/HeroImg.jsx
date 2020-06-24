import React from 'react';

import herojpg480 from '../../../../images/hero/hero-480x480.jpg';
import herowebp480 from '../../../../images/hero/hero-480x480.webp';
import herojpg600 from '../../../../images/hero/hero-600x600.jpg';
import herowebp600 from '../../../../images/hero/hero-600x600.webp';
import herojpg768 from '../../../../images/hero/hero-768x512.jpg';
import herowebp768 from '../../../../images/hero/hero-768x512.webp';
import herojpg960 from '../../../../images/hero/hero-960x720.jpg';
import herowebp960 from '../../../../images/hero/hero-960x720.webp';
import herojpg1024 from '../../../../images/hero/hero-1024x768.jpg';
import herowebp1024 from '../../../../images/hero/hero-1024x768.webp';
import herojpg1280 from '../../../../images/hero/hero-1280x720.jpg';
import herowebp1280 from '../../../../images/hero/hero-1280x720.webp';
import herojpg1366 from '../../../../images/hero/hero-1366x768.jpg';
import herowebp1366 from '../../../../images/hero/hero-1366x768.webp';
import herojpg1920 from '../../../../images/hero/hero-1920x1080.jpg';
import herowebp1920 from '../../../../images/hero/hero-1920x1080.webp';

const HeroImg = ({ alt }) => (
  <picture>
    <source
      type="image/webp"
      sizes="100vw"
      srcSet={`
        ${herowebp480} 480w,
        ${herowebp600} 600w,
        ${herowebp768} 768w,
        ${herowebp960} 960w,
        ${herowebp1024} 1024w,
        ${herowebp1280} 1280w,
        ${herowebp1366} 1366w,
        ${herowebp1920} 1920w
      `}
    />
    <source
      type="image/jpeg"
      sizes="100vw"
      srcSet={`
        ${herojpg480} 480w,
        ${herojpg600} 600w,
        ${herojpg768} 768w,
        ${herojpg960} 960w,
        ${herojpg1024} 1024w,
        ${herojpg1280} 1280w,
        ${herojpg1366} 1366w,
        ${herojpg1920} 1920w
      `}
    />
    <img
      sizes="100vw"
      srcSet={`
        ${herojpg480} 480w,
        ${herojpg600} 600w,
        ${herojpg768} 768w,
        ${herojpg960} 960w,
        ${herojpg1024} 1024w,
        ${herojpg1280} 1280w,
        ${herojpg1366} 1366w,
        ${herojpg1920} 1920w
      `}
      src={herojpg1920}
      alt={alt}
    />
  </picture>
);
/*
const HeroImg = ({ alt }) => (
  <img
    sizes="100vw"
    srcSet={`
        ${herojpg480} 480w,
        ${herojpg600} 600w,
        ${herojpg768} 768w,
        ${herojpg960} 960w,
        ${herojpg1024} 1024w,
        ${herojpg1280} 1280w,
        ${herojpg1366} 1366w,
        ${herojpg1920} 1920w
      `}
    src={herojpg1920}
    alt={alt}
  />
);
*/
export default HeroImg;
