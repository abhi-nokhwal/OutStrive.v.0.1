import React from "react";
import bgImage from "../assets/contect-bg.png"; // replace with your image path

const Joinus = () => {
  return (
    <section className="max-w-4xl m-auto py-16 px-4 md:px-8">
      <div className="relative w-full h-[350px] bg-white  rounded-lg overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <img
          src={bgImage}
          alt="Join Our Journey"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* Text Content */}
        <div className="relative text-center space-y-6">
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-4xl font-bold text-gray-900">
            We're always looking for amazing
            <br />
            people to join our journey.
          </h2>
          <button className="px-6 py-2 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Joinus;
