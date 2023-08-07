import Head from 'next/head';
import { FunctionComponent } from 'react';
import { InfoUser, InfoUserHistory } from '~/domain/entities';
import { Footer } from '~/ui/components/Footer';
import styles from '../Home/styles.module.css';

type HistoryTempleteProps = {
  data?: InfoUserHistory;
};

export const HistoryTemplete: FunctionComponent<HistoryTempleteProps> = ({ data }) => {
  function ShowUserInfo(userInfo: InfoUser, index: number) {
    return <div>{userInfo.date}</div>;
  }

  return (
    <div className="px-8">
      <Head>
        <title>NextJsChallenge</title>
        <meta name="description" content="Full Stack challenge with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className={styles.title}>Welcome to History</h1>

        <div className="gridHistory mt-4">{data?.map(ShowUserInfo)}</div>
      </main>

      <Footer />
    </div>
  );
};
