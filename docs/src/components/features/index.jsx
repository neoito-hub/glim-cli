import React from "react";
function Features() {
  return (
    <div className="container py-20">
      <div>
        <p className="text-4xl font-semibold text-center ">Look what we have</p>
        <p className="text-sm text-center my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste
          magni, odio eaque aliquid perferendis qui iure tempora accusantium,
          nesciunt praesentium, incidunt maiores hic voluptate quidem impedit
          placeat ipsam deleniti!
        </p>
      </div>
      <div className="flex flex-wrap justify-around mt-4 ">
        {[1, 2, 3, 4].map((obj) => {
          return (
            <div className="lg:w-2/5 md:w-4/5 w-full p-6 hover:shadow-xl rounded-xl cursor-pointer">
              <p className="text-2xl font-semibold">Heading</p>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus voluptatem porro tempore itaque praesentium
                perspiciatis
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Features;
