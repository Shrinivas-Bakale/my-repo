import React from "react";
import react from "../assets/favicon.ico";

const Timeline = () => {
  return (
    <>
      <div className="main ">
        <div className="slides flex gap-6 items-center">
          <div className="flex flex-col ">
            <div className="card flex flex-col items-center gap-3">
              <img src={react} alt="" />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, suscipit itaque illum porro voluptatibus
                repellendus nisi sequi odio, incidunt doloribus exercitationem
                dolorem consequatur?
              </span>
            </div>
          </div>
          <div className="flex flex-col clamp ">
            <img src={react} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="card flex flex-col items-center gap-3">
              <img src={react} alt="" />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, suscipit itaque illum porro voluptatibus
                repellendus nisi sequi odio, incidunt doloribus exercitationem
                dolorem consequatur?
              </span>
            </div>
          </div>
        </div>

        <div className="slides flex gap-6 items-center">
          <div className="flex flex-col">
            <div className="card flex flex-col items-center gap-3">
              <img src={react} alt="" />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, suscipit itaque illum porro voluptatibus
                repellendus nisi sequi odio, incidunt doloribus exercitationem
                dolorem consequatur?
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={react} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="card flex flex-col items-center gap-3">
              <img src={react} alt="" />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, suscipit itaque illum porro voluptatibus
                repellendus nisi sequi odio, incidunt doloribus exercitationem
                dolorem consequatur?
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
