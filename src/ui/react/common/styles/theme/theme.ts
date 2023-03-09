import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import {Button} from './components/Button/button'
import {fonts, fontSizes, colors} from './foundations';
import { semanticTokens } from "./semanticTokens";
import {config} from "./config"
import { mode } from '@chakra-ui/theme-tools';
import { Table} from "./components/table/table";


const styles = {
  global: (props: StyleFunctionProps) => ({
    'html, body': {
      color:  mode('gray.700', '')(props),
      fontSize: '1rem',
      bg: mode('gray.50', '')(props),
    },

    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '2.7rem',
      fontWeight: '700',
    },
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    h5: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    
    a: {
      _hover: {
        textDecoration: 'none'
      }
    },

    li: {
      listStyleType: 'none'
    },

    _selection: {
      background:'pink.100'
    },

  }),


};





export const theme = extendTheme({
  semanticTokens,
  config,
  styles,
  fonts,
  fontSizes,
  colors, 
  components: {
    Button,
    Text,
    Table
  }
})