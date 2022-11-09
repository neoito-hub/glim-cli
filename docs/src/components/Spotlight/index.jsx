import React, { useEffect } from "react";
import Link from "@docusaurus/Link";
import "./styles.css";

import Lottie from "lottie-react";
import coding from "../../assets/coding.json";
export default function SpotLight() {
  return (
    <>
      <section className="w-full lg:py-20 py-10 bg-[#CE643A] flex items-center">
        <div className="container mx-auto flex items-center">
          <div className="w-full lg:w-1/2 ">
            <div>
              <div className="lg:text-6xl text-3xl md:text-5xl text-white font-bold mb-4 lg:text-left text-center">
                React Native CLI, <br /> What you looking for
              </div>
              <div className="flex items-center lg:items-start flex-col ">
                <Link
                  className="bg-white py-2 px-4 text-black  rounded-md font-bold appearance-none"
                  to="/intro"
                >
                  Explore Docs
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2 hidden lg:block">
            <div className="skew-x-[-10deg] w-[80%]">
              <Lottie animationData={coding} />
            </div>
          </div>
        </div>
      </section>
      <div className="bottomtriangle h-[50px] md:h-[100px] lg:h-[20vh]"></div>
      <div className="relative flex justify-center items-center">
        <div className="absolute bg-white rounded-xl shadow-lg flex px-5 py-3 gap-8 ">
          <div className="flex flex-col items-center ">
            <span className="text-xl font-bold">48,000</span>
            <span className="text-xs font-light">Github Stars</span>
          </div>

          <div className="flex flex-col items-center ">
            <span className="text-xl font-bold">5,64,75,384</span>
            <span className="text-xs font-light">NPM Installs</span>
          </div>
        </div>
      </div>
    </>
  );
}
