import type { GetStaticProps, NextPage } from 'next';
import { InfoUserHistory } from '~/domain/entities';
// import { InfoUserHistoryFactory } from '~/infrastructure/factories';
import { HistoryTemplete } from '~/infrastructure/ui/templetes/History';

const History: NextPage<{ data?: InfoUserHistory }> = ({ data }) => {
  return <HistoryTemplete data={data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  // const infoHistoryFactory = InfoUserHistoryFactory();
  // const result = await infoHistoryFactory.handle();

  // if (result.isLeft()) {
  //   return { notFound: true };
  // }

  return {
    props: {
      data: [], //result.value,
    },
  };
};

export default History;
