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
      },
      "icon-button": {
        color: "#718096",
        bg: "gray.200",
        border: "1px solid #718096", //gray.500
        size: "xs",
        _hover: {
          color: "#CBD5E0",
          bg: "#2D3748",
          border: "1px solid #CBD5E0",
        },
      },
    },

    defaultProps: {
      colorScheme: 'gray',
      variant: 'solid'
    }
  });
  