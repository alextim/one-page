/* eslint-disable import/no-extraneous-dependencies */
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const config = require('react-scripts/config/webpack.config')('production');

webpack(config, (err, stats) => {
  if (err) {
    return console.error(err);
  }

  if (stats.hasErrors()) {
    return console.error(stats.toString('errors-only'));
  }

  // eslint-disable-next-line no-console
  return console.log(stats);
});
