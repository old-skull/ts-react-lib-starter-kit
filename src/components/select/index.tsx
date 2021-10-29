import {
  FormControl,
  FormHelperText,
  FormLabel,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/react';
import { FC } from 'react';

export interface ISelectOption {
  label: string | number;
  value: string | number;
}

export interface ISelectProps extends ChakraSelectProps {
  label?: string;
  items: ISelectOption[];
  helperText?: string;
  ctrlId?: string;
}

export const Select: FC<ISelectProps> = ({ label, ctrlId, helperText, items, ...rest }) => {
  return (
    <FormControl id={ctrlId}>
      {label && <FormLabel>{label}</FormLabel>}
      <ChakraSelect {...rest}>
        {items.map(({ label, value }: ISelectOption) => (
          <option key={`${value}_${label}`} value={value}>
            {label}
          </option>
        ))}
      </ChakraSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
