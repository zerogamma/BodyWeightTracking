import type { GetStaticProps, NextPage } from 'next';
import { InfoInput } from '~/domain/entities';
import { InfoFactory } from '~/infrastructure/factories';
import { HomeTemplete } from '~/infrastructure/ui/templetes/Home';

import { Amplify } from 'aws-amplify';
import awsExports from '~/aws-exports';

Amplify.configure({ ...awsExports, ssr: true });

const Home: NextPage<{ data?: InfoInput[] }> = ({ data }) => {
  return <HomeTemplete data={data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const infoFactory = InfoFactory();
  const result = await infoFactory.handle();

  if (result.isLeft()) {
    return { notFound: true };
  }

  return {
    props: {
      data: result.value,
    },
  };
};

export default Home;
