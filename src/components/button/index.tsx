import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { TStyleObject } from '@utils';
import { FC, ReactNode } from 'react';

export enum EButtonImpl {
  base = 'base',
  warn = 'warn',
  action = 'action',
  alert = 'alert',
}

export interface IButtonProps extends ChakraButtonProps {
  children: ReactNode;
  impl?: EButtonImpl;
}

export const Button: FC<IButtonProps> = ({ children, impl = EButtonImpl.base, ...rest }) => {
  const impls: TStyleObject<EButtonImpl, ChakraButtonProps> = {
    base: {},
    warn: {
      bg: 'orange',
      color: 'white',
    },
    action: {
      bg: 'royalblue',
      color: 'white',
    },
    alert: {
      bg: 'crimson',
      color: 'white',
    },
  };

  return (
    <ChakraButton
      transition="0.3s ease-in-out"
      _hover={{ opacity: '0.6' }}
      {...impls[impl]}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};
