import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel="icon" type="image/svg+xml" href="/img/assets/favicon.svg" />
        <link rel="icon" type="image/png" href="/img/assets/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
