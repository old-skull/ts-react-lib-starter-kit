import { Meta } from '@storybook/react';
import { Select } from '.';

export default {
  title: 'Controls/Select',
  component: Select,
} as Meta;

const items = [
  { label: 'label_1', value: 'value_1' },
  { label: 'label_2', value: 'value_2' },
  { label: 'label_3', value: 'value_3' },
];

export const Base = () => <Select items={items} />;

export const Xs = () => <Select size="xs" items={items} />;
export const Sm = () => <Select size="sm" items={items} />;
export const Md = () => <Select size="md" items={items} />;
export const Lg = () => <Select size="lg" items={items} />;

export const FullFeatured = () => (
  <Select
    items={items}
    onChange={e => console.log(e.target.value)}
    label="Label"
    placeholder="Input placeholder"
    helperText="Open console to see onChange result"
  />
);
