// import { signIn, useSession } from 'next-auth/react';
import { FunctionComponent, useContext } from 'react';
import { InfoInput } from '~/domain/entities';
import { UserInfoContext } from '~/infrastructure/context/userInfoContext';

type HomeTemplateProps = {
  data?: Array<InfoInput>;
};

export const HomeTemplate: FunctionComponent<HomeTemplateProps> = () => {
  const { loggedUser } = useContext(UserInfoContext);

  return (
    <div className="px-8">
      <main className="main">
        <h1>Track your progress</h1>
        <h2 className="m-16 flex gap-2">
          <div className="login">
            <p>
              {loggedUser?.attributes.given_name} {loggedUser?.attributes.family_name}
            </p>
          </div>
        </h2>
      </main>
    </div>
  );
};
