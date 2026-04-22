import React from "react";
import Hero from "../Components/common/Hero/Hero";
import AllToy from "../Components/layouts/MainLayouts/AllToy";
import FeaturedToy from "../Components/layouts/MainLayouts/FeaturedToy";

const HomePage = () => {
  return (
    <div className="">
      <Hero></Hero>
      {/* <AllToy></AllToy> */}
      <FeaturedToy></FeaturedToy>
    </div>
  );
};

export default HomePage;
