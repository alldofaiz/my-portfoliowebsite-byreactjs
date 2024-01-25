import React from "react";
import about from "../assets/img/about.png";

const Rocket = () => {
  return (
    <div className=" max-sm:mt-10 ">
      <img
        src={about}
        width={200}
        alt=""
        className="animate-float absolute left-3/4 -top-64 ml-28 max-sm:-z-0 max-sm:ml-20 max-sm:-top-10 max-sm:left-0"
      />
    </div>
  );
};

export default Rocket;
