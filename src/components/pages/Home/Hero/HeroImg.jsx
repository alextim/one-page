import React from 'react';

const HeroImg = ({ alt }) => (
  <picture>
    <source
      type="image/webp"
      media="(min-width: 1920px)"
      width="1920"
      height="1080"
      srcSet={`${process.env.PUBLIC_URL}/img/hero/hero-1920x1080.webp 1920w`}
    />
    <source
      type="image/webp"
      media="(min-width: 1280px)"
      width="1280"
      height="720"
      srcSet={`${process.env.PUBLIC_URL}/img/hero/hero-1280x720.webp 1280w`}
    />
    <source
      type="image/webp"
      media="(min-width: 960px)"
      width="960"
      height="720"
      srcSet={`${process.env.PUBLIC_URL}/img/hero/hero-960x720.webp 960w`}
    />
    <source
      type="image/webp"
      media="(min-width: 768px)"
      width="768"
      height="512"
      srcSet={`${process.env.PUBLIC_URL}/img/hero/hero-768x512.webp 768w`}
    />
    <source
      type="image/webp"
      media="(min-width: 600px)"
      width="600"
      height="600"
      srcSet={`${process.env.PUBLIC_URL}/img/hero/hero-600x600.webp 600w`}
    />
    <source
      type="image/webp"
      media="(min-width: 360px)"
      width="360"
      height="360"
      srcSet={`${process.env.PUBLIC_URL}/img/hero/hero-360x360.webp 360w`}
    />

    <source
      type="image/webp"
      media="(min-width: 1920px)"
      width="1920"
      height="1080"
      srcSet={`${process.env.PUBLIC_URL}/img/hero/hero-1920x1080.jpg 1920w`}
    />
    <source
      type="image/webp"
      media="(min-width: 1280px)"
      width="1280"
      height="720"
      srcSet={`${process.env.PUBLIC_URL}/img/hero/hero-1280x720.jpg 1280w`}
    />
    <source
      type="image/webp"
      media="(min-width: 960px)"
      width="960"
      height="720"
      srcSet={`${process.env.PUBLIC_URL}/img/hero/hero-960x720.jpg 960w`}
    />
    <source
      type="image/webp"
      media="(min-width: 768px)"
      width="768"
      height="512"
      srcSet={`${process.env.PUBLIC_URL}/img/hero/hero-768x512.jpg 768w`}
    />
    <source
      type="image/webp"
      media="(min-width: 600px)"
      width="600"
      height="600"
      srcSet={`${process.env.PUBLIC_URL}/img/hero/hero-600x600.jpg 600w`}
    />
    <source
      type="image/webp"
      media="(min-width: 360px)"
      width="360"
      height="360"
      srcSet={`${process.env.PUBLIC_URL}/img/hero/hero-360x360.jpg 360w`}
    />

    <img
      width="360"
      height="360"
      src={`${process.env.PUBLIC_URL}/img/hero/hero-360x360.jpg`}
      alt={alt}
    />
  </picture>
);

export default HeroImg;
