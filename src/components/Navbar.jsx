import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import navbarimg from "../assets/img/navbar.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className=" fixed w-full  lg:z-50 max-sm:z-20 md:z-20 ">
      <div className="">
        <div className=" font-semibold flex flex-row p-5 md:px-32 px-5 bg-transparent backdrop-blur-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-center max-sm:justify-between">
          <div className=" text-fontColor flex flex-row items-center hover:text-brightColor transition-all cursor-pointer mr-6">
            <img src={navbarimg} width={48} alt="" />{" "}
          </div>
          <nav className=" text-fontColor hidden lg:flex flex-row items-center text-lg font-medium gap-6 ">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-fourthColor  transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-fourthColor transition-all cursor-pointer"
            >
              About Me
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-fourthColor transition-all cursor-pointer"
            >
              Service
            </Link>
            <Link
              to="education"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-fourthColor transition-all cursor-pointer"
            >
              Education
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-fourthColor transition-all cursor-pointer"
            >
              Experince
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-fourthColor transition-all cursor-pointer"
            >
              Portfolio
            </Link>
          </nav>
          <div className=" lg:hidden flex items-start">
            {menu ? (
              <AiOutlineClose
                size={28}
                onClick={handleChange}
                className=" text-white"
              />
            ) : (
              <HiOutlineMenuAlt1
                size={38}
                onClick={handleChange}
                className=" text-white "
              />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg-hidden flex flex-col absolute bg-primaryColor backdrop-blur-lg text-fontColor left-0 top-25 font-semibold text-2xl text-center z-10 pt-2 pb-2  w-full h-fit transition-transform duration-300 `}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="hover:text-thirdColor bg-primaryColor py-4 transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="hover:text-thirdColor bg-primaryColor py-4 transition-all cursor-pointer"
          >
            About Me
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="hover:text-thirdColor bg-primaryColor py-4 transition-all cursor-pointer"
          >
            Service
          </Link>
          <Link
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="hover:text-thirdColor bg-primaryColor py-4 transition-all cursor-pointer"
          >
            Education
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="hover:text-thirdColor bg-primaryColor py-4 transition-all cursor-pointer"
          >
            Experince
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="hover:text-thirdColor bg-primaryColor py-4 transition-all cursor-pointer"
          >
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
