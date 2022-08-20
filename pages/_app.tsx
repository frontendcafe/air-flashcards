import { NextComponentType, NextPageContext } from "next";

import { AuthGuard } from "@/modules/shared/AuthGuard";
import { theme } from "@/modules/shared/theme";
import { ChakraProvider } from "@chakra-ui/react";

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
    <ChakraProvider theme={theme}>
      <AuthGuard redirectUrl={redirectUrl} authenticationType={authenticationType}>
        <Component {...pageProps} />
      </AuthGuard>
    </ChakraProvider>
  );
};

export default MyApp;
