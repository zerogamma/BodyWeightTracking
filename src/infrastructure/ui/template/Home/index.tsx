import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import { FunctionComponent } from 'react';
import { InfoInput } from '~/domain/entities';
import { Footer } from '~/infrastructure/ui/components/Footer';

type HomeTemplateProps = {
  data?: Array<InfoInput>;
};

export const HomeTemplate: FunctionComponent<HomeTemplateProps> = () => {
  const { data: session } = useSession();

  return (
    <div className="px-8">
      <Head>
        <title>BodyWeightTracker</title>
        <meta name="description" content="Web App made with Next.js and hosted with AWS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1>Body Weight Tracker</h1>
        <h2 className="m-16 flex gap-2">
          <div className="login">
            {session && session.user ? (
              <>
                Welcome {session.user.name}
                {` `}
                <button onClick={() => signOut()}>Sign out</button>
              </>
            ) : (
              <div>
                Get started by {` `}
                <button onClick={() => signIn()}>Sign in</button>
              </div>
            )}
          </div>
        </h2>
      </main>

      <Footer />
    </div>
  );
};
