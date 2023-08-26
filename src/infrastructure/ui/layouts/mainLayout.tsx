import { Auth, Hub } from 'aws-amplify';
import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { UserInfoContext } from '~/infrastructure/context/userInfoContext';
import { SignIn } from '~/infrastructure/ui/templates/SignIn';
import { Background } from '~/ui/components/Background';
import { Footer } from '~/ui/components/Footer';
import NavBar from '~/ui/components/NavBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { setLoggedUser, loggedUser } = useContext(UserInfoContext);

  const getUserExtraData = async (response: { username: string }) => {
    if (!response) return {};
    const endpoint = '/api/userForm?';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const responseData = await fetch(
      endpoint + new URLSearchParams({ query: response.username.replace('google_', '') }),
      options
    );
    const result = await responseData.json();
    return result.data ? JSON.parse(result.data) : [];
  };

  async function getUser() {
    const token = await Auth.currentAuthenticatedUser().then(async (response) => {
      const extra = await getUserExtraData(response);
      return { ...response, attributes: { ...response.attributes, ...extra } };
    });
    setLoggedUser({ ...token, username: token.username.replace('google_', '') });
  }

  //listen for sign in + out events, if neither are happening check if user exists
  useEffect(() => {
    Hub.listen('auth', ({ payload }) => {
      if (payload.event === 'signIn') {
        return getUser();
      }
      if (payload.event === 'signOut') {
        setLoggedUser(null);
      }
    });
    getUser();
  }, []);

  return (
    <main className="p-4 gap-6 w-full lg:w-[55%]">
      <section className="w-full flex gap-4 justify-start mb-6 p-2">
        <Head>
          <title>BodyWeightTracker</title>
          <meta name="description" content="Web App made with Next.js and hosted with AWS" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Background />
        <div className="flex flex-col gap-2 justify-center">
          <h2 className="mb-0 text-zinc-100 font-bold">Body Weight Tracking</h2>
        </div>
      </section>
      <NavBar />
      {!loggedUser ? <SignIn /> : children}
      <Footer />
    </main>
  );
}
