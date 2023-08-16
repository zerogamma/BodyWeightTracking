import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';
import { GlobalStyles } from '~/shared/styles/globals';
import '../shared/styles/global.css';

import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';

Amplify.configure({ ...awsExports, ssr: true });

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
