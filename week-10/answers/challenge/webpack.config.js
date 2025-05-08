// webpack.config.js
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  // ...existing config...
  plugins: [new BundleAnalyzerPlugin()],
};
