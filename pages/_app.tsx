import type { AppProps } from "next/app";
import "../firebase";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
