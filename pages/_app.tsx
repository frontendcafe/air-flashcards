import type { AppProps } from "next/app";

import "@/modules/Auth/firebase";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
