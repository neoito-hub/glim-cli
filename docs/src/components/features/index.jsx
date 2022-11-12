import React from "react";
import "./styles.css";
function Features() {
  const data = [
    {
      head: "Easy to Use",
      desc: "Start quickly with built-in navigators that deliver a seamless out-of-the-box experience.",
    },
    {
      head: "Components built for iOS and Android",
      desc: "Platform-specific look-and-feel with smooth animations and gestures.",
    },
    {
      head: "Completely customizable",
      desc: "If you know how to write apps using JavaScript you can customize any part of React Navigation.",
    },
    {
      head: "Extensible platform",
      desc: "React Navigation is extensible at every layer— you can write your own navigators or even replace the user-facing API.",
    },
  ];
  return (
    <div className="relative">
      <div className="md:w-[300px] md:h-[300px] w-[100px] h-[100px] bg-gradient-to-r from-[#86fde8] to-[#acb6e5] rounded-full blur-3xl absolute blurcirclethree" />
      <div className="container py-20">
        <div className=" flex justify-center flex-col items-center">
          <p className="text-4xl font-semibold text-center ">
            Look what we have
          </p>
          <p className="text-base text-center my-3 w-4/5 ">
            Simple, Lightweight and Scalable.Discover the best React Native
            boilerplate for your project with a really simple architecture based
            on Separation of Concerns, and let the community build around it.
          </p>
        </div>
        <div className="flex flex-wrap justify-around mt-4 ">
          {data.map((obj) => {
            return (
              <div className="lg:w-2/5 md:w-4/5 w-full p-6 mt-6 rounded-xl cursor-pointer">
                <img src="img/logo.svg" className="w-10 h-10 my-4" />
                <p className="text-3xl font-semibold">{obj.head}</p>
                <p className="text-base">{obj.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Features;
