import NextDocument, { Head, Html, Main, NextScript } from "next/document";

import { ColorModeScript } from "@chakra-ui/react";

import { theme } from "../modules/shared/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="es">
        <Head>
          <title>App Flashcards</title>
          <meta name="description" content="Flashcards study app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
