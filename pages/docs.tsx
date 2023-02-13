import React from "react";
import Head from "next/head";
import MainLayout from "../layout/MainLayout";
import { docHomeBlock } from "../constants/docHome";
import Link from "next/link";

function Doc() {
  return (
    <>
      <Head>
        <title>GLim</title>
      </Head>
      <MainLayout>
        <div className="container w-full  mx-auto pt-8 ">
          <h2>Glim - all in one react native tool</h2>
          <p className="mb-5">
            glim aims to provide a hassle free react native templating and
            development with a fully featured boilerplate
          </p>
          <div className="flex flex-wrap w-full ">
            {docHomeBlock.map((obj, index) => {
              return (
                <div className="w-1/2" key={index}>
                  <Link href={obj.route}>
                    <div className="m-3 border border-[#EDF0F1] p-6 rounded-xl flex space-x-3 group hover:border-textSecondary cursor-pointer">
                      <div>
                        <div className="w-14 h-14 bg-surface group-hover:bg-[#DBF3EA] rounded mt-2 flex justify-center items-center text-2xl">
                          {obj.emoji}
                        </div>
                      </div>
                      <div>
                        <div className="text-textPrimary text-2xl">
                          {obj.heading}
                        </div>
                        <div className="text-sm text-textPrimary">
                          Start here! Best practices, Setup steps, and other
                          useful information.
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <h4 className="mt-4">Getting started</h4>
          <div className="mt-4">
            {[1, 2, 3].map((obj, index) => {
              return (
                <div key={index} className="flex space-x-2 mt-9">
                  <div>
                    <div className="w-8 h-8 bg-primaryGreen text-center flex justify-center items-center rounded-full text-sm text-white">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <div className="text-textPrimary text-xl font-medium">
                      Totally New Here?
                    </div>
                    <p>
                      Not sure what to track or why? Check out Segment&#39;s
                      Analytics Academy to learn more about the wide world of
                      analytics, including the what and why and some stories
                      about beautiful stacks.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Doc;
