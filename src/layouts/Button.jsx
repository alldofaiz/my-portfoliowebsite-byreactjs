import React from "react";
import { TbClick } from "react-icons/tb";

const Button = (props) => {
  return (
    <div>
      <button className=" a flex flex-row justify-center items-center gap-2 bg-secondColor text-fontColor border-4 border-cyan-500 hover:bg-cyan-500 hover:text-primaryColor  transition-all px-5 py-3 rounded-full cursor-pointer">
        {props.title}
        <TbClick />
      </button>
    </div>
  );
};

export default Button;
