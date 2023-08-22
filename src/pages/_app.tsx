import { Amplify } from 'aws-amplify';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';
import { UserInfoProvider } from '~/infrastructure/context/userInfoContext';
import { GlobalStyles } from '~/shared/styles/globals';
import RootLayout from '~/ui/layouts/mainLayout';
import awsExports from '../aws-exports';
import '../shared/styles/global.css';

const isLocalhost = Boolean(
  typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))
);

// split redirect signin and signout strings into correct URIs
const [productionRedirectSignIn, localRedirectSignIn] = awsExports.oauth.redirectSignIn.split(',');
const [productionRedirectSignOut, localRedirectSignOut] = awsExports.oauth.redirectSignOut.split(',');

// use correct URI in the right env
const updatedAwsConfig = {
  ...awsExports,
  oauth: {
    ...awsExports.oauth,
    redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
    redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
  },
};

Amplify.configure(updatedAwsConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>BodyWeightTracker</title>
        <meta
          name="BodyWeightTracker"
          content="A simple project with Typescript, ReactJs, NextJs, Styled Components, tailwind and Clean Architecture with TDD "
        />
      </Head>
      <GlobalStyles />
      <div className="flex justify-center">
        <UserInfoProvider>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </UserInfoProvider>
      </div>
    </Fragment>
  );
}

export default MyApp;
