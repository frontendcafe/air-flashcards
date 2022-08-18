import type { NextPage } from "next";
import Head from "next/head";
import LogoutButton from "@/modules/Auth/components/LogoutButton";

const Home: NextPage & { requiresAuthentication: boolean } = () => {
  return (
    <div>
      <Head>
        <title>Flashcards</title>
        <meta name="description" content="Flashcards study app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Welcome to Flashcards!</h1>
      </div>
      <LogoutButton/>
    </div>
  );
};

Home.requiresAuthentication = true;

export default Home;
