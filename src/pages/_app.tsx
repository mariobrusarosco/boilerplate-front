import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import AppStyles from 'styles/AppStyles';

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
      </Head>

      <AppStyles />

      <Component {...pageProps} />
    </>
  );
};

export default NextApp;
