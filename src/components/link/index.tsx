import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { TStyleObject } from '@utils';
import { FC, ReactNode } from 'react';

export enum ELinkVariant {
  base = 'base',
  underlined = 'underlined',
  doubleunderlined = 'doubleunderlined',
  striked = 'striked',
  overline = 'overline',
  wavy = 'wavy',
}

export interface ILinkProps extends ChakraLinkProps {
  children: ReactNode;
  href: string;
  variant?: ELinkVariant;
}

export const Link: FC<ILinkProps> = ({
  children,
  href = '/',
  variant = ELinkVariant.base,
  ...rest
}) => {
  const variants: TStyleObject<ELinkVariant, ChakraLinkProps> = {
    base: {},
    underlined: { textDecoration: 'underline' },
    doubleunderlined: { textDecoration: 'double underline' },
    striked: { textDecoration: 'line-through' },
    overline: { textDecoration: 'overline' },
    wavy: { textDecoration: 'underline', textDecorationStyle: 'wavy' },
  };

  const formattedHref = href.trim().replace(/\s/g, '-');

  return (
    <ChakraLink
      href={formattedHref}
      color="teal.500"
      _hover={{ opacity: '0.6' }}
      {...variants[variant]}
      {...rest}
    >
      {children}
    </ChakraLink>
  );
};
