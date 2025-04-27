import React from "react";
import Aboutbg from "../assets/contect-bg.png";

function AboutBanner() {
  return (
    <div className="relative mt-20 flex justify-center items-center ">
      <img src={Aboutbg} alt="" className="bg-cover w-full h-auto" />
      <div className="absolute text-xl text-center lg:text-5xl   ">
        <h1 data-aos="fade-up">
          The AI Operating System for<br></br> Enterprises of the Future
        </h1>
      </div>
    </div>
  );
}

export default AboutBanner;
