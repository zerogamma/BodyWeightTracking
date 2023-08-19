import type { GetStaticProps, NextPage } from 'next';
import { InfoInput } from '~/domain/entities';
import { InfoFactory } from '~/infrastructure/factories';
import { UserInfoTemplate } from '~/infrastructure/ui/templates/UserInfo';

const Track: NextPage<{ data?: InfoInput[] }> = ({ data }) => {
  return <UserInfoTemplate data={data} />;
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

export default Track;
