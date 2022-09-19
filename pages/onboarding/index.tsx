import type { NextPage } from "next";
import Head from "next/head";

import OnboardingBody from "@/modules/shared/components/Onboarding/Onboarding";

const Onboarding: NextPage & { requiresAuthentication: boolean } = () => {
  return (
    <>
      <Head>
        <title>Flashcards</title>
        <meta name="description" content="Flashcards study app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <OnboardingBody />
      </div>
    </>
  );
};

Onboarding.requiresAuthentication = true;

export default Onboarding;
