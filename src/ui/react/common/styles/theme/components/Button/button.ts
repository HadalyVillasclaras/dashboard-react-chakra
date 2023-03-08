import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
    baseStyle: {
      color: 'white',
      borderRadius: '10px',
    },

    variants: {
      solid: {
        bg: 'gray.500',
        _hover: {
          bg: 'gray.400'
        }
      }
    },

    defaultProps: {
      colorScheme: 'gray',
      variant: 'solid'
    }
  });
  