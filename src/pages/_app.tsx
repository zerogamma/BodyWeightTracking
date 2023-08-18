import { Amplify } from 'aws-amplify';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';
import { GlobalStyles } from '~/shared/styles/globals';
import awsExports from '../aws-exports';
import '../shared/styles/global.css';

Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>BodyWeightTracker</title>
        <link rel="shortcut icon" href="/img-512.png" />
        <link rel="apple-touch-icon" href="/img-512.png" />
        <meta
          name="BodyWeightTracker"
          content="A simple project with Typescript, ReactJs, NextJs, Styled Components, tailwind and Clean Architecture with TDD "
        />
      </Head>
      <GlobalStyles />
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />;
      </SessionProvider>
    </Fragment>
  );
}

export default MyApp;
