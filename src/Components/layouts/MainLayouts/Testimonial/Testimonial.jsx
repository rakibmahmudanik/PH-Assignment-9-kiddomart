import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import MarqueeLib from "react-fast-marquee";
const Marquee = MarqueeLib.default;

const Testimonial = () => {
  const [TData, setTData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((json) => {
        setTData(json);
        setLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const firstRow = TData.slice(0, TData.length / 2);
  const secondRow = TData.slice(TData.length / 2, TData.length);
  if (loading) return <p>Loading...</p>;

  return (
    <div className="my-10">
      <div className="text-center mb-12 px-6">
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">
          Lovely Testimonial From{" "}
          <span className="text-primary italic">Happy Customer</span>
        </h1>

        <p className="text-base md:text-md text-base-content/60 font-medium max-w-2xl mx-auto">
          Join 1,000+ parents who trust us for their little ones' everyday joy
          and comfort.
        </p>

        <hr className="w-20 border-2 mt-5 border-[#615fff] rounded-2xl mx-auto"></hr>
      </div>

      <div className="flex flex-col gap-5">
        <Marquee speed={50} direction="right" gradient={true}>
          <div className="flex gap-5 flex-wrap pl-5">
            {firstRow.map((data) => (
              <TestimonialCard key={data.id} data={data}></TestimonialCard>
            ))}
          </div>
        </Marquee>
        <Marquee speed={50} gradient={true}>
          <div className="flex gap-5 flex-wrap pl-5">
            {secondRow.map((data) => (
              <TestimonialCard key={data.id} data={data}></TestimonialCard>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
