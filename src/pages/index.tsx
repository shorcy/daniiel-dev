import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Hero } from "../components/Hero";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from trpc" });

  return (
    <>
      <Head>
        <title>Daniel Pedersen - Fullstack Webdeveloper</title>
        <meta
          name="description"
          content="With a background as a web developer and a good eye to UI/UX. Daniel Pedersen create groth and is dedicated to frontend development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white">
        <Hero />
      </main>
    </>
  );
};

export default Home;
