import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { InfoUser } from '~/domain/entities';

const defaultValues = {
  weight: 0,
  neckSize: 0,
  waistSize: 0,
  height: 0,
  age: 0,
  name: '',
  date: '',
};

type ContextType = {
  userInfoData: InfoUser;
  setUserInfoData: Dispatch<SetStateAction<InfoUser>>;
};

export const UserInfoContext = createContext<ContextType>({
  userInfoData: defaultValues,
  setUserInfoData: () => {},
});

export function UserInfoProvider({ children }: { children: JSX.Element }) {
  const [userInfoData, setUserInfoData] = useState<InfoUser>(defaultValues);

  return <UserInfoContext.Provider value={{ userInfoData, setUserInfoData }}>{children}</UserInfoContext.Provider>;
}
