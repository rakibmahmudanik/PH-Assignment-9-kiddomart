import React from "react";
import useToyData from "../../../../Hooks/useToyData";
import Skeleton from "../../../common/Loading/Skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PopularToyCard from "./PopularToyCard";

const PopularToy = () => {
  const { toyData, isloading } = useToyData();
  const featuredToyData = toyData.filter((p) => p.rating >= 4.8);

  return (
    <div data-aos="fade-up" className="px-6 md:px-16 lg:px-24 xl:px-32 py-4">
      <h1 className=" my-10 text-3xl font-bold">
        Popular Toys
        <hr className="w-16 border-2 mt-5 border-[#615fff] rounded-2xl"></hr>
      </h1>
      <div
        data-aos="fade-left"
        data-aos-delay="100"
        className="shadow-2xl/10 pb-2 px-2 rounded-xl"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          slidesPerView={1}
          spaceBetween={20}
          initialSlide={5}
          speed={600}
          // centeredSlides={true}
          snapToSlideEdge={true}
          autoHeight={true}
          roundLengths={true}
          loop={true}
          autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className=""
        >
          {isloading
            ? [...Array(5)].map((_, index) => (
                <SwiperSlide>
                  <Skeleton key={index}></Skeleton>
                </SwiperSlide>
              ))
            : featuredToyData.map((toy) => (
                <SwiperSlide>
                  <PopularToyCard key={toy.toyId} toy={toy}></PopularToyCard>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularToy;
