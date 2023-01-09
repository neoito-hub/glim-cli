import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRoutes } from "./useRoutes";
import Home from "../../assets/icons/Home";

function NavBar() {
  const { routes } = useRoutes();
  return (
    <div className="font-base">
      <div className="px-3 py-10 flex justify-center ">
        <Image src={"./glimlogo.svg"} width={61} height={26} alt="" />
      </div>
      <div className="px-10">
        {routes.map((obj, index) => {
          return (
            <>
              <Link href={obj.routename} key={index}>
                <div
                  className={`py-3 flex space-x-2 hover:text-primaryGreen ${
                    obj.isActive ? "text-primaryGreen" : "text-textPrimary"
                  }`}
                >
                  <obj.icons />
                  <div>{obj.name}</div>
                </div>
              </Link>
              <div className=" border-l-2 ml-[10px]">
                {obj.isActive &&
                  obj.nestedRoute &&
                  obj.nestedRoute.map((obj, index) => {
                    return (
                      <Link href={obj.routename} key={index}>
                        <div
                          className={`py-2 hover:text-primaryGreen ml-5 ${
                            obj.isActive
                              ? "text-primaryGreen"
                              : "text-textPrimary"
                          }`}
                        >
                          <div>{obj.name}</div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;
