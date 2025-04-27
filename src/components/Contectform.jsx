import React from "react";
import ContactImage from "../assets/Callwomen.png";
import Faq from "../components/Faq";

const Contactform = () => {
  return (
    <section className="px-4 relative py-20  lg:px-20 mt-20">
      <div className="max-w-4xl mx-auto grid grid-cols-1 mb-10 lg:grid-cols-2 gap-10">
        {/* Left Side - Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700">Name*</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border-b text-sm border-gray-300 focus:border-blue-500 outline-none py-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email*
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border-b text-sm border-gray-300 focus:border-blue-500 outline-none py-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Company Name*
              </label>
              <input
                type="text"
                placeholder="Enter your company name"
                className="w-full border-b text-sm border-gray-300 focus:border-blue-500 outline-none py-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Team Size*
              </label>
              <input
                type="text"
                placeholder="Enter your no. of employees"
                className="w-full border-b text-sm border-gray-300 focus:border-blue-500 outline-none py-2"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              How Can We Help?*
            </label>
            <input
              type="text"
              placeholder="What brings you to us today?"
              className="w-full pb-44 border-b text-sm border-gray-300 focus:border-blue-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-6 pt-6 border-t">
            <button
              type="submit"
              className="px-8 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              SEND
            </button>
            <p className="text-sm text-gray-600">
              You can also email us at:{" "}
              <span className="text-black font-semibold">
                sales@outstrive.com
              </span>
            </p>
          </div>
        </form>

        {/* Right Side - Help Info */}
        <div className="bg-blue-50 rounded-xl p-10 lg:p-14 lg:pb-48 pb-44 flex flex-col justify-between ">
          <div className="space-y-6">
            <div>
              <h4 className="text-gray-400 text-sm mb-2">GET HELP</h4>
              <a
                href="mailto:help@outstrive.com"
                className="text-black flex  items-center gap-1 hover:underline">
                help@outstrive.com <span>↗</span>
              </a>
            </div>

            <div>
              <h4 className="text-gray-400 text-sm mb-2">WORK WITH US</h4>
              <a
                href="mailto:career@outstrive.com"
                className="text-black flex items-center gap-1 hover:underline">
                career@outstrive.com <span>↗</span>
              </a>
            </div>

            <div>
              <h4 className="text-gray-400 text-sm mb-2">COLLABORATION</h4>
              <a
                href="mailto:partnerships@outstrive.com"
                className="text-black flex items-center gap-1 hover:underline">
                partnerships@outstrive.com <span>↗</span>
              </a>
            </div>
          </div>

          <div className="lg:mt-8 ">
            <img
              src={ContactImage}
              alt="Support Woman"
              className="lg:w-60 w-28 mt-14 lg:h-60 h-28 absolute  lg:top-64  right-8 lg:right-52 bg-cover"
            />
          </div>
        </div>
      </div>
      <Faq />
    </section>
  );
};

export default Contactform;
