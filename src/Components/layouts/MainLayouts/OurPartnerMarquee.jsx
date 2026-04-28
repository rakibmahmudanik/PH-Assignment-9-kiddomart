import React from "react";
// import Marquee from "react-fast-marquee";
import MarqueeLib from "react-fast-marquee";
const Marquee = MarqueeLib.default;

const OurPartnerMarquee = () => {
  const ourPartner = [
    "https://i.ibb.co.com/bM7rJcd4/Alibaba.jpg",
    "https://i.ibb.co.com/tPTzPJ1R/Ali-Express.png",
    "https://i.ibb.co.com/mCWggY6z/amazon.png",
    "https://i.ibb.co.com/s9bGbk02/daraz.png",
    "https://i.ibb.co.com/LDkRFVY6/keedlee.webp",
    "https://i.ibb.co.com/Q3Pz7k5N/Lovevery.webp",
    "https://i.ibb.co.com/Df476NBC/othoba.png",
    "https://i.ibb.co.com/v4whwF9f/rokomary.png",
    "https://i.ibb.co.com/LdtLtLQW/Walmart.png",
  ];

  console.log(MarqueeLib);
  console.log(Marquee);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-4">
      <h1 className="mt-5 mb-2 text-2xl md:text-4xl font-bold text-center">
        Our Sales Partners
        <hr className="w-16 border-2 mt-4 mb-5 border-[#615fff] rounded-2xl mx-auto"></hr>
      </h1>
      <Marquee speed={50} gradient={true}>
        <div className="flex w-full gap-12 items-center justify-evenly pl-12">
          {ourPartner.map((logo, index) => (
            <img
              key={index}
              src={logo}
              width="100px"
              height="auto"
              alt="Partner Logo"
              // style={{ height: "50px", margin: "0 20px" }}
              className=" grayscale-100 "
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default OurPartnerMarquee;
