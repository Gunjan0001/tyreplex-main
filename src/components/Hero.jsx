import React from "react";
import { MainData } from "./Common/Helper";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    fade: true,
  };

  return (
    <div className="w-full mx-auto text-center relative">
      <Slider {...settings}>
        {MainData.map((item, index) => (
          <div key={index} className="relative">
            <div
              className="flex items-center justify-end bg-cover bg-center w-screen h-screen relative"
              style={{ backgroundImage: `url(${item.bgImage})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-60 xl:hidden"></div>

              <div className="text-start mx-4 relative z-10 w-full md:max-w-[500px]">
                <p className="mb-0 mt-3 text-white text-md sm:text-xl">
                  {item.para}
                </p>
                <h2 className="font-bold mb-0 mt-3 text-3xl md:text-5xl text-white max-w-[500px]">
                  {item.heading}
                </h2>
                <button className="bg-[#ed1c24] text-md mt-8 md:mt-10 text-white rounded-[3px] px-4 py-2">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
