import type { GetStaticProps, NextPage } from 'next';
import { HomeTemplate } from '~/ui/templates/Home';

const Home: NextPage<{ data?: [] }> = ({ data }) => {
  return <HomeTemplate data={data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: [],
    },
  };
};

export default Home;
