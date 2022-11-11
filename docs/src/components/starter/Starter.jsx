import React from "react";
import "./style.css";

function Starter() {
  const copy = () => {
    navigator.clipboard.writeText("npx glim create-app GlimApp");
  };
  return (
    <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500  pt-8 pb-10">
      <div className="container flex flex-col justify-center items-center">
        <div className="text-3xl font-semibold text-white">Start with this</div>
        <div className="border border-white rounded-lg px-3 mt-4 font-mono text-white py-4 flex justify-between items-center gap-8">
          <span>{">"} npx glim create-app GlimApp</span>
          <button className="" onClick={copy}>
            <img src="img/clipboard.png" className="clipboard" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Starter;
