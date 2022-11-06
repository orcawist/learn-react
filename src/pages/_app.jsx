import Head from "next/head";
import React from "react";
import { Layout } from "src/components/Layout";
import "src/styles/globals.css";
import { SWRConfig } from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
};

export default MyApp;
