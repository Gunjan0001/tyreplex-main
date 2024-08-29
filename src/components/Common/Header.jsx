import React, { useState } from "react";
import Logo from "../../assets/images/png/tyrelogo.png";
import { Link, useLocation } from "react-router-dom";
import { CrossIcon, LoginIcon, MenuIconBlack } from "./Icon";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const loaction = useLocation();

  let links = document.querySelectorAll(".nav_links");

  links.forEach((item) => {
    item.addEventListener("click", function () {
      setToggle(false);
    });
  });

  if (toggle) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-white">
        <nav className=" max-w-[1320px] mx-auto duration-200 ease-in-out shadow-sm ">
          <div className=" px-6 flex justify-between items-center py-[12px]">
            <div className="w-full">
              <Link aria-label="logo" to="/">
                <img
                  className="max-w-[120px] sm:max-w-[150px]"
                  src={Logo}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="w-full hidden lg:block">
              <ul className="flex gap-7 lg:px-6">
                <li className="whitespace-nowrap cursor-pointer relative transition-ease-in-out after:duration-300 hover:text-black group">
                  <li
                    className={` whitespace-nowrap font-semibold cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out ${
                      loaction.pathname === "/search"
                        ? "text-[#ed1c24] "
                        : "text-[#130F26]"
                    }`}
                  >
                    <Link aria-label="Search" to="/search">
                      Car Tyres
                    </Link>
                  </li>
                  <ul className="hidden group-hover:block absolute left-0 z-10  origin-top-right divide-y divide-gray-100 rounded-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col">
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2  hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="blog"
                        to="/blog"
                        className={` whitespace-nowrap font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out w-full `}
                      >
                        MRF Tyres
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="fact"
                        to="/fact"
                        className={` whitespace-nowrap font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        CEAT Tyres
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="about us"
                        to="/about-us"
                        className={` whitespace-nowrap font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        Goodyear Tyres
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="about us"
                        to="/about-us"
                        className={` whitespace-nowrap font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out`}
                      >
                        Apollo Tyres
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="about us"
                        to="/about-us"
                        className={` whitespace-nowrap font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out`}
                      >
                        Bridgestone Tyres
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="about us"
                        to="/about-us"
                        className={` whitespace-nowrap font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        JK Tyres
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="about us"
                        to="/about-us"
                        className={` whitespace-nowrap font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        Michelin Tyres
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="about us"
                        to="/about-us"
                        className={` whitespace-nowrap font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out`}
                      >
                        All car Tyres
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="whitespace-nowrap cursor-pointer relative transition-ease-in-out after:duration-300 hover:text-black group">
                  <li
                    className={` whitespace-nowrap  font-semibold cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out ${
                      loaction.pathname === "/how-it-work"
                        ? "text-[#ed1c24] "
                        : "text-[#130f26]"
                    }`}
                  >
                    <Link aria-label="How it work" to="/how-it-work">
                      Bike Tyres
                    </Link>
                  </li>
                  <ul className="hidden group-hover:block absolute left-0 z-10  origin-top-right divide-y divide-gray-100 rounded-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col">
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="blog"
                        to="/blog"
                        className={` whitespace-nowrap  font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out`}
                      >
                        MRF Tyres
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="fact"
                        to="/fact"
                        className={` whitespace-nowrap  font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        CEAT Tyres
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="about us"
                        to="/about-us"
                        className={` whitespace-nowrap  font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        Apollo Tyres
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="about us"
                        to="/about-us"
                        className={` whitespace-nowrap  font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        Bridgestone Tyres
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="about us"
                        to="/about-us"
                        className={` whitespace-nowrap  font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        JK Tyres
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="about us"
                        to="/about-us"
                        className={` whitespace-nowrap  font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        Michelin Tyres
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="about us"
                        to="/about-us"
                        className={` whitespace-nowrap  font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        Pirelli Tyres
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="about us"
                        to="/about-us"
                        className={` whitespace-nowrap  font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        All bike Tyres
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="whitespace-nowrap cursor-pointer relative transition-ease-in-out after:duration-300 hover:text-black group">
                  <li
                    className={` whitespace-nowrap font-semibold cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out ${
                      loaction.pathname === "/security"
                        ? "text-[#ed1c24] "
                        : "text-[#130f26]"
                    }`}
                  >
                    <Link aria-label="Security" to="/security">
                      Tyre Pressure
                    </Link>
                  </li>
                </li>
                <li className="whitespace-nowrap cursor-pointer relative transition-ease-in-out after:duration-300 hover:text-black group">
                  <li
                    className={`whitespace-nowrap font-semibold cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out${
                      loaction.pathname === "/contact-us"
                        ? "text-[#ed1c24] "
                        : "text-[#130f26]"
                    }`}
                  >
                    <Link aria-label="Contact us" to="/contact-us">
                      Commercial Tyres
                    </Link>
                  </li>
                  <ul className="hidden group-hover:block absolute left-0 z-10  origin-top-right divide-y divide-gray-100 rounded-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col">
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="blog"
                        to="/blog"
                        className={` whitespace-nowrap font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        All Commercial Tyres
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="whitespace-nowrap cursor-pointer relative transition-ease-in-out after:duration-300 hover:text-black group">
                  <li
                    className={`whitespace-nowrap font-semibold cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out${
                      loaction.pathname === "/contact-us"
                        ? "text-[#ed1c24] "
                        : "text-[#130f26]"
                    }`}
                  >
                    <Link aria-label="All sites" to="/all-sites">
                      Accessories
                    </Link>
                  </li>
                  <ul className="hidden group-hover:block absolute left-0 z-10  origin-top-right divide-y divide-gray-100 rounded-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col">
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="blog"
                        to="/blog"
                        className={` whitespace-nowrap font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        Accessories
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="fact"
                        to="/fact"
                        className={` whitespace-nowrap font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        Batteries
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="about us"
                        to="/about-us"
                        className={` whitespace-nowrap font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        Alloys Wheels
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="whitespace-nowrap cursor-pointer relative transition-ease-in-out after:duration-300 hover:text-black group">
                  <li
                    className={`whitespace-nowrap font-semibold cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out${
                      loaction.pathname === "/contact-us"
                        ? "text-[#ed1c24] "
                        : "text-[#130f26]"
                    }`}
                  >
                    <Link aria-label="All sites" to="/all-sites">
                      More
                    </Link>
                  </li>
                  <ul className="hidden group-hover:block absolute left-0 z-10 origin-top-right divide-y divide-gray-100 rounded-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col">
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="blog"
                        to="/blog"
                        className={` whitespace-nowrap font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        CashBack Offer
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="fact"
                        to="/fact"
                        className={` whitespace-nowrap font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        Find Tyre Dealers
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="about us"
                        to="/about-us"
                        className={` whitespace-nowrap font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        Compare Tyres
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="about us"
                        to="/about-us"
                        className={` whitespace-nowrap font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        Are you a Tyre Dealer
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="about us"
                        to="/about-us"
                        className={` whitespace-nowrap font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        Wheel balancing
                      </Link>
                    </li>
                    <li
                      className={`ps-4 w-full pr-10 py-2 rounded-b-md border-0 p-2 hover:text-[#ed1c24] ${
                        loaction.pathname === "/search"
                          ? "text-[#ed1c24] "
                          : "text-[#130F26]"
                      }`}
                    >
                      <Link
                        aria-label="about us"
                        to="/about-us"
                        className={` whitespace-nowrap font-medium cursor-pointer hover:text-[#ed1c24] duration-300 ease-in-out `}
                      >
                        Wheel Alignment
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="lg:flex hidden  gap-2.5 w-full ms-3 xs:ms-0 justify-center lg:justify-end">
              <Link
                aria-label="login"
                to="/login"
                className="p-[4px_12px] flex h-[49px] cursor-pointer gap-1 2xs:p-[8px_16px] sm:p-[12px_26px] text-center font-semibold  whitespace-nowrap"
              >
                <LoginIcon />
                Log in
              </Link>
            </div>
            <div className="w-full lg:hidden flex justify-end">
              <button
                onClick={() => {
                  setToggle(true);
                }}
              >
                <MenuIconBlack />
              </button>
            </div>
          </div>
        </nav>
        <div
          className={` transition-all ease-in-out duration-300 fixed  left-0 w-full z-20 h-screen bg-[#ed1c24] flex justify-center items-center flex-col lg:hidden ${
            toggle ? "top-0" : "top-[-100%]"
          }`}
        >
          <div className="absolute top-0 end-0 p-6">
            <button
              onClick={() => {
                setToggle(false);
              }}
            >
              <CrossIcon />
            </button>
          </div>
          <div className="w-full flex justify-center items-center">
            <ul className="text-lg">
              <li className="whitespace-nowrap  text-white text-center mb-3  ">
                <Link
                  aria-label="Search"
                  to="/search"
                  className="nav_links relative text-lg after:absolute after:h-[2px] after:w-0 after:bottom-0  after:bg-white after:left-[50%] 
                after:translate-x-[-50%] after:rounded-md 
              hover:left-0 !transition-ease-in-out after:duration-300 
              hover:opacity-100  hover:after:w-full"
                >
                  Car Tyres
                </Link>
              </li>
              <li className="whitespace-nowrap  text-white text-center mb-3 ">
                <Link
                  aria-label="Howitwork"
                  to="/how-it-work"
                  className="nav_links relative after:absolute after:h-[2px] text-lg after:w-0 after:bottom-0  after:bg-white after:left-[50%] 
                after:translate-x-[-50%] after:rounded-md 
              hover:left-0 !transition-ease-in-out after:duration-300 
              hover:opacity-100  hover:after:w-full"
                >
                  Bike Tyres
                </Link>
              </li>
              <li className="whitespace-nowrap  text-white text-center mb-3  ">
                <Link
                  aria-label="Security"
                  to="/security"
                  className="nav_links relative after:absolute after:h-[2px] text-lg after:w-0 after:bottom-0  after:bg-white after:left-[50%] 
                after:translate-x-[-50%] after:rounded-md 
              hover:left-0 !transition-ease-in-out after:duration-300 
              hover:opacity-100  hover:after:w-full"
                >
                  Tyre Pressure
                </Link>
              </li>
              <li className="whitespace-nowrap  text-white text-center mb-3 ">
                <Link
                  aria-label="Contact us"
                  to="/contact-us"
                  className="nav_links relative after:absolute after:h-[2px] text-lg after:w-0 after:bottom-0  after:bg-white after:left-[50%] 
                after:translate-x-[-50%] after:rounded-md 
              hover:left-0 !transition-ease-in-out after:duration-300 
              hover:opacity-100  hover:after:w-full"
                >
                  Commercial Tyres
                </Link>
              </li>
              <li className="whitespace-nowrap  text-white text-center mb-3 ">
                <Link
                  aria-label="all-sites"
                  to="/all-sites"
                  className="nav_links relative after:absolute after:h-[2px] text-lg after:w-0 after:bottom-0  after:bg-white after:left-[50%] 
                after:translate-x-[-50%] after:rounded-md 
              hover:left-0 !transition-ease-in-out after:duration-300 
              hover:opacity-100  hover:after:w-full"
                >
                  Accessories
                </Link>
              </li>

              <li className="whitespace-nowrap  text-white text-center mb-3 ">
                <Link
                  aria-label="all-sites"
                  to="/blog"
                  className="nav_links relative after:absolute after:h-[2px] text-lg after:w-0 after:bottom-0  after:bg-white after:left-[50%] 
                after:translate-x-[-50%] after:rounded-md 
              hover:left-0 !transition-ease-in-out after:duration-300 
              hover:opacity-100  hover:after:w-full"
                >
                  More
                </Link>
              </li>
              <div className="text-center  w-full justify-center lg:justify-end">
                <Link
                  aria-label="login"
                  to="/login"
                  className="nav_links relative text-white after:absolute after:h-[2px] after:w-0 after:bottom-0  after:bg-white after:left-[50%] 
                after:translate-x-[-50%] after:rounded-md 
              hover:left-0 !transition-ease-in-out after:duration-300 
              hover:opacity-100  hover:after:w-full"
                >
                  Log in
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
