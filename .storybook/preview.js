import { addDecorator } from '@storybook/react';
import { ChakraDecorator } from '../src/chakra';

addDecorator(storyFn => ChakraDecorator(storyFn));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
