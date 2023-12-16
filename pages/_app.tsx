import "../styles/globals.scss";
import '../public/fonts/stylesheet.css';
import type { AppProps } from "next/app";
import { Footer, Navigation } from "@components/global";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#272727" />

        <meta
          name="description"
          content="A collection of each year's summary of FRAMED screenshots, guides, and activity."
        />

        <meta property="og:title" content="A year of FRAMED"/>
        <meta property="og:description" content="A collection of each year's summary of FRAMED screenshots, guides, and activity."/>
        <meta property="og:image" content="twitter-card.jpg"/>	
        <link rel="apple-touch-icon" href="logo192.png" />
      </Head>
      <Navigation />
      <picture>
            <img
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="/images/Topography.svg"
              alt=""
            />
      </picture>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
