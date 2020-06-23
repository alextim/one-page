/* eslint-disable no-console */
const sharp = require('sharp');
const fs = require('fs');

const srcDirectory = 'src/images';
const name = 'hero';

const dstDirectory = 'src/images/hero';

const aspects = {
  '16:9': { w: 16, h: 9 },
  '4:3': { w: 4, h: 3 },
  '3:2': { w: 3, h: 2 },
  '1:1': { w: 1, h: 1 },
};

const srcWidthes = {
  '1920': aspects['16:9'],
  '1366': aspects['16:9'],
  '1280': aspects['16:9'],
  '1024': aspects['4:3'],
  '960': aspects['4:3'],
  '768': aspects['3:2'],
  '600': aspects['1:1'],
  '480': aspects['1:1'],
};

const widthes = Object.keys(srcWidthes).map((w) => parseInt(w, 10));

const maxWidth = Math.max.apply(null, widthes);

let imp = '';
let sizes = '';
let srcSet = '';

const formatImgFileName = (w, h) => `${name}-${w}x${h}.jpg`;
const formatImgReact = (w) => `${name}${w}`;

Object.keys(srcWidthes).forEach((key) => {
  const w = parseInt(key, 10);
  const aspect = srcWidthes[key];
  // eslint-disable-next-line no-bitwise
  const h = typeof aspect === 'object' ? ((w * aspect.h) / aspect.w) | 0 : aspect;
  console.log('Start width=', w, 'height=', h);

  const imgToImport = formatImgFileName(w, h);
  const imgReact = formatImgReact(w);

  imp += `import ${imgReact} from '../../../../images/hero/${imgToImport}';\r\n`;

  if (srcSet) {
    srcSet += ',\r\n';
  }
  srcSet += `      \${${imgReact}} ${w}w`;

  /*
  if (sizes) {
    sizes += ',\r\n';
  }
  sizes += `(max-width: ${w}px) ${w}w`;
  */

  sharp(`${srcDirectory}/${name}.jpg`)
    .resize({ width: w, height: h })
    .toFile(`${dstDirectory}/${imgToImport}`)
    .then(() => {
      console.log('Done w=', w, 'h=', h);
    })
    .catch((err) => {
      console.error(err);
    });
});

// sizes += `,\r\n ${maxWidth}w`;
sizes = '100vw';

const js = `import React from 'react';

${imp}
const HeroImg = ({ alt }) => (
  <img
    sizes="${sizes}"
    srcSet={\`\r\n${srcSet}\r\n    \`}
    src={${formatImgReact(maxWidth)}}
    alt={alt}
  />
);

export default HeroImg;

`;

console.log(js);

const heroImageJsx = './src/components/pages/Home/Hero/HeroImg.jsx';
fs.writeFile(heroImageJsx, js, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Success', heroImageJsx);
});

/*
fs.readdirSync(sourceDirectory).forEach((file) => {
  sharp(`${sourceDirectory}/${file}`)
    .resize(200, 100) // width, height
    .toFile(`${sourceDirectory}/${file}-small.jpg`);
});
*/
