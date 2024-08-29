import React, { useState, useEffect, useRef } from "react";
import { DropdownIcon } from "./Common/Icon";

export const FilterDropdown = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, options]);

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
    inputRef.current.focus();
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setSearchQuery(option);
    setIsOpen(false);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && filteredOptions.length > 0) {
      handleSelectOption(filteredOptions[0]); // Select the first filtered option
    } else if (e.key === "ArrowDown") {
      setIsOpen(true); // Open dropdown on ArrowDown
    }
  };

  return (
    <div className="relative max-[450px]:w-full" ref={dropdownRef}>
      <div
        className="border-[2px] border-gray-300 rounded text-sm w-full flex justify-between items-center"
        onClick={handleToggleDropdown}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className="px-2 py-1 outline-none cursor-pointer w-full"
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <DropdownIcon />
      </div>
      {isOpen && (
        <ul className="absolute top-full left-0 right-0 border border-gray-300 bg-white z-10 mt-1 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelectOption(option)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                {option}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results</li>
          )}
        </ul>
      )}
    </div>
  );
};
