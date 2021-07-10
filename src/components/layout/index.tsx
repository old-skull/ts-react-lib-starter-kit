import { Box, BoxProps, LayoutProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export const enum ELayoutOrientation {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

type TChakraGenericLayoutProps = BoxProps & LayoutProps;

export interface ILayoutProps extends TChakraGenericLayoutProps {
  children: ReactNode;
  spacing?: string | number;
  orientation?: ELayoutOrientation;
}

export const Layout: FC<ILayoutProps> = ({
  children,
  orientation = ELayoutOrientation.vertical,
  spacing = 0,
  ...rest
}) => {
  const orientations: { [key in ELayoutOrientation]: unknown } = {
    horizontal: {
      display: 'flex',
    },
    vertical: {
      display: 'grid',
    },
  };

  return (
    <Box m="0 auto" gridGap={spacing} {...orientations[orientation]} {...rest}>
      {children}
    </Box>
  );
};
