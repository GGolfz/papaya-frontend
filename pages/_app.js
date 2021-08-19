import { Fragment } from "react";
import Head from 'next/head'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Papaya PogPog</title>
        <meta name="description" content="Papaya PogPog" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
