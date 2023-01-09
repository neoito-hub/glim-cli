import Head from "next/head";
import React from "react";

function overview() {
  return (
    <>
      <Head>
        <title>Glim | Overview</title>
      </Head>
      <div className="p-10">
        <h2>Sources</h2>
        <h4>What is a Source?</h4>
        <p>
          In Segment, you create a source (or more than one!) for each website
          or app you want to track. While it's not required that you have a
          single Source for each server, site or app, we highly recommend
          creating a Source for each unique source of data.
        </p>
        <p>
          You can create new sources using the button in the workspace view.
          Each source you create has a write key, which is used to send data to
          that source. For example, to load analytics.js, the Segment JavaScript
          library on your page, the snippet on the Quickstart Guide includes:
        </p>
      </div>
    </>
  );
}

export default overview;
