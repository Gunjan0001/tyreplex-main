import React from "react";
import { ServiceData } from "./Common/Helper";
import Slider from "react-slick";

const Services = () => {
  const settings = {
    infinite: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          centerMode: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div id="service" className="max-w-[1320px] mx-auto px-6">
      <div className="w-full mx-auto text-center shadow-md p-4 my-4 bg-white rounded-lg">
        <p className="text-start font-bold mb-0">
          Services offered by this dealer
        </p>
        <Slider {...settings} className="w-full">
          {ServiceData.map((item, index) => (
            <div
              key={index}
              className="flex min-h-[97px] mx-auto py-5 flex-col justify-center items-center sm:shadow-xl sm:my-4 bg-white sm:border rounded-md transition-all ease-in-out duration-300 cursor-pointer w-full"
            >
              <div className="flex flex-col justify-center w-full">
                <img src={item.image} alt="service" />
                <p className="font-bold mb-0 mt-3 text-center">{item.para}</p>
                <button className="bg-[#ed1c24] text-sm text-white rounded-md px-2 py-1.5 mt-4 sm:mt-7">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
