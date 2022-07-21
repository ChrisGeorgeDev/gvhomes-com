import "../styles/globals.css";
import "swiper/css/bundle";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Head from "next/head";
import Navbar from "../components/MainNav";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { GTM_ID, pageview } from '../lib/gtm'

function MyApp({ Component, pageProps, router }) {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel="icon" type="image/svg+xml" href="/img/assets/favicon.svg" />
        <link rel="icon" type="image/png" href="/img/assets/favicon.png" />
      </Head>
      <Navbar />
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default MyApp;
