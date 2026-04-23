import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useToyData from "../../../Hooks/useToyData";
import Slider from "../Slider/Slider";

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

const Hero = () => {
  const { toyData } = useToyData();
  const SlideToy = toyData.slice(0, 3);
  return (
    <section className="overflow-hidden ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-[400px] md:h-[600px]"
      >
        {SlideToy.map((toy) => (
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
