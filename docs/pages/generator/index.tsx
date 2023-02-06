import React from "react";
import MainLayout from "../../layout/MainLayout";

function generators() {
  return (
    <MainLayout>
      <div>
        <h2 className="mt-5">Generators</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum numquam
          perspiciatis nobis dolor. Iusto est fugiat facere corporis consequatur
          maiores rerum quisquam nesciunt quod optio! Officiis dolores atque
          dolore error.{" "}
        </p>
        <div className="flex flex-wrap w-full ">
          {[1, 2, 3].map((obj, index) => {
            return (
              <div className="w-1/2" key={index}>
                <div className="m-3 border border-[#EDF0F1] p-6 rounded-xl flex space-x-3 group hover:border-textSecondary cursor-pointer">
                  <div>
                    <div className="w-14 h-14 bg-surface group-hover:bg-[#DBF3EA] rounded mt-2"></div>
                  </div>
                  <div>
                    <div className="text-textPrimary text-2xl">Guides</div>
                    <div className="text-sm text-textPrimary">
                      Start here! Best practices, Setup steps, and other useful
                      information.
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export default generators;
