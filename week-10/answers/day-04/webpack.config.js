const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  // ... existing config ...
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};