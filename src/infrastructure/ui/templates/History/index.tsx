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
  // const router = useRouter();

  function ShowUserInfo(userInfo: InfoUser & InfoUserBody, index: number) {
    return (
      <div className="bg-slate-800 self-center w-fit p-4 rounded-lg" key={`info-${index}`}>
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
    <div className="mb-3">
      <main className="mainHistory">
        <div className="gridHistory sticky top-[72px] bg-cyan-700 rounded-md mb-2">{HeaderInfor()}</div>
        <div className="gridHistory gap-4 overflow-y-scroll h-full">{data?.map(ShowUserInfo)}</div>
        {mgs && <div className="gridHistory gap-4 overflow-y-scroll h-full">{mgs}</div>}
        {/* <button onClick={() => router.push('/userInfo')} className="self-center border-solid border p-1 rounded-lg mt-8">
          Return
        </button> */}
      </main>
    </div>
  );
};
