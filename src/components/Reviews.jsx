import React from "react";
import { ReviewsData } from "./Common/Helper";
import Slider from "react-slick";

const Reviews = () => {
  const settings = {
    infinite: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 3, // Default to show 3 slides
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200, // Below 1000px, show 2 slides
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 700, // Below 700px, show 1 slide
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1320px] mx-auto px-6 mt-10">
      <div className="max-w-full mx-auto text-center shadow-md py-4 sm:my-4 bg-white rounded-lg">
        <p className="text-start font-bold mb-2 px-4">Google Reviews</p>
        <Slider {...settings}>
          {ReviewsData.map((item, index) => (
            <div
              key={index}
              className="flex p-3 min-h-[205px] sm:min-h-[140px] mx-auto py-5 flex-col justify-center items-center service shadow-xl sm:my-4 bg-white border rounded-md hover_cards transition-all ease-in-out duration-300 cursor-pointer "
            >
              <div className="flex flex-col justify-center sm:mx-10">
                <div className="flex">
                  <img
                    className="w-[36px] h-[36px]"
                    src={item.image}
                    alt="img"
                  />
                  <p className="text-start font-bold mb-0 px-2">{item.name}</p>
                </div>
                <p className="text-start mb-0 mt-2 px-2">{item.para}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
