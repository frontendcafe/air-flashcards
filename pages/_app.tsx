import type { AppProps } from "next/app";

import "@/firebase";
import { AuthGuard } from "@/components/AuthGuard";

const MyApp = ({ Component, pageProps }: AppProps | any) => {
  
    let redirectUrl = null
    let authenticationType = null    

    if (Component.redirectIfAuthenticated) {
      redirectUrl = "/"
      authenticationType = "redirectIfAuthenticated"
    } else if (Component.requiresAuthentication) {
      redirectUrl = "/login"
      authenticationType = "requiresAuthentication"
    }

    return <AuthGuard redirectUrl={redirectUrl} authenticationType={authenticationType}>
      <Component {...pageProps}/>
    </AuthGuard>
};

export default MyApp;
