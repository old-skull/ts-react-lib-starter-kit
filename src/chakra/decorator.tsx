import { ChakraProvider } from '@chakra-ui/react';
import { Fonts } from './fonts';
import { theme } from './theme';

export const ChakraDecorator = fn => (
  <ChakraProvider theme={theme}>
    <Fonts />
    {fn()}
  </ChakraProvider>
);
