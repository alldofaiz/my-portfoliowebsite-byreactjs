import React from "react";
import ServicesCard from "../layouts/ServicesCard";
import { BsDatabaseGear, BsGlobe } from "react-icons/bs";
import { GrMonitor } from "react-icons/gr";
import img from "../assets/img/services.png";
import img1 from "../assets/img/services2.png";
import img2 from "../assets/img/services1.png";

const Services = () => {
  const icon1 = <GrMonitor size={55} className=" text-thirdColor " />;
  const icon2 = <BsDatabaseGear size={55} className=" text-thirdColor " />;
  const icon3 = <BsGlobe size={55} className=" text-thirdColor " />;

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 max-sm:px-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-secondColor via-secondColor to-secondColor">
      <div className="animate-float flex absolute  lg:mt-0 lg:right-0 max-sm:hidden z-10 min-md:hidden">
        <img src={img2} alt="" width={250} />
      </div>

      <div className="lg:mt-16 max-sm:mt-10 md:mt-52 max">
        <h1 className="text-5xl font-semibold text-center text-fontColor lg:mb-8 lg:z-1 max-sm:z-0 max-sm:mb-10 max-sm:mt-20">
          My Services
        </h1>
      </div>
      <div className=" flex items-center justify-center max-sm:hidden">
        {" "}
        <img src={img} alt="" width={1500} className=" absolute" />
      </div>
      <div className=" flex flex-wrap items-center justify-center gap-5 mt-5 mb-10 lg:z-1 max-sm:-p-5 max-sm:z-0 min-md:mt-32 min-md:p-10">
        <ServicesCard icon={icon1} title="Front-End Web Development" desc=" " />
        <ServicesCard icon={icon2} title="Back-End Web Development" desc=" " />
        <ServicesCard
          icon={icon3}
          title="Full-Stack Web Development"
          desc=" "
        />
      </div>
      <div className="animate-float lg:mt-0 lg:-left-4  flex absolute max-sm:hidden min-md:hidden">
        <img src={img1} alt="" width={250} className="lg:mt-10" />
      </div>
    </div>
  );
};

export default Services;
