const srcDirectory = 'src/images';

const IMG_QUALITY = 60;

const aspects = {
  '16:9': { w: 16, h: 9 },
  '4:3': { w: 4, h: 3 },
  '3:2': { w: 3, h: 2 },
  '1:1': { w: 1, h: 1 },
};

module.exports = { srcDirectory, IMG_QUALITY, aspects };
