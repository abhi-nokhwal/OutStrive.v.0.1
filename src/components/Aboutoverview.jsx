import React from "react";
import { Link } from "react-router-dom";

const AboutOverview = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-10 bg-white border-t border ">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-between gap-0 ">
        {/* Left Side - Title and Button */}
        <div className="flex flex-col items-start gap-6 md:w-1/3 text-center">
          <h2
            data-aos="fade-right"
            className="text-3xl md:text-3xl  font-semibold text-gray-900">
            About Outstrive
          </h2>
          <Link
            to="/contactus"
            data-aos="fade-down"
            className="bg-blue-600 hover:bg-blue-700 text-white  text-sm px-6 py-2 rounded-full transition">
            Contact Us
          </Link>
        </div>

        {/* Right Side - Paragraphs */}
        <div
          data-aos="fade-down"
          className="text-gray-700 text-sm md:text-sm md:max-w-xl space-y-6 ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vestibulum aliquet est, quis tincidunt magna dictum quis. Integer
            feugiat imperdiet libero, malesuada facilisis nunc faucibus vitae.
            {/* Phasellus nec pulvinar sem. Phasellus eu diam interdum, commodo */}
            {/* tellus a, imperdiet ex. Quisque tempus varius urna, sed efficitur */}
            turpis. Suspendisse scelerisque in turpis ut scelerisque. Vestibulum
            augue nisl, facilisis a semper vitae, tincidunt ac est. Nullam
            mattis malesuada tellus, nec placerat dolor semper vel. Interdum et
            malesuada fames ac ante ipsum primis in faucibus.
          </p>
          <p>
            Cras in mollis urna. Vivamus iaculis interdum consectetur. Vivamus
            vehicula risus vitae urna accumsan, eu tempor libero ultricies. Duis
            eu dui sapien. Aliquam erat volutpat. Pellentesque neque lorem,
            sollicitudin in lacinia eu, tincidunt in nunc. Morbi bibendum
            fermentum dapibus. Ut congue tincidunt maximus. Nullam in aliquam
            mauris.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
