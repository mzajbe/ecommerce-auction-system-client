/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import { Navigation } from 'swiper';
import { Navigation } from "swiper/modules";
import { FiCircle } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center gap-4 max-w-[1400px] mx-auto">
      {/* Slider Section */}
      <div className="w-2/3 h-[500px]  mt-10 ">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="/src/assets/homeImages/heroSection/auction-cars.jpg"
                alt="Auction Slider 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col px-6 py-8">
                <p className="text-3xl md:text-5xl lg:text-6xl text-white font-bold text-center leading-snug md:leading-tight opacity-90 animate-fade-in">
                  The Best Deals on Wheels
                </p>
                <p className="text-3xl md:text-5xl lg:text-4xl text-white font-bold text-center leading-snug md:leading-tight opacity-90 animate-fade-in">
                  Car & Bike Auctions You Can't Miss.
                </p>
                <button className="mt-6 px-8 py-3 bg-orange-400 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-500 transition duration-300">
                  View Auctions
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="/src/assets/homeImages/heroSection/uiu-cars-001.jpg"
                alt="Auction Slider 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col px-6 py-8">
                <p className="text-3xl md:text-5xl lg:text-6xl text-white font-bold text-center leading-snug md:leading-tight opacity-90 animate-fade-in">
                  Discover Incredible Deals
                </p>

                <button className="mt-6 px-8 py-3 bg-orange-400 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-500 transition duration-300">
                  View Auctions
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="/src/assets/homeImages/heroSection/Average Weight Of A Car.webp"
                alt="Auction Slider 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col px-6 py-8">
                <p className="text-3xl md:text-5xl lg:text-6xl text-white font-bold text-center leading-snug md:leading-tight opacity-90 animate-fade-in">
                  Bid Your Way to Success
                </p>

                <button className="mt-6 px-8 py-3 bg-orange-400 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-500 transition duration-300">
                  View Auctions
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Auction Cards */}
      <div className="w-1/2 mt-10 h-[500px] flex flex-col justify-between items-center space-y-4">
        <div className="w-full h-60 bg-gray-800 text-white flex flex-col justify-center items-center rounded-lg shadow-lg relative group">
          <img
            src="/src/assets/homeImages/heroSection/upcoming.jpg"
            alt="Upcoming Auction"
            className="w-full h-full object-cover rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-xl font-semibold opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-5 transition-all duration-500">
              Upcoming Auction
            </h2>
          </div>
        </div>
        <div className="w-full h-60 bg-gray-800 text-white flex flex-col justify-center items-center rounded-lg shadow-lg relative group">
          <img
            src="/src/assets/homeImages/heroSection/live.jpg"
            alt="Upcoming Auction"
            className="w-full h-full object-cover rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-xl font-semibold opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-5 transition-all duration-500 flex items-center space-x-2 animate-blink">
              <FiCircle className="text-red-500 bg-red-500 rounded-xl  text-2xl animate-pulse" />
              {/* Red Logo */}
              <span>Live Auction</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
