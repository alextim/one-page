/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const { dstDirectory } = require('./config');

console.log(dstDirectory);

const clean = (directory) => {
  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
      console.log(file);
      fs.unlink(path.join(directory, file), (er) => {
        if (er) throw er;
      });
    });
  });
};

clean(dstDirectory);
