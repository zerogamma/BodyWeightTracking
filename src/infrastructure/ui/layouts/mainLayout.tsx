import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Footer } from '~/infrastructure/ui/components/Footer';
import NavBar from '~/infrastructure/ui/components/NavBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';
  const [subTitle, setSubTitle] = useState<string>('');

  useEffect(() => {}, [pathname]);

  return (
    <main className="p-4 gap-6 w-full lg:w-[55%]">
      <section className="w-full flex gap-4 justify-start mb-6 p-2">
        <Head>
          <title>BodyWeightTracker</title>
          <meta name="description" content="Web App made with Next.js and hosted with AWS" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex flex-col gap-2 justify-center">
          <h2 className="mb-0 text-zinc-100 font-bold">
            Body Weight Tracking
            {subTitle && `: ${subTitle}`}
          </h2>
        </div>
      </section>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
