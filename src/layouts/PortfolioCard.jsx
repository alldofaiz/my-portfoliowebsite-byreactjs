import React from "react";

const PortfolioCard = (props) => {
  return (
    <div>
      <div className="max-w-sm border border-fontColor border-2 rounded-lg shadow bg-transparent  transition-transform duration-300 hover:scale-110 lg:mb-12 lg:-mt-10">
        <a href="#">
          <img
            className=" transform  rounded-md cursor-pointer p-5"
            src={props.image}
            alt="img"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-md text-justify font-bold tracking-tight text-gray-900 dark:text-white">
              {props.title}
            </h5>
          </a>
          <p className="mb-3 text-sm text-justify font-normal text-gray-700 dark:text-gray-400">
            {props.desc}
          </p>

          <div className=" flex flex-row gap-5 justify-center">
            <a
              href={props.website}
              target="_blank"
              rel="noopener noreferrer"
              className="  flex items-center px-3 py-3 text-sm font-medium text-center text-white bg-thirdColor rounded-lg hover:bg-primaryColor"
            >
              Link Website
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              ></svg>
            </a>
            <a
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className=" flex items-center px-3 py-3 text-sm font-medium text-center text-white bg-thirdColor rounded-lg hover:bg-primaryColor"
            >
              Link Github
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              ></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
