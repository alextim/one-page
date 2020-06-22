import React from 'react';

import hero480 from '../../../../images/hero/hero480.jpg';
import hero600 from '../../../../images/hero/hero600.jpg';
import hero768 from '../../../../images/hero/hero768.jpg';
import hero960 from '../../../../images/hero/hero960.jpg';
import hero1024 from '../../../../images/hero/hero1024.jpg';
import hero1280 from '../../../../images/hero/hero1280.jpg';
import hero1366 from '../../../../images/hero/hero1366.jpg';
import hero1920 from '../../../../images/hero/hero1920.jpg';

const HeroImg = ({ alt }) => (
  <img
    sizes="(max-width: 480px) 480w,
(max-width: 600px) 600w,
(max-width: 768px) 768w,
(max-width: 960px) 960w,
(max-width: 1024px) 1024w,
(max-width: 1280px) 1280w,
(max-width: 1366px) 1366w,
(max-width: 1920px) 1920w,
 1920w"
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
