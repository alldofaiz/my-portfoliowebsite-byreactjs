import React from "react";
import EducationCard from "../layouts/EducationCard";
import line from "../assets/img/line3.png";

const Experience = () => {
  return (
    <div className=" flex flex-col justify-center lg:px-32 px-5 bg-primaryColor cursor-default">
      <img
        src={line}
        width={2000}
        className=" flex absolute lg:-mt-80 text-center lg:z-0 lg:right-0 max-sm:hidden min-md:hidden"
      />
      <h1 className=" text-fontColor text-center font-semibold text-4xl lg:mt-36 mb-8 lg:mb-16 max-sm:mt-28 max-sm:mb-10 lg:z-0 md:mt-36">
        My Experience
      </h1>

      <div className=" bg-white p-5 rounded-md lg:mb-16 max-sm:mb-10 lg:z-0 md:m-10">
        <EducationCard
          title="Azuranix Technology"
          status="Jakarta, Indonesia"
          date="August,2023 - Present"
          certificate="Web Developer Freelance"
          desc=" Boosted user engagement by 25% through the creation of visually appealing and responsive front-end websites using HTML, CSS, and Bootstrap. Developed and implemented secure and scalable databases for dynamic websites utilizing SQL, MongoDB, and Google Firebase, optimizing data storage and retrieval by 30%. Ensured seamless online presence and user accessibility by deploying websites with CPanel, achieving 99.9% uptime."
        />
        <EducationCard
          title="Digital Signal Processing Laboratory, Telkom University"
          status="Bandung, Indonesia"
          date="September,2022 - July,2023"
          certificate="Assistant Laboratory"
          desc=" Pioneered the development of a Fire Location Detection Device, reducing response time by 15% in simulated fires. Integrated FPGA-based Human Voice technology into a mobile app, streamlining fire detection and achieving a 95% accuracy rate."
        />
        <EducationCard
          title="Rakamin Academy"
          status="Online"
          date="April,2023 - May,2023"
          certificate="Reporting Engineer Intern"
          desc=" Expertly processed and manipulated data using SQL, resulting in a 20% improvement in data accuracy and efficiency. Created compelling data visualizations with advanced Excel skills, fostering informed decision-making within the team. Effectively communicated data analysis results to mentors and teammates, contributing to improved project outcomes."
        />
        <EducationCard
          title="Jubelio"
          status="Jakarta, Indonesia"
          date="August,2022 - September,2022"
          certificate="Research & Development Intern"
          desc="Enhanced user experience and data-driven decision-making by constructing an advanced data visualization for Jubelio's website using Apache Superset. Optimized platform analytics and ensured dynamic data connectivity by seamlessly integrating Apache Superset with Spreadsheets in real-time. Generated and processed simulated Jubelio sales data efficiently with SQL, contributing to robust testing and development initiatives."
        />
        <EducationCard
          title="PT Telkom Indonesia Witel Jakarta Pusat"
          status="Jakarta, Indonesia"
          date="June,2022 - July,2022"
          certificate="IT Support Intern"
          desc="Gathered and analyzed building information across Central Jakarta, uncovering valuable insights that resulted in a 10% increase in Indihome sales. Developed data-driven reports, presentations, and visualizations for the strategy analyst team, fostering informed decision-making and strategic alignment. Improved the sales approach by meticulously organizing data and enhancing precision in targeting potential customers."
        />
      </div>
    </div>
  );
};

export default Experience;
