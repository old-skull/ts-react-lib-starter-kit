import { Meta } from '@storybook/react';
import { Input } from '.';

export default {
  title: 'Controls/Input',
  component: Input,
} as Meta;

export const Base = () => <Input />;
export const Hiddeble = () => <Input hiddable />;
export const Clearable = () => <Input clearable />;
export const HiddebleAndClearable = () => <Input clearable hiddable />;

export const WithLabel = () => <Input label="Label" />;
export const WithHelperText = () => <Input helperText="Helper text example" />;
export const WithLabelAndHelperText = () => (
  <Input label="Label" helperText="Helper text example" />
);
export const WithPlaceholder = () => <Input placeholder="Input placeholder" />;
export const WithLabelPlaceholderAndHelperText = () => (
  <Input label="Label" placeholder="Input placeholder" helperText="Helper text example" />
);

export const Xs = () => <Input size="xs" />;
export const Sm = () => <Input size="sm" />;
export const Md = () => <Input size="md" />;
export const Lg = () => <Input size="lg" />;

export const FullFeatured = () => (
  <Input
    label="Label"
    placeholder="Input placeholder"
    helperText="Helper text example"
    hiddable
    clearable
  />
);
