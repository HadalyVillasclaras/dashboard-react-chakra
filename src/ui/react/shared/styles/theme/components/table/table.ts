import { defineStyleConfig } from "@chakra-ui/react";

export const Table = defineStyleConfig({
    baseStyle: {
        table: {
            borderRadius: '0rem',
        },
        th: {
            fontSize: '2px',
            textAlign: 'start',
            backgroundColor: 'gray.100',
        }
    },

    variants: {
        simple: ({ colorMode }) => ({
          th: {
            color: "gray.800",
            borderBottom: "0.1rem solid",
            borderColor: "gray.200",
          },
          tr: {
            borderColor: "gray.200",
            _hover: {
              bg: colorMode === "dark" ? "gray.600" : "gray.50",
            },
          },
          caption: {
            color: "pink",
          },
          tfoot: {
            tr: {
              "&:last-of-type": {
                th: {
                  borderBottomWidth: "100",
                },
              },
            },
          },
        }),
      },

    defaultProps: {
        colorScheme: 'gray',
        variant: 'simple',
        size:"sm"
      }
})


export const TableContainer = defineStyleConfig({
  baseStyle: {
    borderRadius: '2rem',
    border:"solid 1px #E2E8F0"

  },
  variants: {
    simple: {
      borderRadius: '2rem',
      border:"solid 1px #E2E8F0"

    },
    solid: {
      borderRadius: '2rem',
    border:"solid 1px #E2E8F0"

    },
  },
  defaultProps: {
    variant: 'solid',
  }

})