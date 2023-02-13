import React from "react";

function CodeBlock() {
  return (
    <div className="container mx-auto py-20 px-10">
      <div className="text-[54px] font-bold text-center text-[#1F477D] px-10">
        Create your React Native App in record time with fully packed boiler
        plate
      </div>
      <div className="mt-16 mb-8 w-4/5 mx-auto h-[550px] bg-black rounded-lg text-white flex">
        <div className="w-1/2 p-10 flex flex-col justify-between">
          <div>
            <p className="text-2xl text-white">Test</p>
            <p className="text-white mt-8 text-lg leading-[25px]">
              Lorem ipsum dolor sit amet consectetur. Tortor elementum urna
              venenatis nam arcu a. In urna hac purus eget leo nulla. Massa cras
              cras ut diam orci sit faucibus. Sit volutpat suscipit tristique
              tellus dolor et maecenas. Tempus volutpat quisque hendrerit
              egestas non quis. Lorem ipsum dolor sit amet consectetur. Tortor
              elementum urna venenatis nam arcu a. In urna hac purus eget leo
              nulla.
            </p>
          </div>

          <div>
            <button className="bg-[#1DC989] w-[171px] py-3 rounded">
              Read the docs
            </button>
          </div>
        </div>
        <div className="w-1/2">giff</div>
      </div>
      <div className="w-28 mx-auto flex space-x-4">
        {[1, 2, 3, 4].map((obj, index) => {
          return (
            <div
              key={index}
              className="w-3 h-3 rounded-full bg-[#1F477D] cursor-pointer"
            />
          );
        })}
      </div>
    </div>
  );
}

export default CodeBlock;
