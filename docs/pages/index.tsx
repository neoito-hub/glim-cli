import React from "react";
import HomeNav from "../components/HomeNav/HomeNav";
import Spotlight from "../components/Spotlight/Spotlight";
import Head from "next/head";
import Features from "../components/Features/Features";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import Footer from "../components/Footer/Footer";

function index() {
  return (
    <>
      <Head>
        <title>Glim</title>
      </Head>
      <div>
        <HomeNav />
        <Spotlight />
        <Features />
        <CodeBlock />
        <Footer />
      </div>
    </>
  );
}

export default index;
