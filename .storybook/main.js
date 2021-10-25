const path = require('path');
const toPath = _path => path.join(process.cwd(), _path);

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@chakra-ui/react': toPath('node_modules/@chakra-ui/react'),
          '@emotion/react': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'framer-motion': toPath('node_modules/framer-motion'),
        },
      },
    };
  },
};
