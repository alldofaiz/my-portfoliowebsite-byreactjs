import React from "react";
import img1 from "../assets/img/portfolio(1).png";
import img2 from "../assets/img/portfolio(2).png";
import img3 from "../assets/img/portfolio(3).png";
import img4 from "../assets/img/portfolio(4).png";
import img5 from "../assets/img/portfolio(5).png";
import img6 from "../assets/img/portfolio(6).png";
import img7 from "../assets/img/portfolio(7).png";
import PortfolioCard from "../layouts/PortfolioCard";

const Portfolio = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-10 px-5 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primaryColor via-secondColor to-primaryColor cursor-default ">
      <h1 className=" text-fontColor text-center font-semibold text-4xl pt-24 lg:pt-24 lg:pt-16 pb-8 lg:mb-24 lg:mt-14 max-sm:mt-10 md:mt-10 ">
        Portfolio
      </h1>

      <div className=" flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0 min-md:mt-10 md:mb-10">
        <PortfolioCard
          image={img1}
          title={"The Steakery"}
          desc={"The Website is about Restaurant Steak."}
          website={"https://steakwebsite.vercel.app/"}
          github={"https://github.com/alldofaiz/steakwebsite"}
        />
        <PortfolioCard
          image={img2}
          title={"Portfolio Website"}
          desc={"My first portfolio website."}
          website={"https://alldofaiz-portfolio.vercel.app/"}
          github={"https://github.com/alldofaiz/vercel-portfolio"}
        />
        <PortfolioCard
          image={img3}
          title={"Roda Travel"}
          desc={"The Website is about Bus rent"}
          website={"https://rodatravel.vercel.app/"}
          github={"https://github.com/alldofaiz/rodatravel"}
        />
        <PortfolioCard
          image={img4}
          title={"Jogja Unveiled"}
          desc={"The Website is about traveling order."}
          website={"https://jogjaunveiled.glitch.me/"}
          github={"https://github.com/alldofaiz/JogjaUnveiled"}
        />
        <PortfolioCard
          image={img5}
          title={"Lawyer Website (Coming Soon)"}
          desc={
            "The website is about a lawyer's company but is still under development"
          }
          website={
            "https://drive.google.com/file/d/1u4fR77LeIAnklVQMe7mvPJjHvs9-5wXh/view?usp=sharing"
          }
          github={"#"}
        />
        <PortfolioCard
          image={img6}
          title={"Azuranix Technology 2023"}
          desc={"The Website is about my little company ver.1"}
          website={
            "https://drive.google.com/file/d/1S-RDhBUAG0dvf1acLYteH9XLbfF6C6Mx/view?usp=sharing"
          }
          github={"#"}
        />
        <PortfolioCard
          image={img7}
          title={"Azuranix Technology 2024"}
          desc={"The Website is about my little company ver.2"}
          website={
            "https://drive.google.com/file/d/1POWDrahO7MBy2DhTH4FIG_6lXVmKYnfS/view?usp=sharing"
          }
          github={"#"}
        />
      </div>
    </div>
  );
};

export default Portfolio;
