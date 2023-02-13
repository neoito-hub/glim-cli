import React from "react";

function Features() {
  const data = [
    {
      heading: "Powerful CLI",
      desc: " Start everything from terminal with few commands.",
    },
    {
      heading: "Feature packed Boilerplate",
      desc: " Start everything from terminal with few commands.",
    },
    {
      heading: "MultiPlatform Support",
      desc: " iOS, Android, web, windows. We got you covered",
    },
  ];
  return (
    <div className="container mx-auto py-10">
      <div className="text-center text-[54px] font-bold text-[#1F477D]">
        Features that <span className="text-[#1DC989]">you’ll ever need</span>
      </div>
      <div className="flex mt-10">
        {data.map((obj, index) => {
          return (
            <div key={index} className="w-1/3">
              <div className="border-2 border-[#EDF0F1] rounded-xl m-8 p-8 text-[#1F477D]">
                <div className="text-[22px] font-semibold">{obj.heading}</div>
                <div className="text-lg font-medium">{obj.desc}</div>
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
