import NavBar from '~/infrastructure/ui/components/NavBar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-tr overflow-x-hidden min-w-screen from-zinc-950 via-stone-900 to-neutral-950 flex min-h-screen flex-col items-center justify-between">
        <main className="p-4 py-24 gap-6 w-full lg:w-[55%]">
          <section className="w-full flex gap-4 justify-start mb-6 p-2">
            <div className="flex flex-col gap-2 justify-center">
              <h2 className="mb-0 text-zinc-100 font-bold">Body Weight Tracking</h2>
            </div>
          </section>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
