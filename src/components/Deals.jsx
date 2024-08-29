import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Logodata } from "./Common/Helper";

const Deals = () => {
  const settingsToRight = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: "linear",
    variableWidth: true,
    pauseOnHover: true,
    rtl: false,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1320px] mx-auto px-6 mt-28 mb-10 sm:mb-0">
      <div className="max-w-full mx-auto text-center shadow-md p-4 sm:my-4 bg-white rounded-sm overflow-auto">
        <p className="text-start font-bold mb-0">Deals in</p>
        <div className="mt-4 flex items-center overflow-hidden">
          <Slider {...settingsToRight} className="slider">
            {Logodata.map((logo, index) => (
              <>
                <div
                  key={index}
                  className="flex flex-col  justify-center items-center min-w-[186px] max-w-[186px] min-h-[86px] max-h-[86px]  shadow-xl mb-4  bg-white border mx-2 rounded-md"
                >
                  <img
                    src={logo.image}
                    alt={`partner-logo-${index}`}
                    className="mx-auto max-w-[135px] max-h-[35px] min-w-[135px] min-h-[35px] object-contain "
                  />
                  <p className="mb-0 mt-2 text-sm text-[#130f268a]">
                    {logo.name}
                  </p>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Deals;
