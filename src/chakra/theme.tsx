import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
    },
  },
  fonts: {
    heading: "'Fira Sans', sans-serif",
    body: "'Fira Sans', sans-serif",
  },
});
