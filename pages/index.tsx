import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import FormComponent from "@/components/Form";
import Page from "@/components/Page";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <Page title="Rent Calculator">
      <FormComponent></FormComponent>
    </Page>
  );
}
