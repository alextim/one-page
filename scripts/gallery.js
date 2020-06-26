/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
const sharp = require('sharp');
const fs = require('fs');
// const path = require('path');

const { IMG_QUALITY, aspects } = require('./hero/config');

const IMG_DIR = 'img/gallery';
const dstDirectory = `public/${IMG_DIR}`;

const srcDirectory = 'src/images/gallery';

const srcWidthes = {
  '1920': aspects['16:9'],
  '1366': aspects['16:9'],
  '1280': aspects['16:9'],
  '1024': aspects['4:3'],
  '960': aspects['4:3'],
  '768': aspects['3:2'],
  '600': aspects['1:1'],
  '480': aspects['1:1'],
  '360': aspects['1:1'],
};

const { promises } = fs;

async function myF() {
  let names;
  try {
    names = await promises.readdir(srcDirectory);
  } catch (e) {
    console.log('e', e);
  }
  if (names === undefined) {
    return undefined;
  }
  return names.map((file) => `${srcDirectory}/${file}`);
}

let fileList;

async function processFiles() {
  fileList = await myF();
  console.log(fileList);
}

processFiles();
