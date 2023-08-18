import type { GetStaticProps, NextPage } from 'next';
import { InfoUserHistory } from '~/domain/entities';
import { InfoUserHistoryFactory } from '~/infrastructure/factories';
import { HistoryTemplete } from '~/infrastructure/ui/templates/History';

const History: NextPage<{ data?: InfoUserHistory; mgs?: string }> = ({ data, mgs }) => {
  return <HistoryTemplete data={data} mgs={mgs} />;
};

export const getServerSideProps: GetStaticProps = async () => {
  const infoHistoryFactory = InfoUserHistoryFactory();
  const result = await infoHistoryFactory.handle();

  if (result.isLeft()) {
    return {
      props: {
        data: [],
        mgs: result.value,
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
