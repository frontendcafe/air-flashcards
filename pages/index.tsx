import { ChangeEventHandler, FormEventHandler, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { signUp } from "@/firebase/auth";

const Home: NextPage & {requiresAuthentication: boolean} = () => {
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
    </div>
  );
};

Home.requiresAuthentication = true

export default Home;
