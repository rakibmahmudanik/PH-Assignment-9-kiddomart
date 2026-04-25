import React from "react";
import Hero from "../Components/common/Hero/Hero";
import AllToy from "../Components/layouts/MainLayouts/AllToy";
import FeaturedToy from "../Components/layouts/MainLayouts/FeaturedToy/FeaturedToy";
import PopularToy from "../Components/layouts/MainLayouts/PopularToy/PopularToy";

const HomePage = () => {
  return (
    <div className="">
      <Hero></Hero>
      <PopularToy></PopularToy>
      <FeaturedToy></FeaturedToy>
    </div>
  );
};

export default HomePage;
