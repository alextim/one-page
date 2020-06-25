import React from 'react';

// {$imp}
const HeroImg = ({ alt }) => (
  <picture style={{ maxWidth: 'auto' }}>
    <source
      type="image/webp"
      sizes="100vw"
      srcSet={`
        ${process.env.PUBLIC_URL}/img/hero/hero-1920x1080.webp 1920w,
        ${process.env.PUBLIC_URL}/img/hero/hero-1366x768.webp 1366w,
        ${process.env.PUBLIC_URL}/img/hero/hero-1280x720.webp 1280w,
        ${process.env.PUBLIC_URL}/img/hero/hero-1024x768.webp 1024w,
        ${process.env.PUBLIC_URL}/img/hero/hero-960x720.webp 960w,
        ${process.env.PUBLIC_URL}/img/hero/hero-768x512.webp 768w,
        ${process.env.PUBLIC_URL}/img/hero/hero-600x600.webp 600w,
        ${process.env.PUBLIC_URL}/img/hero/hero-480x480.webp 480w,
        ${process.env.PUBLIC_URL}/img/hero/hero-360x360.webp 360w
      `}
    />
    <source
      type="image/jpeg"
      sizes="100vw"
      srcSet={`
        ${process.env.PUBLIC_URL}/img/hero/hero-1920x1080.jpg 1920w,
        ${process.env.PUBLIC_URL}/img/hero/hero-1366x768.jpg 1366w,
        ${process.env.PUBLIC_URL}/img/hero/hero-1280x720.jpg 1280w,
        ${process.env.PUBLIC_URL}/img/hero/hero-1024x768.jpg 1024w,
        ${process.env.PUBLIC_URL}/img/hero/hero-960x720.jpg 960w,
        ${process.env.PUBLIC_URL}/img/hero/hero-768x512.jpg 768w,
        ${process.env.PUBLIC_URL}/img/hero/hero-600x600.jpg 600w,
        ${process.env.PUBLIC_URL}/img/hero/hero-480x480.jpg 480w,
        ${process.env.PUBLIC_URL}/img/hero/hero-360x360.jpg 360w
      `}
    />
    <img
      sizes="100vw"
      srcSet={`
        ${process.env.PUBLIC_URL}/img/hero/hero-1920x1080.jpg 1920w,
        ${process.env.PUBLIC_URL}/img/hero/hero-1366x768.jpg 1366w,
        ${process.env.PUBLIC_URL}/img/hero/hero-1280x720.jpg 1280w,
        ${process.env.PUBLIC_URL}/img/hero/hero-1024x768.jpg 1024w,
        ${process.env.PUBLIC_URL}/img/hero/hero-960x720.jpg 960w,
        ${process.env.PUBLIC_URL}/img/hero/hero-768x512.jpg 768w,
        ${process.env.PUBLIC_URL}/img/hero/hero-600x600.jpg 600w,
        ${process.env.PUBLIC_URL}/img/hero/hero-480x480.jpg 480w,
        ${process.env.PUBLIC_URL}/img/hero/hero-360x360.jpg 360w
      `}
      src={`${process.env.PUBLIC_URL}/img/hero/hero-1920x1080.jpg`}
      alt={alt}
    />
  </picture>
);
/*
const HeroImg = ({ alt }) => (
  <img
    sizes="100vw"
    srcSet={`
        ${process.env.PUBLIC_URL}/img/hero/hero-1920x1080.jpg 1920w,
        ${process.env.PUBLIC_URL}/img/hero/hero-1366x768.jpg 1366w,
        ${process.env.PUBLIC_URL}/img/hero/hero-1280x720.jpg 1280w,
        ${process.env.PUBLIC_URL}/img/hero/hero-1024x768.jpg 1024w,
        ${process.env.PUBLIC_URL}/img/hero/hero-960x720.jpg 960w,
        ${process.env.PUBLIC_URL}/img/hero/hero-768x512.jpg 768w,
        ${process.env.PUBLIC_URL}/img/hero/hero-600x600.jpg 600w,
        ${process.env.PUBLIC_URL}/img/hero/hero-480x480.jpg 480w,
        ${process.env.PUBLIC_URL}/img/hero/hero-360x360.jpg 360w
      `}
    src={herojpg1920}
    alt={alt}
  />
);
*/
export default HeroImg;
