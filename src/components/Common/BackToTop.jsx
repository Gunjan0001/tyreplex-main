import React, { useEffect, useState } from "react";
import { BackToTopArrow } from "./Icon";
const Backtotop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // SCROLL TO TOP FUNCTION WHEN CLICK ON THIS PAGE SCROLL TOP
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // TO FIND SCROLL Y POSITION
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  // THIS USEFFECT GIVE US POSITION OF SCROLL IN EVERY PIXELS WE SCROLL
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {scrollPosition > 200 ? (
        <div
          className=" fixed  backtotop cursor-pointer z-50 pe-3 end-10 bottom-10 rounded-full p-3 "
          onClick={() => scrollToTop()}
        >
           <BackToTopArrow />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Backtotop;
