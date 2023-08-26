// import { useRouter } from 'next/router';
import { Icon } from '@aws-amplify/ui-react';
import { FunctionComponent, useState } from 'react';
import { InfoUser, InfoUserBody, InfoUserHistory } from '~/domain/entities';
import { getStatus } from '~/infrastructure/utils/bodyCalc';
import { UserBodyCalcHeader } from '~/ui/components/UserBodyCalcHeader';
import { UserBodyCalcList } from '~/ui/components/UserBodyCalcList';
import { UserInputHeader } from '~/ui/components/UserInputHeader';
import { UserInputList } from '~/ui/components/UserInputList';

type HistoryTempleteProps = {
  data?: InfoUserHistory;
  mgs?: string;
};

export const HistoryTemplete: FunctionComponent<HistoryTempleteProps> = ({ data, mgs = '' }) => {
  const [userData, setUserData] = useState<InfoUserHistory | undefined>(data);
  const handleDeleteItem = async (itemId: string, userId: string) => {
    const endpoint = '/api/userForm';

    const Jsonfy = JSON.stringify({ userId: userId, uniqueId: itemId });

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: Jsonfy,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();

    if (result.data === 'sucess') setUserData(userData?.filter((data) => data.uniqueId !== itemId));
  };

  function ShowUserInfo(userInfo: InfoUser & InfoUserBody, index: number) {
    return (
      <div key={`info-${index}`} className="flex items-center justify-center">
        <div className="ml-10 bg-stone-900/80 self-center w-fit py-4 rounded-lg">
          <UserInputList {...userInfo} />
          <UserBodyCalcHeader />
          <UserBodyCalcList key={`infoBody-${index}`} {...userInfo} withStatus={getStatus(index, userData)} />
        </div>
        <div
          onClick={(event) => {
            event.preventDefault();
            handleDeleteItem(userInfo.uniqueId, userInfo.userId);
          }}
          className="cursor-pointer transition ease-in-out flex items-center justify-center w-10 h-10 bgColor ml-1 rounded-full hover:bg-zinc-400"
        >
          <Icon viewBox={{ width: 15, height: 15 }}>
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
              fill="currentColor"
            />
            <path
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              fill="currentColor"
            />
          </Icon>
        </div>
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
        {mgs ? (
          <div className="gridHistory gap-4 overflow-y-scroll h-full items-center">{mgs}</div>
        ) : (
          <div className="gridHistory gap-4 overflow-y-scroll h-[54vh]">{userData?.map(ShowUserInfo)}</div>
        )}
      </main>
    </div>
  );
};
