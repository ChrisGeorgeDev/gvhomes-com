import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Head from "next/head";
import Navbar from "../components/MainNav";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel="icon" type="image/svg+xml" href="/img/assets/favicon.svg" />
        <link rel="icon" type="image/png" href="/img/assets/favicon.png" />
      </Head>
      <Navbar />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default MyApp;
