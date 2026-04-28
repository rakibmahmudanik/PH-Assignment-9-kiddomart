import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useToyData from "../../../Hooks/useToyData";
import Slider from "../Slider/Slider";
import SkeletonSlider from "../Loading/SkeletonSlider";
const firstIndex = Math.floor(Math.random() * 15);
const lastIndex = Math.floor(Math.random() * 30) + 15;

const Hero = () => {
  const { toyData, isloading } = useToyData();
  const randomRange = toyData.slice(firstIndex, lastIndex);
  const SlideToy = randomRange.slice(0, 3);
  console.log(SlideToy);
  return (
    <section className="overflow-hidden ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-100 md:h-150"
      >
        {isloading
          ? [...Array(3)].map((_, index) => (
              <SwiperSlide>
                <SkeletonSlider key={index}></SkeletonSlider>
              </SwiperSlide>
            ))
          : SlideToy.map((toy) => (
              <SwiperSlide>
                <Slider toy={toy}></Slider>
              </SwiperSlide>
            ))}

        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </section>
  );
};

export default Hero;
