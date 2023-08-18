import { signIn, useSession } from 'next-auth/react';
import { FunctionComponent } from 'react';
import { InfoInput } from '~/domain/entities';

type HomeTemplateProps = {
  data?: Array<InfoInput>;
};

export const HomeTemplate: FunctionComponent<HomeTemplateProps> = () => {
  const { data: session } = useSession();

  return (
    <div className="px-8">
      <main className="main">
        <h1>Track your progress</h1>
        <h2 className="m-16 flex gap-2">
          <div className="login">
            {session && session.user ? (
              <div>{session.user.name}</div>
            ) : (
              <div>
                Get started by
                <button className="loginBtn ml-2" onClick={() => signIn()}>
                  Sign in
                </button>
              </div>
            )}
          </div>
        </h2>
      </main>
    </div>
  );
};
