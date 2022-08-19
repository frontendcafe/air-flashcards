import { NextComponentType, NextPageContext } from "next";

import { AuthProvider } from "@/modules/Auth/context/AuthProvider";
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
    <AuthProvider>
      <AuthGuard redirectUrl={redirectUrl} authenticationType={authenticationType}>
        <Component {...pageProps} />
      </AuthGuard>
    </AuthProvider>
  );
};

export default MyApp;
