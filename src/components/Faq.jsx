import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Lineimg from "../assets/Line.png";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = ["How does it work?", "How does it work?", "How does it work?"];

  return (
    <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-2 gap-10 py-20 px-6 max-w-4xl mx-auto items-start">
      <div className="space-y-6">
        <div data-aos="fade-left" className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-blue-600 inline-block rounded-sm"></span>
          <h4 className="text-sm font-semibold">Frequently Asked Questions</h4>
          <img src={Lineimg} alt="" className="ml-2 h-1" />
        </div>

        <h2 data-aos="fade-down" className="text-3xl font-bold leading-snug">
          Have Questions? Look Here
        </h2>
        <p data-aos="fade-right" className="text-gray-500 max-w-md">
          Unleash the power of our platform with a multitude of powerful
          features, empowering you to achieve your goals.
        </p>

        <button
          data-aos="fade-up"
          className="inline-flex items-center px-5 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
          Contact Sales
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        {faqs.map((q, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl px-6 py-4 cursor-pointer shadow-sm"
            onClick={() => toggleAccordion(index)}>
            <div className="flex justify-between items-center text-gray-800 font-medium">
              <span>{q}</span>
              <ChevronDown
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {activeIndex === index && (
              <p className="text-gray-500 mt-2 text-sm">
                This is the answer to the question. You can replace this text
                with your actual content.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
