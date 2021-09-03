const path = require('path');
const pathSrc = path.resolve(__dirname, 'src');

const nextConfig = {
  webpack: config => {
    config.resolve.alias['@'] = pathSrc;

    return config;
  }
};

module.exports = nextConfig;
