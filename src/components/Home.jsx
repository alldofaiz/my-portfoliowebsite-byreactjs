import React from "react";
import img from "../assets/img/Hero.png";
import img1 from "../assets/img/home3.png";
import img2 from "../assets/img/home2.png";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" gap-2 min-h-screen relative flex flex-col justify-center lg:flex-col items-center lg:px-32 px-5 max-sm:px-3 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primaryColor via-secondColor to-secondColor relative">
      <div className="relative z-1 max-sm:mt-10  md:mt-10 ">
        <img width={500} src={img} alt="" className=" " />
      </div>

      <div className="flex flex-col items-center text-center w-full lg:w-2/3 space-y-5 z-1 cursor-default max-sm:mb-10 max-sm:z-10 md:z-10 ">
        <h1 className="text-4xl font-bold leading-tight text-fontColor hover:text-thirdColor hover:shadow-thirdColor transition duration-300">
          I'm Alldo Faiz Ramadhani
        </h1>

        <h1 className="text-center font-bold leading-tight text-cyan-500 hover:text-thirdColor hover:shadow-thirdColor transition duration-300">
          Front-End Developer | Back-End Developer | Full-Stack Developer
        </h1>
        <p className="text-indigo-100 text-center hover:text-thirdColor hover:shadow-thirdColor transition duration-300">
          "I am a recent graduate with significant skills in web development. I
          am currently seeking employment opportunities as a web developer and
          open to project collaborations. Below are buttons to contact me and
          view my CV."
        </p>
        <div className="flex flex-row gap-6 max-sm:flex-col max-sm:items-center">
          <a
            href="https://api.whatsapp.com/send?phone=6281314044804
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button title="HIRE ME" />{" "}
          </a>
          <a
            href="https://drive.google.com/file/d/1rfS6SXBPLeRbrMpyo53S12UNvtsFEK4l/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button title="DOWNLOAD MY CV" />
          </a>
        </div>
      </div>
      <div className="  justify-between">
        <div className=" animate-float absolute top-28 lg:mr-16 lg:right-10 lg:-z-1 max-sm:hidden md:-mt-10 md:-mr-10">
          <img width={300} src={img1} />
        </div>
        <div className="animate-float absolute -left-80 top-60  lg:-z-1 max-sm:-z-0 max-sm:mt-28 max-sm:mr-20 mt-5 md:-z-0 md:-mt-20 md:-ml-10">
          <img src={img2} alt="" width={650} />
        </div>
      </div>
    </div>
  );
};

export default Home;
