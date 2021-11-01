module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@chakra-ui/react': '@chakra-ui/react',
          '@emotion/react': '@emotion/react',
          '@emotion/styled': '@emotion/styled',
          'framer-motion': 'framer-motion',
        },
      },
    };
  },
};
