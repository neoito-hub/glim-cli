import React from "react";
import NavBar from "../components/NavBar/NavBar";
import RightAside from "../components/RightAside/RightAside";
import SearchBar from "../components/SearchBar/SearchBar";

function MainLayout({ children }: any) {
  return (
    <div className=" h-screen w-screen flex font-sans">
      <div className="min-w-[300px] bg-surface">
        <NavBar />
      </div>
      <div className=" w-full  mx-auto p-10 overflow-auto">
        <SearchBar />
        {children}
      </div>
      <div className="min-w-[300px] bg-white">
        <RightAside />
      </div>
    </div>
  );
}

export default MainLayout;
