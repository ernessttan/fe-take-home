import { ChakraProvider, Flex, Progress } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { AppContextProvider } from '../context/AppContext';

import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setIsLoading(true));
    Router.events.on('routeChangeComplete', () => setIsLoading(false));
    Router.events.on('routeChangeError', () => setIsLoading(false));
  }, [Router]);

  return (
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        {isLoading && (
        <Flex w="100%">
          <Progress w="100%" color="primary" size="xs" isIndeterminate />
        </Flex>
        )}
        <Component {...pageProps} />
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
