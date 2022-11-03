import React from "react";
import "./style.css";
function Features() {
  return (
    <div className="container feat">
      <div>
        <p className="feat-head"> Look what we have</p>
        <p className="feat-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste
          magni, odio eaque aliquid perferendis qui iure tempora accusantium,
          nesciunt praesentium, incidunt maiores hic voluptate quidem impedit
          placeat ipsam deleniti!
        </p>
      </div>
      <div className="feat-block">
        {[1, 2, 3, 4].map((obj) => {
          return (
            <div className="feat-area">
              <p className="feat-headings">Heading</p>
              <p>
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
