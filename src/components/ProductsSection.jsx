import React from "react";
import Dashboard from "../assets/product_dasboard.png";
import mobile from "../assets/mobile.png";
import Dots from "../assets/dotted-bg.png";
import LineImg from "../assets/Line.png";

//Features
const features = [
  {
    label: "Smart EPP",
    title: "Neque porro quisquam est qui dolorem ipsum quia dolor.",
    reverse: false,
  },
  {
    label: "HRMS",
    title: "Neque porro quisquam est qui dolorem ipsum quia dolor.",
    reverse: true,
  },
  {
    label: "ITSM",
    title: "Neque porro quisquam est qui dolorem ipsum quia dolor.",
    reverse: false,
  },
  {
    label: "ITAM",
    title: "Neque porro quisquam est qui dolorem ipsum quia dolor.",
    reverse: true,
  },
];

// Reusable block
const FeatureBlock = ({ reverse, title, label }) => (
  <div
    className={`flex flex-col relative z-10 lg:max-w-4xl m-auto ${
      reverse ? "lg:flex-row-reverse" : "lg:flex-row"
    } items-center justify-between mb-32`}>
    <div className="relative w-full lg:w-1/2 ">
      <div className=" bg-l-shape relative z-20 pt-10 pb-16   pl-10 pr-10 ">
        <img
          src={Dots}
          alt="Dotted pattern"
          className={`absolute top-28 left-64 w-56 z-0  hidden lg:block`}
        />

        <img
          src={Dashboard}
          alt="Dashboard"
          className="relative z-10 rounded-xl shadow-xl w-full"
        />

        <div
          className={`absolute top-28 left-5 lg:top-36 lg:left-4 flex gap-4 z-20`}>
          <img
            src={mobile}
            alt="Mobile 1"
            data-aos="fade-right"
            className="w-16 lg:w-28 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>

    <div
      className={`w-full lg:w-1/2 mt-0  lg:mt-0 ${
        reverse ? "lg:pr-16" : "lg:pl-16"
      }`}>
      <div data-aos="fade-left" className="flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-600 rounded-sm"></div>
        <span className="text-sm font-medium text-blue-600">{label}</span>
        <img src={LineImg} alt="line with dot" className="h-1 ml-3" />
      </div>

      <h3 data-aos="fade-down" className="text-2xl font-semibold mt-5 mb-4">
        {title}
      </h3>
      <p data-aos="fade-right" className="text-gray-600 text-xs mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit donec tempor sem
        massa sed condimentum elit dignissim ac nulla aliquam eu justo.
      </p>
      <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
        Learn More →
      </button>
    </div>
  </div>
);

const ProductsSection = () => {
  return (
    <section className="py-10 px-4 lg:px-0  relative overflow-hidden">
      <div className="text-center mb-20">
        <h2 data-aos="fade-up" className="lg:text-5xl text-2xl  font-bold">
          Easy Simple <span className="text-blue-600 italic">Products</span>
        </h2>
        <p
          data-aos="fade-down"
          className="text-gray-500 text-xs lg:text-sm mt-4 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
          sem massa, Do sed condimentum elit dignissim ac. Nulla aliquam lorem
          eu justo ultrices semper quis sit amet ex. Aliquam cursus volutpat
          fermentum.
        </p>
      </div>

      {features.map((feature, index) => (
        <FeatureBlock
          key={index}
          label={feature.label}
          title={feature.title}
          reverse={feature.reverse}
        />
      ))}
    </section>
  );
};

export default ProductsSection;
