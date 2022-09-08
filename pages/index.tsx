import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import nookies from "nookies";

import { verifyIdToken } from "@/firebaseAdminConfig";
import LogoutButton from "@/modules/Auth/components/LogoutButton";
import MyCollectionsPage from "@/modules/Collections/MyCollectionsPage";
import Menu from "@/modules/shared/components/Menu/Menu";

const Home: NextPage & { requiresAuthentication: boolean } = () => {
  return (
    <div>
      <Head>
        <title>Flashcards</title>
        <meta name="description" content="Flashcards study app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Menu />
        <h1>Welcome to Flashcards!</h1>
      </div>
      <LogoutButton />
      =======
      <MyCollectionsPage />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { uid } = token;
    // eslint-disable-next-line no-console
    console.log({ uid });
  } catch (error: any) {
    // TODO
  }
  return {
    props: {
      requiresAuthentication: true,
    },
  };
};

Home.requiresAuthentication = true;

export default Home;
