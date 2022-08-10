import type { AppProps } from "next/app";

import "@/firebase";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
