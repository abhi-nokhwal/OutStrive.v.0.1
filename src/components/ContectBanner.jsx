import React from "react";
import Contectbg from "../assets/contect-bg.png";

function ContectBanner() {
  return (
    <div className="relative mt-20 flex justify-center items-center ">
      <img src={Contectbg} alt="" className="bg-cover w-full h-auto" />
      <div data-aos="fade-up" className="absolute text-xl lg:text-6xl   ">
        <h1>Talk to Our Sales Executive</h1>
      </div>
    </div>
  );
}

export default ContectBanner;
