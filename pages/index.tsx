import { ChangeEventHandler, FormEventHandler, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { signUp } from "firebase/authFile";

const Home: NextPage = () => {
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

export default Home;
