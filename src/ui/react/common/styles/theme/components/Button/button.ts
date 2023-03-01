import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
    baseStyle: {
      color: 'white',
      borderRadius: '10px',
      _disabled: {
        opacity: 0.5,
        _hover: {
          opacity:0.5, 
        }
      },
      _hover: {
        _disabled: {
          backgroundColor: "gray.500",
        },
      }
    },

    defaultProps: {
      colorScheme: 'gray'
    }
  });
  