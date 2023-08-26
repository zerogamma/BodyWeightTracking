import type { GetServerSideProps, NextPage } from 'next';
import { InfoUserHistory } from '~/domain/entities';
import { InfoUserHistoryFactory } from '~/infrastructure/factories';
import { HistoryTemplete } from '~/ui/templates/History';

const History: NextPage<{ data?: InfoUserHistory; mgs?: string }> = ({ data, mgs }) => {
  return <HistoryTemplete data={data} mgs={mgs} />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const infoHistoryFactory = InfoUserHistoryFactory();
  const result = await infoHistoryFactory.handle(query.query ? (query.query as string) : '');

  if (result.isLeft()) {
    console.log(result.value);
    return {
      props: {
        data: [],
        mgs: result.value.message,
      },
    };
  }

  return {
    props: {
      data: result.value,
    },
  };
};

export default History;
