import Head from "next/head";
import NavBar from "../NavBar";

interface PageProps {
  children: any;
}

export default function Page({ children }: PageProps) {
  return (
    <>
      <main className="px-6 py-4">
        <Head>
          <NavBar></NavBar>
        </Head>
        {children}
      </main>
    </>
  );
}
