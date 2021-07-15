import { StyleProps } from '@chakra-ui/react';

export type TStyleObject<K extends string, V = StyleProps> = { [key in K]: V };
