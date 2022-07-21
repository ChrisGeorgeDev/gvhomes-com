import { Html, Head, Main, NextScript } from 'next/document'
import { GTM_ID } from '../lib/gtm'

export default function Document() {

  return (
    <Html lang="en">
    <Head>

      </Head>
      <body>
      <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
      <a className="skip-to-content-link sr-only focus:not-sr-only" href="#main" > Skip to content </a>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}