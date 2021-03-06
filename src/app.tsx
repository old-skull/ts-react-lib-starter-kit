import { Fonts, theme } from '@chakra';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import {
  Button,
  EButtonImpl,
  ELayoutOrientation,
  ELinkVariant,
  Input,
  Layout,
  Link,
  Select,
  Title,
} from '@components';
import ReactDOM from 'react-dom';

export const App = () => {
  return (
    <Layout
      orientation={ELayoutOrientation.vertical}
      spacing="6"
      p={4}
      justifyContent="center"
      justifyItems="center"
      textAlign="center"
    >
      <Box as="article">
        <Title>Buttons</Title>
        <Flex flexWrap="wrap" gridGap="2">
          <Button>button</Button>
          <Button impl={EButtonImpl.warn}>button</Button>
          <Button impl={EButtonImpl.action}>button</Button>
          <Button impl={EButtonImpl.alert}>button</Button>
        </Flex>
      </Box>

      <Box as="article">
        <Title>Inputs</Title>
        <Flex flexWrap="wrap" gridGap="2">
          <Input />
          <Input hiddable />
          <Input clearable />
          <Input hiddable clearable />
        </Flex>
      </Box>

      <Box as="article">
        <Title>Links</Title>
        <Flex flexWrap="wrap" flexDirection="column" gridGap="4">
          <Link href="/">plain</Link>
          <Link href="/" variant={ELinkVariant.underlined}>
            underlined
          </Link>
          <Link href="/" variant={ELinkVariant.doubleunderlined}>
            doubleunderlined
          </Link>
          <Link href="/" variant={ELinkVariant.striked}>
            striked
          </Link>
          <Link href="/" variant={ELinkVariant.overline}>
            overline
          </Link>
          <Link href="/" variant={ELinkVariant.wavy}>
            wavy
          </Link>
          <Link href="https://docs.cypress.io" isExternal>
            external
          </Link>
          <Link href="/link to the">transforms `my href`` into `my-href`</Link>
        </Flex>
      </Box>

      <Box as="article">
        <Title>Selects</Title>
        <Flex flexWrap="wrap" gridGap="4">
          <Select
            items={[
              { label: 'label', value: 'value' },
              { label: 'label_2', value: 'value_2' },
              { label: 3, value: 'value_3' },
            ]}
          />
          <Select
            helperText="Select with helper text"
            items={[
              { label: 'label', value: 'value' },
              { label: 'label_2', value: 'value_2' },
              { label: 3, value: 'value_3' },
            ]}
          />
          <Select
            placeholder="Placeholder"
            items={[
              { label: 'label', value: 'value' },
              { label: 'label_2', value: 'value_2' },
              { label: 3, value: 'value_3' },
            ]}
          />
        </Flex>
      </Box>
    </Layout>
  );
};

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Fonts />
    <App />
  </ChakraProvider>,
  document.getElementById('root'),
);
