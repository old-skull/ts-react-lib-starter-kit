import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  forwardRef,
  Input as ChakraInput,
  InputGroup,
  InputProps as ChakraInputProps,
  InputRightElement,
  ThemingProps,
} from '@chakra-ui/react';
import { ChangeEvent, FC, useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill, BsX } from 'react-icons/bs';

export interface IInputProps extends ChakraInputProps {
  hiddable?: boolean;
  clearable?: boolean;
  label?: string;
  helperText?: string;
  size?: ThemingProps<'Input'>['size'];
}

export const Input: FC<IInputProps> = forwardRef<IInputProps, 'input'>(
  ({ hiddable = false, clearable = false, size = 'md', label, helperText, ...rest }, ref) => {
    const [show, setShow] = useState<boolean>(true);
    const toggleHiddable = () => setShow(!show);

    const [value, setValue] = useState<string>('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return (
      <FormControl>
        {label && <FormLabel>{label}</FormLabel>}
        <InputGroup size={size}>
          <ChakraInput
            {...rest}
            px={2}
            type={show ? 'text' : 'password'}
            zIndex={1}
            size={size}
            value={value}
            onChange={onChange}
            ref={ref}
          />
          <InputRightElement display="flex" mr={2} gridGap={0.5} w="auto">
            {clearable && (
              <Box as="button" type="button" aria-label="clear field" onClick={() => setValue('')}>
                <BsX />
              </Box>
            )}

            {hiddable && (
              <Box as="button" type="button" aria-label="show field" onClick={toggleHiddable}>
                {show ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
              </Box>
            )}
          </InputRightElement>
        </InputGroup>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  },
);
