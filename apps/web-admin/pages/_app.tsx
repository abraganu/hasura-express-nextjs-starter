import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@clinica/web/utils';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

function CustomApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  return (
    <>
      <Head>
        <title>Welcome to web-admin!</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </MantineProvider>
    </>
  );
}

export default CustomApp;
