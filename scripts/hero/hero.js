/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
const sharp = require('sharp');
const fs = require('fs');

const IMG_DIR = 'img/hero';
const dstDirectory = `public/${IMG_DIR}`;

const { srcDirectory, IMG_QUALITY, aspects } = require('./config');

const name = 'hero';

const srcWidthes = {
  '1920': aspects['16:9'],
  // '1366': aspects['16:9'],
  '1280': aspects['16:9'],
  // '1024': aspects['4:3'],
  '960': aspects['4:3'],
  '768': aspects['3:2'],
  '600': aspects['1:1'],
  // '480': aspects['1:1'],
  '360': aspects['1:1'],
};

// eslint-disable-next-line no-bitwise
const getH = (w, aspect) => (typeof aspect === 'object' ? ((w * aspect.h) / aspect.w) | 0 : aspect);
const widthes = Object.keys(srcWidthes).map((w) => parseInt(w, 10));

// const maxWidth = Math.max.apply(null, widthes);
// const maxHeight = getH(maxWidth, srcWidthes[maxWidth.toString()]);

const minWidth = Math.min.apply(null, widthes);
const minHeight = getH(minWidth, srcWidthes[minWidth.toString()]);

let sourceWebp = '';
let sourceJpeg = '';

const formatImgFileName = (w, h, ext) => `${name}-${w}x${h}.${ext}`;

const createSource = (w, h, fileName) => {
  return `    <source
      type="image/webp"
      media="(min-width: ${w}px)"
      width="${w}"
      height="${h}"
      srcSet={\`\${process.env.PUBLIC_URL}/${IMG_DIR}/${fileName} ${w}w\`}
    />\r\n`;
};

Object.keys(srcWidthes)
  .sort((a, b) => parseInt(b, 10) - parseInt(a, 10))
  .forEach((key) => {
    const w = parseInt(key, 10);
    const aspect = srcWidthes[key];
    // eslint-disable-next-line no-bitwise
    const h = getH(w, aspect);
    console.log('Start width=', w, 'height=', h);

    const webpToImport = formatImgFileName(w, h, 'webp');
    sourceWebp += createSource(w, h, webpToImport);

    const jpgToImport = formatImgFileName(w, h, 'jpg');
    sourceJpeg += createSource(w, h, jpgToImport);

    sharp(`${srcDirectory}/${name}.jpg`)
      .resize({ width: w, height: h })
      .jpeg({ quality: IMG_QUALITY })
      .toFile(`${dstDirectory}/${jpgToImport}`)
      .then(() => {
        console.log('Done jpg w=', w, 'h=', h);
      })
      .catch((err) => {
        console.error(err);
      });

    sharp(`${srcDirectory}/${name}.jpg`)
      .resize({ width: w, height: h })
      .webp({ quality: IMG_QUALITY })
      .toFile(`${dstDirectory}/${webpToImport}`)
      .then(() => {
        console.log('Done webp w=', w, 'h=', h);
      })
      .catch((err) => {
        console.error(err);
      });
  });

const fallbackImg = (w, h) =>
  `<img
      width="${w}"
      height="${h}"
      src={\`\${process.env.PUBLIC_URL}/${IMG_DIR}/${formatImgFileName(w, h, 'jpg')}\`}
      alt={alt}
    />`;

const js = `import React from 'react';

const HeroImg = ({ alt }) => (
  <picture>
${sourceWebp}  
${sourceJpeg}
    ${fallbackImg(minWidth, minHeight)}
  </picture>
);

export default HeroImg;
`;

const heroImageJsx = './src/components/pages/Home/Hero/HeroImg.jsx';
fs.writeFile(heroImageJsx, js, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Success', heroImageJsx);
  console.log('--------------------------------------');
  console.log(js);
  console.log('--------------------------------------');
});
