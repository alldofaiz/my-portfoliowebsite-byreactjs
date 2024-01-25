import React from "react";
import SkillCard from "../layouts/SkillCard";

import about2 from "../assets/img/about2.png";
import { ImHtmlFive2, ImCss3 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import Rocket from "../layouts/Rocket";

const About = () => {
  const skill1 = "w-11/12";
  const skill2 = "w-11/12";
  const skill3 = "w-9/12";
  const skill4 = "w-9/12";
  const skill5 = "w-11/12";
  const skill6 = "w-11/12";
  const skill7 = "w-9/12";

  return (
    <div className="min-h-screen relative flex flex-col justify-around items-center lg:-mt-0 lg:px-32 px-5 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-secondColor via-secondColor to-secondColor cursor-default">
      <div className=" mb-10 max-sm:mt-10  ">
        <Rocket />
      </div>

      <div className="lg:mt-16 lg:mb-10 max-sm:mt-10 max-sm:mb-5 md:mt-28 max-sm:z-10">
        <h1 className="text-5xl font-semibold text-center text-fontColor ">
          About Me
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row z-1 max-sm:mb-10">
        <div className="flex-1 mb-10">
          <img src={about2} width={400} alt="" className="relative mx-auto" />
          <h2 className="text-2xl font-semibold text-fontColor mt-4 ">
            Here is my personal biodata
          </h2>
          <p className="mt-4 lg:mt-2 text-cyan-500 lg:mr-24 text-justify">
            My full name is Alldo Faiz Ramadhani. I was born in Madiun on
            December 14, 2000. Currently, my educational status is a graduate in
            Telecommunication Engineering, with a graduation year of 2023 and a
            GPA of 3.35/4.00. I have a strong interest in both Front-End and
            Back-End Web Development.
          </p>
        </div>
        <div className="flex-1 text-fontColor max-sm:mb-10 lg:mb-10">
          <h2 className="text-3xl font-semibold mb-10">My Skills</h2>
          <div>
            <SkillCard
              title={
                <>
                  <ImHtmlFive2 className="inline-block mr-4 w-18 text-orange-500" />
                  HTML
                </>
              }
              width={skill1}
              val="95%"
            />
            <SkillCard
              title={
                <>
                  <ImCss3 className="inline-block mr-4 w-18 text-blue-500" />
                  CSS
                </>
              }
              width={skill2}
              val="95%"
            />
            <SkillCard
              title={
                <>
                  <IoLogoJavascript className="inline-block mr-4 w-18 text-yellow-500" />
                  Javascript
                </>
              }
              width={skill3}
              val="75%"
            />
            <SkillCard
              title={
                <>
                  <GrReactjs className="inline-block mr-4 w-18 text-blue-300" />
                  React.js
                </>
              }
              width={skill4}
              val="75%"
            />
            <SkillCard
              title={
                <>
                  <BsFillBootstrapFill className="inline-block mr-4 w-18 text-purple-400" />
                  Bootstrap
                </>
              }
              width={skill5}
              val="95%"
            />
            <SkillCard
              title={
                <>
                  <SiTailwindcss className="inline-block mr-4 w-18 text-sky-500" />
                  Tailwind.css
                </>
              }
              width={skill6}
              val="95%"
            />
            <SkillCard
              title={
                <>
                  <FaPython className="inline-block mr-4 w-18 text-yellow-300" />
                  Python (Flask & Django)
                </>
              }
              width={skill7}
              val="75%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
