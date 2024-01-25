import React from "react";

const ServicesCard = (props) => {
  return (
    <div className=" flex flex-col items-center bg-primaryColor  border-4 backdrop-blur-lg shadow-[0_5px_10px_rgb(0,0,0,0.2)] text-white hover:border-4 hover:border-thirdColor hover:text-white transition-all hover:-translate-y-2 w-full lg:w-1/4 py-5 gap-4 cursor-pointer rounded-md px-32 max-sm:px-0 ">
      <div>
        <span>{props.icon}</span>
      </div>
      <h2 className=" text-xl font-semibold text-center"> {props.title} </h2>
      <p> {props.desc} </p>
    </div>
  );
};

export default ServicesCard;
