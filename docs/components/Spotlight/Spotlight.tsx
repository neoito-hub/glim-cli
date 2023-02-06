import Image from "next/image";
import Link from "next/link";
import React from "react";

function Spotlight() {
  return (
    <div className="container mx-auto py-40">
      <div className="flex flex-row justify-between items-center">
        <div className="w-1/2">
          <div className="text-[72px] text-[#1DC989] font-medium">
            React Native CLI
          </div>
          <div className="text-[40px] text-[#1F477D] font-normal">
            for all your needs
          </div>
          <button className="bg-[#1DC989] hover:bg-[#4be9af] text-xl font-bold text-white w-[180px] py-3 rounded shadow-md mt-8">
            <Link href="/docs">Try Now</Link>
          </button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image src={"./code.png"} alt="" width={680} height={380} />
        </div>
      </div>
    </div>
  );
}

export default Spotlight;
