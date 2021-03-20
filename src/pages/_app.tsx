import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppStyles from 'styles/AppStyles';
import { mainTheme } from 'styles/themes/main-theme';

const NextApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Boilerplate Front End</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Boilerplate Front End" />
        <meta name="theme-color" content="#00ac95" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>

      <AppStyles />

      <ThemeProvider theme={mainTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default NextApp;
