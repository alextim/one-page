import React from 'react';

import hero480 from '../../../../images/hero/hero-480x480.jpg';
import hero600 from '../../../../images/hero/hero-600x600.jpg';
import hero768 from '../../../../images/hero/hero-768x512.jpg';
import hero960 from '../../../../images/hero/hero-960x720.jpg';
import hero1024 from '../../../../images/hero/hero-1024x768.jpg';
import hero1280 from '../../../../images/hero/hero-1280x720.jpg';
import hero1366 from '../../../../images/hero/hero-1366x768.jpg';
import hero1920 from '../../../../images/hero/hero-1920x1080.jpg';

const HeroImg = ({ alt }) => (
  <img
    sizes="100vw"
    srcSet={`
      ${hero480} 480w,
      ${hero600} 600w,
      ${hero768} 768w,
      ${hero960} 960w,
      ${hero1024} 1024w,
      ${hero1280} 1280w,
      ${hero1366} 1366w,
      ${hero1920} 1920w
    `}
    src={hero1920}
    alt={alt}
  />
);

export default HeroImg;
