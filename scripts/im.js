const sharp = require('sharp');
const fs = require('fs');

const srcDirectory = 'src/images';
const name = 'hero';

const dstDirectory = 'src/images/hero';


const srcWidthes = [480, 1366, 1280, 1024, 960, 768, 600, 480, 1920];

const widthes = [...new Set(srcWidthes)].sort((a, b) => a - b);

const maxWidth = Math.max.apply(null, widthes);

let imp = '';
let sizes = '';
let srcSet = '';

widthes.forEach((w) => {
  console.log('Start width=', w);

  const importedImage = `${name}${w}`;

  imp += `import ${importedImage} from '../../../../images/hero/${importedImage}.jpg';\r\n`;

  if (srcSet) {
    srcSet += ',\r\n';
  }
  srcSet += `     \${${importedImage}} ${w}w`;

  if (sizes) {
    sizes += ',\r\n';
  }
  sizes += `(max-width: ${w}px) ${w}w`;

  sharp(`${srcDirectory}/${name}.jpg`)
    .resize({ width: w })
    .toFile(`${dstDirectory}/${importedImage}.jpg`)
    .then((info) => {
      console.log('Done width=', w);
    })
    .catch((err) => {
      console.error(err);
    });
});

sizes += `,\r\n ${maxWidth}w`;

const js = `import React from 'react';

${imp}
const HeroImg = ({ alt }) => (
  <img
    sizes="${sizes}"
    srcSet={\`\r\n` + srcSet + `\r\n    \`}
    src={${name}${maxWidth}}
    alt={alt} />
);

export default HeroImg;

`;

console.log(js);

const heroImageJsx = './src/components/pages/Home/Hero/HeroImg.jsx'
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
