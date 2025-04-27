import React from "react";
import AboutBanner from "../components/AboutBanner";
import AboutOverview from "../components/Aboutoverview";
import Team from "../components/Team";
import Partners from "../components/Partners";
import Joinus from "../components/Joinus";

function Aboutus() {
  return (
    <div>
      <AboutBanner />
      <AboutOverview />
      <Team />
      <Partners />
      <Joinus />
    </div>
  );
}

export default Aboutus;
