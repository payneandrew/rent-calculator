import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import FormComponent from "@/components/form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rent Calculator</title>
      </Head>
      <main>
        <h1 className="text-2xl pb-4">Rent Calculator</h1>
        <FormComponent></FormComponent>
      </main>
    </>
  );
}
