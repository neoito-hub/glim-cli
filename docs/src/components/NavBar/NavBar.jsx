import React from "react";
import Link from "@docusaurus/Link";

function NavBar() {
  return (
    <div className="shadow-sm fixed w-full  ">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div>
          <img src="img/logo.svg" alt="" className="w-10 h-10" />
        </div>
        <div className="flex space-x-4 items-center">
          <a
            href="https://github.com/neoito-hub/glim-cli"
            className="hover:text-black"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
