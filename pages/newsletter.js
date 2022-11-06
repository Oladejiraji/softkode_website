import React from "react";
import Head from "next/head";
import { Footer, Header, NewsletterMain } from "../components";

const Newsletter = () => {
  return (
    <div>
      <Head>
        <title>SoftKodes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/custom.ico" />
      </Head>

      <Header />
      <NewsletterMain />
      <Footer />
    </div>
  );
};

export default Newsletter;
