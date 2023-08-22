import { Auth, Hub } from 'aws-amplify';
import Head from 'next/head';
// import { usePathname } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { UserInfoContext } from '~/infrastructure/context/userInfoContext';
import { Background } from '~/ui/components/Background';
import { Footer } from '~/ui/components/Footer';
import NavBar from '~/ui/components/NavBar';
import { SignIn } from '~/ui/components/SignIn';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { setLoggedUser, loggedUser } = useContext(UserInfoContext);

  async function getUser() {
    const token = await Auth.currentAuthenticatedUser();
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
