import Head from 'next/head';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import { Info } from '~/domain/entities';
import { Card } from '~/infrastructure/ui/components/Card';
import styles from './styles.module.css';

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
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{` `}
          <code className={styles.code}>src/pages/index.tsx</code>
        </p>

        <div className={styles.grid}>{data?.map(ShowCard)}</div>
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com?utm_source=clean-arch-nextjs-starter" target="_blank" rel="noopener noreferrer">
          Powered by{` `}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};
