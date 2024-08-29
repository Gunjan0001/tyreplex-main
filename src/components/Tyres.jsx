import React, { useState } from "react";
import tyre from "../assets/images/png/tyre.png"
import { FilterDropdown } from "../components/FilterDropdown";
import { tyresArray } from "./Common/Helper";
import { SearchIcon, StarIcon } from "./Common/Icon";

const Tyres = () => {
  const initialVisibleItems = 8; // Initial number of items to show
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
  const [isExpanded, setIsExpanded] = useState(false); // New state to track if items are expanded
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false); // State to track visibility of advanced filters
  const [searchQuery, setSearchQuery] = useState(""); // State to track search input

  // State for filter options
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");

  // Options arrays for filter dropdowns
  const filterOptionsArray = ["apollo", "Ceat"];
  const popularityOptionsArray = ["apollo", "Ceat"];
  const carOptionsArray = ["Car", "Bike", "Scooter"];
  const brandOptionsArray = ["Hero", "Honda", "TVS", "Bajaj"];
  const modelOptionsArray = ["Duet", "Pleasure Plus", "Model Z"];
  const variantOptionsArray = ["Drum", "Disc"];

  const showMoreItems = () => {
    if (visibleItems + 8 >= tyresArray.length) {
      setVisibleItems(tyresArray.length); // Show all items
      setIsExpanded(true); // Set to true when all items are visible
    } else {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 8); // Show more items
    }
  };

  const showLessItems = () => {
    if (visibleItems - 8 <= initialVisibleItems) {
      setVisibleItems(initialVisibleItems); // Reset to initial value
      setIsExpanded(false); // Set to false when back to initial view
    } else {
      setVisibleItems((prevVisibleItems) => prevVisibleItems - 8); // Show fewer items
    }
  };

  const toggleAdvancedFilters = () => {
    setShowAdvancedFilters(!showAdvancedFilters); // Toggle advanced filters visibility
  };

  // Filter tyres based on selected options
  const filteredTyres = tyresArray.filter((tyre) => {
    return (
      (selectedCar === "" || tyre.carType === selectedCar) &&
      (selectedBrand === "" || tyre.brand === selectedBrand) &&
      (selectedModel === "" || tyre.model === selectedModel) &&
      (selectedVariant === "" || tyre.variant === selectedVariant)
    );
  });

  return (
    <div className="container max-w-[1320px] mx-auto px-6 mt-24">
      <div className="flex flex-col sm:flex-row justify-between">
        <h2 className="text-[#130F26] text-lg font-bold mb-4">
          Tyres sold by this Dealer
        </h2>
        {/* Filter Section */}
        <div className="flex flex-col sm:items-center justify-between mb-6 gap-5">
          <div className="flex flex-col sm:flex-row gap-3 lg:ml-auto">
            <FilterDropdown
              options={filterOptionsArray}
              placeholder="Filter By"
            />
            <FilterDropdown
              options={popularityOptionsArray}
              placeholder="Most Popular"
            />
            <button
              onClick={toggleAdvancedFilters}
              className="text-sm text-blue-500 cursor-pointer mt-2"
            >
              Advanced
            </button>
          </div>

          {/* Advanced Filter Section - Conditionally Rendered */}
          {showAdvancedFilters && (
            <div className="flex flex-wrap items-center justify-end gap-3">
              <FilterDropdown
                className="w-[96px]"
                options={carOptionsArray}
                placeholder="Car"
                onChange={setSelectedCar}
              />
              <FilterDropdown
                options={brandOptionsArray}
                placeholder="Choose Brand"
                onChange={setSelectedBrand}
              />
              <FilterDropdown
                options={modelOptionsArray}
                placeholder="Choose Model"
                onChange={setSelectedModel}
              />
              <FilterDropdown
                options={variantOptionsArray}
                placeholder="Choose Variant"
                onChange={setSelectedVariant}
              />
              <button className="bg-red-600 text-white px-4 py-2 rounded">
                <SearchIcon />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Tyre Cards */}
      <div className="flex flex-wrap justify-center cursor-pointer">
        {filteredTyres.slice(0, visibleItems).map((items, index) => {
          return (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 sm:px-3 pt-2"
            >
              <div className="border-0 mb-4 relative hover:shadow-2xl duration-300 shadow-md rounded-md bg-white overflow-hidden">
                <div className="flex items-end justify-end absolute end-0 top-0">
                  <p className="flex items-center justify-end bg-[#efe775] text-sm rounded-sm px-1 before:bg-contain before:bg-center before:mr-1 before:w-[13px] before:h-[16px] before:content-[''] before:bg-warranty">
                    {items.warrenty}
                  </p>
                </div>
                <img
                  className="absolute -bottom-3 -end-16"
                  src={tyre}
                  alt="tyre"
                />
                <img
                  className="font-extrabold max-w-[100px] min-w-[100px] min-h-[50px] max-h-[50px] object-contain text-[#372a74] text-3xl px-2"
                  src={items.brand}
                  alt="items"
                />

                <p className="text-[#130F26] px-2 text-md mt-1">
                  AMAZER 4G LIFE
                </p>
                <p className="text-[#130f268a] px-2 text-md py-3">
                  {items.vName}
                </p>
                <div className="flex items-center px-2 gap-3">
                  <div className="bg-[#4CA72C] text-white px-[5px] rounded-sm inline-flex items-center gap-1 h-[15px]">
                    <StarIcon />4
                  </div>
                  <p className="mb-0 text-xs text-[#130f268a]">321 Reviews</p>
                </div>
                <p className="text-[#130F26] mb-0 mt-2 px-2">₹ 3,136</p>
                <p className="text-[#4CA72C] text-[11px] mb-0 py-3 px-2">
                  Offer available
                </p>
                <p className="text-[#130f268a] text-xs mb-0 pb-4 px-2">
                  {items.tubeType}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Show More/Less Buttons */}
      <div className="flex justify-center">
        {!isExpanded ? (
          visibleItems < filteredTyres.length && (
            <button
              onClick={showMoreItems}
              className="font-normal text-base capitalize text-black/50 border border-black/50 rounded-md px-6 py-2.5 mt-4"
            >
              View More
            </button>
          )
        ) : (
          <button
            onClick={showLessItems}
            className="font-normal text-base capitalize text-black/50 border border-black/50 rounded-md px-6 py-2.5 mt-4"
          >
            View Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Tyres;
