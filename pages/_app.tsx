import type { AppProps } from "next/app";

import "@/firebaseConfig";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
