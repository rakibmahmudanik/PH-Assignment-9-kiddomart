import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useToyData from "../../../Hooks/useToyData";
const swiper = {
  slidesPerView: "auto",
  spaceBetween: 20,
  initialSlide: 5,
  speed: 800,
  centeredSlides: true,
  normalizeSlideIndex: false,
  snapToSlideEdge: true,
  autoHeight: true,
  roundLengths: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
};

const Slider = () => {
  const { toyData, isloading } = useToyData();
  const featuredToyData = toyData.slice(0, 10);

  return (
    <section className="overflow-hidden mb-6 shadow-xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        slidesPerView={2.5}
        spaceBetween={20}
        initialSlide={5}
        speed={800}
        centeredSlides={true}
        normalizeSlideIndex={false}
        snapToSlideEdge={true}
        autoHeight={true}
        roundLengths={true}
        loop={true}
        pagination={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        className="h-[400px] md:h-[600px]"
      >
        {featuredToyData.map((p) => (
          <SwiperSlide>
            <div className="relative h-full  bg-gradient-to-r from-blue-400 to-purple-500 flex items-center px-12 text-white">
              <div className="max-w-md space-y-4 z-10">
                <h1 className="text-5xl font-bold">{p.toyName}</h1>
                <p className="text-lg">
                  Discover handpicked toys from local sellers in your
                  neighborhood.
                </p>
                <button className="btn btn-warning rounded-full border-none px-8">
                  Shop Now
                </button>
              </div>
              <img
                src={p.pictureURL}
                className="absolute right-0 h-full w-2/3 object-cover opacity-80 mask mask-hexagon"
                alt="Toys"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </section>
  );
};

export default Slider;
