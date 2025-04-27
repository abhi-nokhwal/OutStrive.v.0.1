import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";

const teamMembers = [
  { name: "Zohar Einy", role: "CEO", image: img1, linkedin: "#" },
  { name: "Zohar Einy", role: "CEO", image: img2, linkedin: "#" },
  { name: "Zohar Einy", role: "CEO", image: img3, linkedin: "#" },
  { name: "Zohar Einy", role: "CEO", image: img4, linkedin: "#" },
  { name: "Zohar Einy", role: "CEO", image: img5, linkedin: "#" },
  { name: "Zohar Einy", role: "CEO", image: img1, linkedin: "#" },
];

const Team = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white border-t">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left Side */}
        <div className="flex flex-col items-start gap-6 md:w-1/3">
          <h2
            data-aos="fade-left"
            className="text-3xl md:text-3xl font-semibold text-gray-900">
            Outstrive Team
          </h2>
          <p data-aos="fade-down" className="text-gray-700 text-sm md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            {/* vestibulum aliquet est, quis tincidunt magna dictum quis. Integer */}
            feugiat imperdiet libero, malesuada facilisis nunc faucibus vitae.
          </p>
          <p
            data-aos="fade-right"
            className="text-gray-700 text-sm md:text-base">
            Phasellus nec pulvinar sem. Phasellus eu diam interdum, commodo
            {/* tellus a, imperdiet ex. Quisque tempus varius urna, sed efficitur */}
            turpis. Suspendisse scelerisque in turpis ut scelerisque. Vestibulum
            augue nisl, facilisis a semper vitae, tincidunt ac est.
          </p>
          <a
            href="Join"
            data-aos="fade-up"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2 rounded-full transition">
            Join Our Team
          </a>
        </div>

        {/* Right Side */}
        <div className="grid  w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {teamMembers.map((member, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="relative border border-gray-300 bg-white overflow-hidden">
              {/* L Corners */}
              <div className="absolute top-0 left-0 w-5 h-5">
                <div className="absolute left-0 top-0 w-[2px] h-full bg-gray-600" />
                <div className="absolute left-0 top-0 w-full h-[2px] bg-gray-600" />
              </div>
              <div className="absolute top-0 right-0 w-5 h-5">
                <div className="absolute right-0 top-0 w-[2px] h-full bg-gray-600" />
                <div className="absolute right-0 top-0 w-full h-[2px] bg-gray-600" />
              </div>
              <div className="absolute bottom-0 left-0 w-5 h-5">
                <div className="absolute left-0 bottom-0 w-[2px] h-full bg-gray-600" />
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-600" />
              </div>
              <div className="absolute bottom-0 right-0 w-5 h-5">
                <div className="absolute right-0 bottom-0 w-[2px] h-full bg-gray-600" />
                <div className="absolute right-0 bottom-0 w-full h-[2px] bg-gray-600" />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center text-center space-y-3 p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-xl">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
