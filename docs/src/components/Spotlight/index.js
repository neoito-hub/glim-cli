import React from "react";
import Link from "@docusaurus/Link";
import "./styles.css";

import Lottie from "lottie-react";
import coding from "../../assets/coding.json";
export default function SpotLight() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="cont">
            <div className="left">
              <div>
                <div className="heading">
                  React Native CLI, <br /> What you looking for
                </div>
                <Link
                  className="button button--secondary button--lg"
                  to="/intro"
                >
                  Explore Docs
                </Link>
              </div>
            </div>
            <div className="right">
              <div className="lottie-block">
                <Lottie animationData={coding} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bottomtriangle"></div>
    </>
  );
}
