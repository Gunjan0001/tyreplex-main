import React from "react";
import { RightTickIcon } from "./Common/Icon";

const Payment = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-6">
      <ul className="ps-0 flex flex-wrap items-center gap-2">
        <li className="text-[#6c757d] hover:text-[#ed1c24] transition-all ease-in-out duration-300">
          <a href="/">Home</a>
        </li>
        /
        <li className="text-[#6c757d] hover:text-[#ed1c24] transition-all ease-in-out duration-300">
          <a href="/">Tyres Dealers</a>
        </li>
        /
        <li className="text-[#6c757d] hover:text-[#ed1c24] transition-all ease-in-out duration-300">
          <a href="/">Tyres Dealers Ghaziabad</a>
        </li>
        <li className="text-[#6c757d]">SHREE HEMKUNT TYRES AND SERVICES</li>
      </ul>
      <div className="max-w-full mx-auto text-center shadow-md p-4 mt-7 mb-4 bg-white rounded-sm ">
        <p className="text-start font-bold mb-0">Payment Mode</p>
        <div className="flex flex-wrap items-center gap-1 sm:gap-5">
          <div className="flex items-center gap-2 sm:gap-3 mt-3">
            <RightTickIcon />
            <p className="mb-0 text-xs sm:text-sm text-[#130f26]">
              Deposit to Account
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 mt-3">
            <RightTickIcon />
            <p className="mb-0 text-xs sm:text-sm text-[#130f26]">
              Credit Card/ Debit Card
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 mt-3">
            <RightTickIcon />
            <p className="mb-0 text-start text-xs sm:text-sm text-[#130f26]">
              Wallets(Pay TM /Phonepe/Amazon etc)
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 mt-3">
            <RightTickIcon />
            <p className="mb-0 text-xs sm:text-sm text-[#130f26]">
              Net Banking
            </p>
          </div>
          <div className="flex items-center gap-1 sm:gap-3 mt-3  ms-2 sm:ms-0 ">
            <RightTickIcon />
            <p className="mb-0 text-xs sm:text-smtext-[#130f26]">UPI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
