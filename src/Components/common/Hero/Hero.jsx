import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section className="overflow-hidden mb-6 shadow-xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-[400px] md:h-[600px]"
      >
        <SwiperSlide>
          <div className="relative h-full w-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center px-12 text-white">
            <div className="max-w-md space-y-4 z-10">
              <h1 className="text-5xl font-bold">Unleash the Magic of Play!</h1>
              <p className="text-lg">
                Discover handpicked toys from local sellers in your
                neighborhood.
              </p>
              <button className="btn btn-warning rounded-full border-none px-8">
                Shop Now
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&q=80&w=800"
              className="absolute right-0 h-full w-2/3 object-cover opacity-80 mask mask-hexagon"
              alt="Toys"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center px-12 text-white">
            <div className="max-w-md space-y-4 z-10">
              <h1 className="text-5xl font-bold">Unleash the Magic of Play!</h1>
              <p className="text-lg">
                Discover handpicked toys from local sellers in your
                neighborhood.
              </p>
              <button className="btn btn-warning rounded-full border-none px-8">
                Shop Now
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&q=80&w=800"
              className="absolute right-0 h-full w-2/3 object-cover opacity-80 mask mask-hexagon"
              alt="Toys"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center px-12 text-white">
            <div className="max-w-md space-y-4 z-10">
              <h1 className="text-5xl font-bold">Unleash the Magic of Play!</h1>
              <p className="text-lg">
                Discover handpicked toys from local sellers in your
                neighborhood.
              </p>
              <button className="btn btn-warning rounded-full border-none px-8">
                Shop Now
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&q=80&w=800"
              className="absolute right-0 h-full w-2/3 object-cover opacity-80 mask mask-hexagon"
              alt="Toys"
            />
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </section>
  );
};

export default Hero;
