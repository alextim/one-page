/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
const sharp = require('sharp');
const fs = require('fs');
// const path = require('path');

const srcDirectory = 'src/images';
const name = 'hero';

const dstDirectory = 'src/images/hero';

const IMG_QUALITY = 60;

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

/*
const clean = (directory) => {
  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory, file), (er) => {
        if (er) throw er;
      });
    }
  });
};

clean(dstDirectory);
*/

const widthes = Object.keys(srcWidthes).map((w) => parseInt(w, 10));

const maxWidth = Math.max.apply(null, widthes);

let imp = '';
let sizes = '';
let jpgSrcSet = '';
let webpSrcSet = '';

const formatImgFileName = (w, h, ext) => `${name}-${w}x${h}.${ext}`;
const formatImgReact = (w, ext) => `${name}${ext}${w}`;

Object.keys(srcWidthes).forEach((key) => {
  const w = parseInt(key, 10);
  const aspect = srcWidthes[key];
  // eslint-disable-next-line no-bitwise
  const h = typeof aspect === 'object' ? ((w * aspect.h) / aspect.w) | 0 : aspect;
  console.log('Start width=', w, 'height=', h);

  const jpgToImport = formatImgFileName(w, h, 'jpg');
  const webpToImport = formatImgFileName(w, h, 'webp');
  const jpgReact = formatImgReact(w, 'jpg');
  const webpReact = formatImgReact(w, 'webp');

  imp += `import ${jpgReact} from '../../../../images/hero/${jpgToImport}';\r\n`;
  imp += `import ${webpReact} from '../../../../images/hero/${webpToImport}';\r\n`;

  if (jpgSrcSet) {
    jpgSrcSet += ',\r\n';
  }
  jpgSrcSet += `        \${${jpgReact}} ${w}w`;

  if (webpSrcSet) {
    webpSrcSet += ',\r\n';
  }
  webpSrcSet += `        \${${webpReact}} ${w}w`;

  /*
  if (sizes) {
    sizes += ',\r\n';
  }
  sizes += `(max-width: ${w}px) ${w}w`;
  */

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

sizes = '100vw';
// sizes += `,\r\n ${maxWidth}w`;

const js = `import React from 'react';

${imp}
const HeroImg = ({ alt }) => (
  <picture>
    <source
      type="image/webp"
      sizes="${sizes}"
      srcSet={\`\r\n${webpSrcSet}\r\n      \`}
    />
    <source
      type="image/jpeg"
      sizes="${sizes}"
      srcSet={\`\r\n${jpgSrcSet}\r\n      \`}
    />
    <img
      sizes="${sizes}"
      srcSet={\`\r\n${jpgSrcSet}\r\n      \`}
      src={${formatImgReact(maxWidth, 'jpg')}}
      alt={alt}
    />
  </picture>
);
/*
const HeroImg = ({ alt }) => (
  <img
    sizes="${sizes}"
    srcSet={\`\r\n${jpgSrcSet}\r\n      \`}
    src={${formatImgReact(maxWidth, 'jpg')}}
    alt={alt}
  />
);
*/
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
