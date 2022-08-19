import { NextComponentType, NextPageContext } from "next";

import { AuthGuard } from "@/modules/shared/AuthGuard";

import "@/firebaseConfig";

type AppProps = {
  pageProps: any;
  Component: NextComponentType<NextPageContext, any, {}> & {
    redirectIfAuthenticated: boolean;
    requiresAuthentication: boolean;
  };
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  let redirectUrl = "";
  let authenticationType = "noAuthentication";

  if (Component.redirectIfAuthenticated) {
    redirectUrl = "/";
    authenticationType = "redirectIfAuthenticated";
  } else if (Component.requiresAuthentication) {
    redirectUrl = "/login";
    authenticationType = "requiresAuthentication";
  }

  return (
    <AuthGuard redirectUrl={redirectUrl} authenticationType={authenticationType}>
      <Component {...pageProps} />
    </AuthGuard>
  );
};

export default MyApp;
