import Head from "next/head";
import Title from "./Title";
import Link from "next/link";
import NavBar from "./NavBar";

export default function Page({ title, children }) {
  return (
    <>
      <Head>{title}</Head>
      <main className="px-6 py-4">
        <header>
          <NavBar></NavBar>
        </header>
        <Title>{title}</Title>
        {children}
      </main>
    </>
  );
}
