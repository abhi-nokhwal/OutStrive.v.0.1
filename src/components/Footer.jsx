import React from "react";
import logo from "../assets/Outstrive-white.png";
import bannerGuy from "../assets/ctaThumb.png";

const Footer = () => {
  return (
    <div className="bg-white relative ">
      {/* OUter Card */}
      <div data-aos="fade-down" className="relative z-20   px-4">
        <div className="max-w-5xl mx-auto  -mb-16 bg-[#0561FC] rounded-[2rem] px-6 md:px-12 py-10 md:py-7 shadow-xl overflow-visible flex flex-col md:flex-row items-center justify-between gap-6 relative">
          {/* banner guy */}
          <div className="absolute -top-10 md:-top-21 left-1/2 md:left-10 transform -translate-x-1/2 md:translate-x-0 z-30">
            <img
              src={bannerGuy}
              alt="Person with laptop"
              className="w-40 md:w-48"
            />
          </div>

          <div className="mt-20 md:mt-0 md:ml-72 text-center md:text-left flex-1">
            <h2 className="text-white text-2xl md:text-4xl font-bold leading-snug">
              Stay Connected With <br /> Cutting Edge IT
            </h2>
          </div>

          <div>
            <button className="bg-white text-[#0561FC] font-semibold rounded-full px-6 py-3 shadow-md hover:bg-gray-100 transition">
              Request a Demo
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white pt-28 md:pt-28 pb-10 bottom-0  relative z-10 ">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-8">
          <img src={logo} alt="Logo" className="h-10 mx-auto" />
          <div className="border-t border-gray-700 w-full mb-6"></div>

          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-300">
            <a href="/" className="hover:text-white">
              {" "}
              Home
            </a>
            <span className="text-gray-500">|</span>
            <a href="/yerm" className="hover:text-white">
              Terms & Condition
            </a>
            <span className="text-gray-500">|</span>
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <span className="text-gray-500">|</span>
            <a href="/sitmap" className="hover:text-white">
              Sitemap
            </a>
            <span className="text-gray-500">|</span>
            <a href="/contect" className="hover:text-white">
              Contact Us
            </a>
          </div>

          <div className="border-t border-gray-700 w-full mt-6"></div>

          <p className="text-xs text-gray-400">
            Outstrive © 2025. All Rights Reserved. Design & Develop with ❤️ by
            Zecthgon
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
