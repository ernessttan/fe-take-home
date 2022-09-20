import { ChakraProvider } from '@chakra-ui/react';
import { AppContextProvider } from '../context/AppContext';

import theme from '../theme'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
