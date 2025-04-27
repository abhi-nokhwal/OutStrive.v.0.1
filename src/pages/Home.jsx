import React from "react";
import Head from "../components/Head";
import HomeBanner from "../components/HomeBanner";
import background from "../assets/head-bg.png";
import TrustedSlider from "../components/TrustedSlider";
import ProductsSection from "../components/ProductsSection";
import Work from "../components/Work";
import Faq from "../components/Faq";
import Grid from "../assets/grid.png";

function Home() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="bg-cover ">
        <Head />
        <HomeBanner />
      </div>
      <div
        style={{ backgroundImage: `url(${Grid})` }}
        className=" bg-cover bg-[center_top] bg-no-repeat ">
        <TrustedSlider />
        <ProductsSection />
        <Work />
        <Faq />
      </div>
    </div>
  );
}

export default Home;
