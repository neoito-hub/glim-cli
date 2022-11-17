import React from "react";
import SpotLight from "../components/Spotlight";
import Features from "../components/features";
import Starter from "../components/starter/Starter";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <SpotLight />
      <Starter />
      <Features />
      <Footer />
    </div>
  );
}
