import React from "react";
import Dotimg from "../assets/dot_shape.png";

const HomeBanner = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden justify-center px-6">
      <img
        src={Dotimg}
        alt="dots"
        data-aos="fade-right"
        className="absolute lg:top-[55%] lg:left-[12%] top-[48%] left-[8%] w-20 md:w-32 z-10"
      />

      <img
        src={Dotimg}
        alt="dots"
        data-aos="fade-left"
        className="absolute lg:top-[20%] lg:right-[17%] top-[15%] right-[8%] w-20 md:w-32 z-10"
      />

      <div className="text-center max-w-4xl z-20">
        <h1
          data-aos="zoom-in-up"
          className="text-1xl md:text-6xl font-bold text-black leading-tight">
          Define & deliver experiences <br />
          that <span className="text-blue-600 italic">developers love</span>
        </h1>
        <p
          data-aos="fade-down"
          className="mt-6 text-gray-700 text-xs md:text-sm px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
          sem massa, sed condimentum elit dignissim ac. <br></br> Nulla aliquam
          lorem eu justo ultrices semper quis sit amet ex. Aliquam cursus
          volutpat fermentum.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button
            data-aos="fade-down-right"
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
            Get Started
          </button>
          <button
            data-aos="fade-down-left"
            className="border border-gray-400 text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
