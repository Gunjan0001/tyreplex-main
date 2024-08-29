import React from "react";
import logo_loading from "../../assets/images/png/tyrelogo.png";
import tyre from "../../assets/images/png/tyre.png";

function Loader() {
  return (
    <div>
      <div className="h-screen bg-white loding_position flex flex-col">
        <img
          className="max-w-[150px] animation_loding"
          src={logo_loading}
          alt="loading"
        />
         <img
          className="max-w-[150px] mt-10 animation_loading_rotate "
          src={tyre}
          alt="loading"
        />
      </div>
    </div>
  );
}

export default Loader;
