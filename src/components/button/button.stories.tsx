import { ComponentMeta } from '@storybook/react';
import { Button, EButtonImpl, IButtonProps } from '.';

export default {
  title: 'Controls/Button',
  component: Button,
  argTypes: {
    impl: {
      options: [...Object.values(EButtonImpl)],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template = (args: IButtonProps) => <Button {...args}>Button</Button>;

export const Base = Template.bind({});
Base.args = {
  impl: EButtonImpl.base,
};

export const Warn = Template.bind({});
Warn.args = {
  impl: EButtonImpl.warn,
};

export const Action = Template.bind({});
Action.args = {
  impl: EButtonImpl.action,
};

export const Alert = Template.bind({});
Alert.args = {
  impl: EButtonImpl.alert,
};
