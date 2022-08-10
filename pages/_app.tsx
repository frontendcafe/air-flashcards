import type { AppProps } from "next/app"

import "../firebase"

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default MyApp
