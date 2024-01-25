import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" flex flex-col lg:flex-row justify-between lg:px-32 px-5 bg-primaryColor p-5 ">
      <div className=" flex gap-10 max-sm:item-center">
        <a
          href="https://www.instagram.com/alldofaiz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram
            size={32}
            className="hover:text-fontColor text-thirdColor transition-all cursor-pointer"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/alldofaiz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={32}
            className=" hover:text-fontColor text-thirdColor transition-all cursor-pointer"
          />
        </a>
      </div>

      <div className=" flex flex-row items-center cursor-pointer mt-5 lg:mt-0 text-fontColor">
        <h1 className=" text-sm font-semibold">
          © Copyright <span className=" text-thirdColor">alldofaiz </span> 2024.
          All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
