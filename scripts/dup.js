/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const DupPCWP = require('duplicate-package-checker-webpack-plugin');
const webpackConfigProd = require('react-scripts/config/webpack.config')('production');

// pushing BundleAnalyzerPlugin to plugins array
webpackConfigProd.plugins.push(
  new DupPCWP({
    verbose: true,
  })
);

// actually running compilation and waiting for plugin to start explorer
webpack(webpackConfigProd, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err);
  }
  console.log(stats);
});
