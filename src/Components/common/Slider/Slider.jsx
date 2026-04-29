import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router";

const Slider = ({ toy }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      className="overflow-hidden "
      style={{
        backgroundImage: `url(${toy.pictureURL})`,
      }}
      className={`relative h-full w-full bg-cover bg-center   flex items-center  text-white `}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="mt-30 lg:mt-0 z-10 ">
        <div className="max-w-full md:max-w-3xl space-y-5  md:pl-16 text-center  lg:text-left lg:pl-24 xl:pl-32 py-4 transition-all">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl md:text-5xl font-bold transition-all"
          >
            {toy.toyName}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-sm md:text-md lg:text-lg px-5 md:px-0 transition-all"
          >
            {toy.description.slice(0, 250)}. . .
          </p>
          <Link
            data-aos="fade-up"
            data-aos-delay="400"
            to="/alltoys"
            className="btn btn-warning rounded-full border-none "
          >
            Shop All
          </Link>
        </div>
      </div>
      <img
        data-aos="fade-left"
        data-aos-delay="200"
        src={toy.pictureURL}
        className="absolute right-40 top-4 w-1/4  object-cover  mask mask-hexagon md:right-70 md:top-7 lg:w-1/3 lg:h-full lg:top-0   lg:right-30 transition-all"
        alt="Toys"
      />
    </div>
  );
};

export default Slider;
