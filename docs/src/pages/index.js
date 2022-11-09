import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import SpotLight from "../components/Spotlight";
import Features from "../components/features";
import Starter from "../components/starter/Starter";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <SpotLight />
      <Features />
      <Starter />
    </div>
  );
}
