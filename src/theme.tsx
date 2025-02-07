import { extendTheme } from '@chakra-ui/react';

const fonts = { mono: '\'Menlo\', monospace' };

const theme = extendTheme({
  breakpoints: {
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
    '2xl': '96em',
    '3xl': '112em',
    '4xl': '128em',
  },
  semanticTokens: {
    colors: {
      siteBackground: {
        default:
          'linear-gradient(180deg, rgba(152, 164, 230, 0.2) 0%, rgba(217, 217, 255, 0) 31.09%),linear-gradient(0deg, #F8F8FC, #F8F8FC)',
        _dark: 'linear-gradient(180deg, #141624 0%, #090A10 1%)',
      },
    },
    radii: {
      button: '12px',
    },
  },
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colors: {
    primary: '#4980F8',
    primary75: '#5b8cf8',
    black: '#16161D',
    navigation: '#10121F',
  },
  fonts,
  styles: {
    global: {
      html: {
        minHeight: '100vh',
        background: 'siteBackground',
      },
      '#__next': {
        minHeight: '100%',
      },
      body: {
        padding: 0,
        margin: 0,
        minHeight: '100%',
        width: '100%',
        background: 'siteBackground !important',
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
  },
});

export default theme;
