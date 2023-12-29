import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Footer, Navigation } from "@components/global";
import Head from "next/head";
import '../public/fonts/stylesheet.css';
import { basePath } from '../next.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ width: "100%"}}>
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
        <meta property="og:image" content={`${basePath}/twitter-card.jpg`}/>	
        <link rel="apple-touch-icon" href="logo512.jpg" />

        <meta name="twitter:card" content={`${basePath}/twitter-card.jpg`} />
        <meta name="twitter:title" content="A year of FRAMED" />
        <meta name="twitter:description" content="A collection of each year's summary of FRAMED screenshots, guides, and activity." />
        <meta name="twitter:image" content={`${basePath}/twitter-card.jpg`} />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
