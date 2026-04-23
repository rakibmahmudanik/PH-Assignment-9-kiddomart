import React from "react";
import useToyData from "../../../../Hooks/useToyData";
import Skeleton from "../../../common/Loading/Skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FeaturedToyCard from "./FeaturedToyCard";
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
  slidesOffsetBefore: 50,
  slidesOffsetAfter: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
};

const FeaturedToy = () => {
  const { toyData, isloading } = useToyData();
  const featuredToyData = toyData.filter((p) => p.rating >= 4.8);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-4">
      <h1 className=" mb-10 text-3xl font-bold">
        Popular Toys
        <hr className="w-16 border-2 mt-5 border-[#615fff] rounded-2xl"></hr>
      </h1>
      <div className="shadow-2xl pb-1 pr-1 rounded">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          slidesPerView={5}
          spaceBetween={20}
          initialSlide={5}
          speed={600}
          // centeredSlides={true}
          snapToSlideEdge={true}
          autoHeight={true}
          roundLengths={true}
          loop={true}
          autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
          className=""
        >
          {isloading
            ? [...Array(20)].map((_, index) => (
                <SwiperSlide>
                  <Skeleton key={index}></Skeleton>
                </SwiperSlide>
              ))
            : featuredToyData.map((toy) => (
                <SwiperSlide>
                  <FeaturedToyCard key={toy.toyId} toy={toy}></FeaturedToyCard>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedToy;
