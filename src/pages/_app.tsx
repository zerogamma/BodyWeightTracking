import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';
import { GlobalStyles } from '~/shared/styles/globals';
import '../shared/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>NextJsChallenge</title>
        <link rel="shortcut icon" href="/img-512.png" />
        <link rel="apple-touch-icon" href="/img-512.png" />
        <meta
          name="NextJsChallenge"
          content="A simple project with Typescript, ReactJs, NextJs, Styled Components, tailwind and Clean Architecture with TDD "
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />;
    </Fragment>
  );
}

export default MyApp;
