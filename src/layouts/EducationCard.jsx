import React from "react";

const EducationCard = (props) => {
  return (
    <div className=" flex flex-col  lg:flex-col  text-justify">
      <div className=" w-full lg:w-2/4 lg:py-2 ">
        <div className=" font-semibold text-secondColor">
          <h2 className=" mt-2"> {props.title} </h2>
        </div>
        <div className="">
          <p>{props.status}</p>
          <p>{props.date}</p>
        </div>
      </div>
      <div className="">
        <h2 className=" font-semibold mt-2 lg:mt-0 text-fourthColor">
          {props.certificate}
        </h2>
        <p className=" mb-5">{props.desc}</p>
        <div className=" bg-slate-500 w-full h-0.5 mt-2"></div>
      </div>
    </div>
  );
};

export default EducationCard;
