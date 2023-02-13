import React from "react";
import Image from "next/image";
import Link from "next/link";

function HomeNav() {
  return (
    <div className="shadow-md sticky top-0 bg-white">
      <div className="flex justify-between items-center py-5 container mx-auto ">
        <div>
          <Image src={"./glimlogo.svg"} width={61} height={26} alt="" />
        </div>
        <div className="flex space-x-6 flex-row">
          <div>
            <a href="https://github.com/neoito-hub/glim-cli">Github</a>
          </div>
          <div>
            <Link href={"/docs"}>Docs</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNav;
