import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { theme } from './shared/styles/theme/theme';
import App from './App';
import './shared/styles/app.css';
import { ToastProvider } from './shared/contexts/toast/ToastProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <ToastProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ToastProvider>
  </ChakraProvider>
)
