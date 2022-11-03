import React from "react";
import "./style.css";

function Starter() {
  const copy = () => {
    navigator.clipboard.writeText("npx glim create-app GlimApp");
  };
  return (
    <div className="starter">
      <div className="container">
        <div className="starter-block">
          <div className="starter-head">Start with this</div>
          <div className="starter-card">
            {">"} npx glim create-app GlimApp
            <button className="code-copy" onClick={copy}>
              <img src="img/clipboard.png" className="clipboard" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Starter;
