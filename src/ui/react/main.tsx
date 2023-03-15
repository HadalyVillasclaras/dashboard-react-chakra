import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { theme } from './common/styles/theme/theme';
import App from './App';
import './common/styles/app.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)
