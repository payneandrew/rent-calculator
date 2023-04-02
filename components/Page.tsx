import Head from "next/head";
import Title from "./Title";
import Link from "next/link";

export default function Page({ title, children }) {
  return (
    <>
      <Head>{title}</Head>
      <main className="px-6 py-4">
        <Title>
          <Link href="/">{title}</Link>
        </Title>
        {children}
      </main>
    </>
  );
}
