import React from "react";

function Features() {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center text-[54px] font-bold text-[#1F477D]">
        Features that <span className="text-[#1DC989]">you’ll ever need</span>
      </div>
      <div className="flex mt-10">
        {[1, 2, 3].map((obj, index) => {
          return (
            <div key={index} className="w-1/3">
              <div className="border-2 border-[#EDF0F1] rounded-xl m-8 p-8 text-[#1F477D]">
                <div className="text-[22px] font-semibold">Powerful CLI</div>
                <div className="text-lg font-medium">
                  Start everything from terminal with few commands.
                </div>
                <button className="bg-[#1DC989] mt-5 w-[124px] py-2 text-white rounded text-sm">
                  Know more
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Features;
