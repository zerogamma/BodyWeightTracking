// import { signIn, useSession } from 'next-auth/react';
import { Auth, Hub } from 'aws-amplify';
import { FunctionComponent, useContext, useEffect, useState } from 'react';
import { InfoInput } from '~/domain/entities';
import { UserInfoContext } from '~/infrastructure/context/userInfoContext';

type HomeTemplateProps = {
  data?: Array<InfoInput>;
};

type UserIcognito = {
  attributes: { email: string };
};

export const HomeTemplate: FunctionComponent<HomeTemplateProps> = () => {
  // const { data: session } = useSession();
  // const [user, setUser] = useState<UserIcognito | null>(null);
  const [loading, setLoading] = useState(false);
  const { loggedUser, setLoggedUser } = useContext(UserInfoContext);

  async function getUser() {
    const token = await Auth.currentAuthenticatedUser();
    // setUser(token);
    setLoggedUser(token);
  }
  //listen for sign in + out events, if neither are happening check if user exists
  useEffect(() => {
    Hub.listen('auth', ({ payload }) => {
      if (payload.event === 'signIn') {
        return getUser();
      }
      if (payload.event === 'signOut') {
        setLoggedUser(null);
        setLoading(false);
      }
    });
    getUser();
  }, []);

  return (
    <div className="px-8">
      <main className="main">
        <h1>Track your progress</h1>
        <h2 className="m-16 flex gap-2">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="login">
              {loggedUser && loggedUser ? (
                <div>{loggedUser.attributes.email}</div>
              ) : (
                <div>
                  Get started by
                  <button
                    className="loginBtn ml-2"
                    onClick={() => {
                      setLoading(true);
                      Auth.federatedSignIn();
                    }}
                  >
                    Sign in
                  </button>
                </div>
              )}
            </div>
          )}
        </h2>
      </main>
    </div>
  );
};
