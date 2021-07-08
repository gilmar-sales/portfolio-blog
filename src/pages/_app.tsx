import Head from 'next/head';
import { ChakraProvider, extendTheme, Box, Container } from '@chakra-ui/react';
import '@styles/highlight-dark.css';

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        color: 'black',
        padding: '0',
        margin: '0',
        fontFamily:
          'KoHo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      },
      button: {
        outline: 'none',
        focus: {
          outline: 'none',
        },
      },
      p: {
        marginBottom: '1rem',
      },
      code: {
        bg: '#eeeeee',
        color: 'blue.400',
        padding: '.25em .5em',
      },
      pre: {
        marginBottom: '1rem',
      },
      a: {
        color: 'purple.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=KoHo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>

        <link href="/global.css" rel="stylesheet"></link>
        <meta
          name="viewport"
          content=" width=device-width, initial-scale=1.0, user-scalable=no"
        />

        <title>gilmar sales</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <Box
          width="100vw"
          display={{ sm: 'block', md: 'flex' }}
          flexDirection="column"
          alignItems="center"
        >
          <Box width={{ sm: '100%', md: '1024px' }}>
            <Component key="app" {...pageProps} />
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
