import React from "react";
import NavBar from "../NavBar/NavBar";
import Link from "@docusaurus/Link";
import "./styles.css";

function SpotLight() {
  return (
    <div className="min-h-screen w-full relative">
      <NavBar />

      <div className="md:w-[300px] md:h-[300px] w-[100px] h-[100px] bg-gradient-to-r from-cyan-500 via-green-400 to-blue-500 rounded-full blur-3xl absolute blurcircleone opacity-80" />
      <div className="md:w-[300px] md:h-[300px] w-[100px] h-[100px] bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 rounded-full blur-3xl absolute blurcircletwo opacity-70" />
      <div className="flex flex-col justify-between h-screen">
        <div />
        <div className="container flex lg:py-10 py-32 items-center">
          <div className="md:w-1/2">
            <div className="md:text-7xl text-5xl font-bold">
              Reimagined CLI <br />
              for React Native
            </div>
            <div className="my-8">
              React Native Latest Architecture CLI along with a fully tested
              boilerplate, component/screen generators, and more! 🎉
            </div>
            <Link
              className="bg-green-500 px-6 py-3 rounded-lg hover:text-white text-white font-semibold "
              to="/intro"
            >
              Explore Docs
            </Link>
          </div>
          <div className="w-1/2  hidden md:flex justify-center">
            <img src="img/mobile.svg" alt="" />
          </div>
        </div>
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            {/* <img src="img/logo.svg" alt="" className="w-20 h-30" /> */}
            {/* <div className="text-4xl font-semibold ml-5">
            Build Your <br />
            Product
          </div> */}
          </div>
          <div className="flex space-x-4 items-center  py-10 ">
            <div className="min-w-[100px]">
              <div className="max-w-[200px] opacity-60 ">Fast Development</div>
            </div>
            <div className="min-w-[2px] h-[20px] bg-gray-400" />
            <div className="min-w-[100px]">
              <div className="max-w-[200px] opacity-60">
                Customizable Options
              </div>
            </div>
            <div className="min-w-[2px] h-[20px] bg-gray-400" />
            <div className="min-w-[100px]">
              <div className="max-w-[200px] opacity-60">
                Hard Tested Boilerplate
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpotLight;

// import React, { useEffect } from "react";
// import Link from "@docusaurus/Link";
// import "./styles.css";

// import Lottie from "lottie-react";
// import coding from "../../assets/coding.json";
// export default function SpotLight() {
//   return (
//     <>
//       <section className="w-full lg:py-20 py-10 bg-[#CE643A] flex items-center">
//         <div className="container mx-auto flex items-center">
//           <div className="w-full lg:w-1/2 ">
//             <div>
//               <div className="lg:text-6xl text-3xl md:text-5xl text-white font-bold mb-4 lg:text-left text-center">
//                 React Native CLI, <br /> What you looking for
//               </div>
//               <div className="flex items-center lg:items-start flex-col ">
//                 <Link
//                   className="bg-white py-2 px-4 text-black  rounded-md font-bold appearance-none"
//                   to="/intro"
//                 >
//                   Explore Docs
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="w-1/2 hidden lg:block">
//             <div className="skew-x-[-10deg] w-[80%]">
//               <Lottie animationData={coding} />
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="bottomtriangle h-[50px] md:h-[100px] lg:h-[20vh]"></div>
//       <div className="relative flex justify-center items-center">
//         <div className="absolute bg-white rounded-xl shadow-lg flex px-5 py-3 gap-8 ">
//           <div className="flex flex-col items-center ">
//             <span className="text-xl font-bold">48,000</span>
//             <span className="text-xs font-light">Github Stars</span>
//           </div>

//           <div className="flex flex-col items-center ">
//             <span className="text-xl font-bold">5,64,75,384</span>
//             <span className="text-xs font-light">NPM Installs</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
