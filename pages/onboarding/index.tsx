import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import nookies from "nookies";

import { verifyIdToken } from "@/firebaseAdminConfig";

const Onboarding: NextPage & { requiresAuthentication: boolean } = () => {
  return (
    <div>
      <Head>
        <title>Flashcards</title>
        <meta name="description" content="Flashcards study app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Onboarding</h1>
      </div>
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

Onboarding.requiresAuthentication = true;

export default Onboarding;