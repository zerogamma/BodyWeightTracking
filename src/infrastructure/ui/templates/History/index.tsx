// import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { InfoUser, InfoUserBody, InfoUserHistory } from '~/domain/entities';
import { UserBodyCalcHeader } from '~/infrastructure/ui/components/UserBodyCalcHeader';
import { UserBodyCalcList } from '~/infrastructure/ui/components/UserBodyCalcList';
import { UserInputHeader } from '~/infrastructure/ui/components/UserInputHeader';
import { UserInputList } from '~/infrastructure/ui/components/UserInputList';

type HistoryTempleteProps = {
  data?: InfoUserHistory;
  mgs?: string;
};

export const HistoryTemplete: FunctionComponent<HistoryTempleteProps> = ({ data, mgs = '' }) => {
  function ShowUserInfo(userInfo: InfoUser & InfoUserBody, index: number) {
    return (
      <div className="bg-slate-800 self-center w-fit py-4 rounded-lg" key={`info-${index}`}>
        <UserInputList {...userInfo} />
        <UserBodyCalcHeader />
        <UserBodyCalcList key={`infoBody-${index}`} {...userInfo} />
      </div>
    );
  }

  function HeaderInfor() {
    return <UserInputHeader />;
  }

  return (
    <div className="">
      <main className="mainHistory">
        <div className="gridHistory subColor sticky top-[72px] rounded-md mb-2">{HeaderInfor()}</div>
        <div className="gridHistory gap-4 overflow-y-scroll h-[54vh]">{data?.map(ShowUserInfo)}</div>
        {mgs && <div className="gridHistory gap-4 overflow-y-scroll h-full">{mgs}</div>}
      </main>
    </div>
  );
};
