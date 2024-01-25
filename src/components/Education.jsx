import React from "react";
import EducationCard from "../layouts/EducationCard";
import img from "../assets/img/line4.png";

const Education = () => {
  return (
    <div className=" flex flex-col justify-center lg:px-32 px-5 bg-primaryColor cursor-default">
      <div className=" flex absolute lg:-mb-24 lg:-z-0 lg:-ml-36 max-sm:hidden ">
        {" "}
        <img src={img} width={1200} alt="" />
      </div>
      <h1 className=" text-center font-semibold text-4xl mt-24 lg:mt-32 mb-8 lg:mb-16 text-fontColor max-sm:mt-28  md:mt-36">
        My Education
      </h1>
      <div></div>

      <div className=" bg-white p-10 rounded-md max-sm:mb-16 mt-14 lg:z-10 md:m-10">
        <EducationCard
          title="Telkom University"
          status="Student"
          date="August,2019 - August,2023"
          certificate="Telecommunication Bachelor Degree"
          desc=" I am a graduate in Telecommunication Engineering with a commendable academic record, holding a Cumulative Grade Point Average (GPA) of 3.35/4.00. In my final project, I took on the role of a Mobile Developer using Flutter to develop a Disaster Location Detection Tool based on a Mobile Application. Additionally, I handled the development of the server/backend using Python. This project not only strengthened my understanding of FPGA technology but also enriched my skills in mobile application development and backend programming, demonstrating my dedication to innovation and cutting-edge technology in the telecommunications industry.
          !"
        />
        <EducationCard
          title="Full Stack Web Developer"
          status="Studi Independent"
          date="February,2023 - June,2023"
          certificate="MSIB Certification by LearningX"
          desc="Acquired proficiency in both front-end (HTML, CSS, JavaScript, Bootstrap) and back-end (Python, Flask) development through comprehensive training. Successfully demonstrated acquired skills by independently constructing a fully functional web application as a culminating project, showcasing a practical understanding of web development principles and technologies."
        />
      </div>
    </div>
  );
};

export default Education;
