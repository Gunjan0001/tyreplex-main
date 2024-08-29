import React from "react";
import { FbIcon, InstaIcon } from "./Common/Icon";
const Footer = () => {
  const getCurrentYear = new Date().getFullYear();
  return (
    <>
      <div className="max-w-[1320px] mx-auto px-6 my-8 border-b pb-8 border-gray-400">
        <div className="w-full flex flex-wrap    ">
          <div className="w-full sm:w-1/2 xl:w-1/3 lg:border-r-2 lg:px-4">
            <h2 className="font-bold lg:text-lg mt-5 lg:mt-0 ">CONTACT INFO</h2>
            <ul className="ps-0 mt-4 flex flex-col gap-3">
              <li className=" text-xs lg:text-base text-gray-600">
                <span className="text-base lg:text-lg me-2 text-black font-semibold">
                  Address:
                </span>
                PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
              </li>
              <li className=" text-xs  md:text-base text-gray-600">
                <span className=" text-base lg:text-lg me-2 text-black font-semibold">
                  Phone:
                </span>
                012-345-223
              </li>
              <li className=" text-xs md:text-base text-gray-600">
                <span className=" text-base lg:text-lg me-2 text-black font-semibold">
                  Email:
                </span>
                Tyreplex@gmail.com
              </li>
              <li className="flex ">
                <button className="border border-[#ed1c24] text-[#ed1c24] md:text-base  rounded-md px-2 py-[6px] sm:mt-4 lg:mt-7 hover:bg-[#ed1c24] hover:text-white duration-300">
                  Get Directions
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/3 lg:px-4">
            <div className="w-full flex ">
              <div className="w-1/2 lg:border-r-2 ">
                <h2 className="font-bold text-sm lg:text-lg mt-5 lg:mt-0 ">
                  PRODUCTS
                </h2>
                <ul className="ps-0 mt-4 flex flex-col gap-3 ">
                  <li>
                    {" "}
                    <span className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                      Prices Drop
                    </span>
                  </li>
                  <li>
                    {" "}
                    <span className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                      New Products
                    </span>
                  </li>
                  <li>
                    {" "}
                    <span className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                      Best Sales
                    </span>
                  </li>
                  <li>
                    {" "}
                    <span className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                      Contact us
                    </span>
                  </li>
                  <li>
                    <span className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                      Sitemap
                    </span>
                  </li>
                  <li>
                    {" "}
                    <span className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                      Stores
                    </span>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 lg:border-r-2 sm:px-4 ">
                <h2 className="font-bold text-sm lg:text-lg mt-5 lg:mt-0 ">
                  OUR COMPANY
                </h2>
                <ul className="ps-0 mt-4 flex flex-col gap-3  ">
                  <li>
                    {" "}
                    <span className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                      Delivery
                    </span>
                  </li>
                  <li>
                    <span className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                      Terms and Conditions
                    </span>
                  </li>
                  <li>
                    {" "}
                    <span className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                      About Us
                    </span>
                  </li>
                  <li>
                    <span className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                      Secure Payment
                    </span>
                  </li>
                  <li>
                    <span className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                      Shipping{" "}
                    </span>
                  </li>
                  <li>
                    <span className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                      Stores
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/3  lg:px-4">
            <h2 className="font-bold lg:text-lg mt-7 xl:mt-0">NEWSLETTER </h2>
            <ul className="ps-0 mt-4 flex flex-col gap-3 ">
              <li className="text-xs md:text-base text-gray-600">
                Subscribe to our newsletters now and stay up to date with new
                collections and exclusive offers.
              </li>
              <li className="bg-white max-w-[300px] min-w-[270px] sm:min-w-[400px] flex items-center justify-between mt-3 text-[#130F26] rounded-[10px] shadow-[0px_1px_1px_#ffca28] border border-[#FFCA28] px-4 py-2">
                <input
                  className="w-full outline-none text-xs md:text-base"
                  type="text"
                  placeholder="Ask or search your question"
                />
                <button className="border text-xs border-[#ed1c24] px-2 rounded-md text-[#ed1c24] py-1 hover:bg-[#ed1c24] hover:text-white duration-300">
                  Send
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full sm:flex  items-center justify-center sm:justify-between max-w-[1320px] mx-auto px-6 pb-6">
        <div className="flex gap-2 items-center justify-center">
          <a href="https://www.facebook.com/">
            <InstaIcon />
          </a>
          <a href="https://www.instagram.com/">
            <FbIcon />
          </a>
        </div>
        <p className="mb-0 px-4 mt-4 sm:mt-0 text-center text-xs md:text-base">
          ©{getCurrentYear} TyrePlex Technologies & Commerce Pvt. Ltd. All
          Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
