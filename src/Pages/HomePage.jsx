import React from "react";
import Hero from "../Components/common/Hero/Hero";
import AllToy from "../Components/layouts/MainLayouts/AllToy";
import FeaturedToy from "../Components/layouts/MainLayouts/FeaturedToy/FeaturedToy";
import PopularToy from "../Components/layouts/MainLayouts/PopularToy/PopularToy";
import OurPartnerMarquee from "../Components/layouts/MainLayouts/OurPartnerMarquee";
import Testimonial from "../Components/layouts/MainLayouts/Testimonial/Testimonial";
import InfoBar from "../Components/layouts/MainLayouts/InfoBar/InfoBar";

const HomePage = () => {
  return (
    <div className="">
      <Hero></Hero>
      <PopularToy></PopularToy>
      <FeaturedToy></FeaturedToy>
      <OurPartnerMarquee></OurPartnerMarquee>
      <Testimonial></Testimonial>
      <InfoBar></InfoBar>
    </div>
  );
};

export default HomePage;
