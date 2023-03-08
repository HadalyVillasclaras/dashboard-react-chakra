import { defineStyleConfig } from "@chakra-ui/react";

export const Table = defineStyleConfig({
    baseStyle: {
        table: {
            borderRadius: '1.5rem',
        },
        th: {
            fontSize: '2px',
            textAlign: 'start',
            backgroundColor: 'gray.100',
        }
    },

    variants: {
        simple: {
            th:{ 
                color: 'gray.800',
                borderBottom: '0.1rem solid',
                borderColor: 'gray.200'
            },
            tr: {
                borderColor: 'gray.200',
                _hover: {
                    bg: 'gray.50'
                }
            }
        },
    },

    defaultProps: {
        colorScheme: 'gray',
        variant: 'simple',
        size:"sm"
      }
})