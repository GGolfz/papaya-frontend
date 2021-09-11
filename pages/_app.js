import { Fragment } from "react";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Papaya PogPog</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
