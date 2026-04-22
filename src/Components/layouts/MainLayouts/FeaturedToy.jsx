import React from "react";
import useToyData from "../../../Hooks/useToyData";
import Skeleton from "../../common/Loading/Skeleton";
import Card from "../../common/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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

const FeaturedToy = () => {
  const { toyData, isloading } = useToyData();
  const featuredToyData = toyData.slice(0, 6);

  return (
    <div className="">
      <h1 className="mt-10 mb-2 text-3xl font-bold px-6 md:px-16 lg:px-24 xl:px-32 py-4">
        Popular Toys
        <hr className="w-16 border-2 mb-10 mt-5 border-[#615fff] rounded-2xl"></hr>
      </h1>
      <div className="  ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          slidesPerView={5}
          spaceBetween={25}
          initialSlide={5}
          speed={600}
          // centeredSlides={true}
          snapToSlideEdge={true}
          autoHeight={true}
          roundLengths={true}
          loop={true}
          pagination={{
            clickable: true,
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
          className=""
        >
          {isloading
            ? [...Array(20)].map((_, index) => (
                <Skeleton key={index}></Skeleton>
              ))
            : featuredToyData.map((toy) => (
                <SwiperSlide>
                  <Card key={toy.toyId} toy={toy}></Card>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedToy;
