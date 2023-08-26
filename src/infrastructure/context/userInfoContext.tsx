import { Dispatch, SetStateAction, createContext, useState } from 'react';

type ContextType = {
  loggedUser: UserIcognito | null;
  setLoggedUser: Dispatch<SetStateAction<UserIcognito | null>>;
};

type UserIcognito = {
  attributes: {
    email: string;
    given_name: string;
    family_name: string;
    birthdate: string;
    height: string;
    age: string | number;
  };
  username: string;
};

export const UserInfoContext = createContext<ContextType>({
  loggedUser: null,
  setLoggedUser: () => {},
});

export function UserInfoProvider({ children }: { children: JSX.Element }) {
  const [loggedUser, setLoggedUser] = useState<UserIcognito | null>(null);

  return <UserInfoContext.Provider value={{ loggedUser, setLoggedUser }}>{children}</UserInfoContext.Provider>;
}
