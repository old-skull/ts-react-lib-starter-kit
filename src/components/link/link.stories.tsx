import { ComponentMeta } from '@storybook/react';
import { ELinkVariant, ILinkProps, Link } from '.';

export default {
  title: 'Navigation/Link',
  component: Link,
  argTypes: {
    variant: {
      options: [...Object.values(ELinkVariant)],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Link>;

const Template = (args: ILinkProps) => <Link {...args}>Button</Link>;

export const Base = Template.bind({});
Base.args = {
  variant: ELinkVariant.base,
};

export const Underlined = Template.bind({});
Underlined.args = {
  variant: ELinkVariant.underlined,
};

export const Doubleunderlined = Template.bind({});
Doubleunderlined.args = {
  variant: ELinkVariant.doubleunderlined,
};

export const Striked = Template.bind({});
Striked.args = {
  variant: ELinkVariant.striked,
};

export const Overline = Template.bind({});
Overline.args = {
  variant: ELinkVariant.overline,
};

export const Wavy = Template.bind({});
Wavy.args = {
  variant: ELinkVariant.wavy,
};
