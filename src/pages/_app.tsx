import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { AppContextProvider } from '../context/AppContext';

import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
