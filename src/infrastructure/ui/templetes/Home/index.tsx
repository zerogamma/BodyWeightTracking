import Head from 'next/head';
import { FunctionComponent } from 'react';
import { Info } from '~/domain/entities';
import { Card } from '~/ui/components/Card';
import { Footer } from '~/ui/components/Footer';

type HomeTempleteProps = {
  data?: Array<Info>;
};

export const HomeTemplete: FunctionComponent<HomeTempleteProps> = ({ data }) => {
  function ShowCard(card: Info, index: number) {
    return <Card key={`card-${index}`} {...card} />;
  }

  return (
    <div className="px-8">
      <Head>
        <title>NextJsChallenge</title>
        <meta name="description" content="Full Stack challenge with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1>Body Tracker</h1>

        <h2 className="m-16">Get started by editing{` `} filling information</h2>

        <div>{data?.map(ShowCard)}</div>
      </main>

      <Footer />
    </div>
  );
};
