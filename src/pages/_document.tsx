import React from 'react';

import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

import { Config } from '../utils/Config';
import { GoogleAnalytics4 } from '../utils/GoogleAnalytics4';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={Config.locale}>
        <Head>
          <GoogleAnalytics4 />
          <link
            rel="preload"
            href="/assets/fonts/Neuzeit Grotesk Regular.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/ITC Avant Garde Pro Bold.woff"
            as="font"
            crossOrigin=""
          />
          <link rel="stylesheet" href="/fonts/fonts.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
