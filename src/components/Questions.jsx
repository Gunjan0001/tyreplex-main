import React from "react";
import questions from "../assets/images/png/haveQuestion.png";
const Questions = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-6">
      <div className="bg-[#FFEAAA]  rounded-md shadow-[0px_0px_1px_rgba(0,0,0,0.12),0px_1px_0px_rgba(0,0,0,0.12)] px-4 py-7">
        <div className="flex flex-col justify-center items-center">
          <img className="w-[90px] max-h-[100px]" src={questions} alt="" />
          <p className="font-bold mb-0 mt-4 text-center ">
            Have a question about Tyres
          </p>
          <p className=" text-center mb-0 mt-2 text-[#130f268a] text-sm">
            Get an answer in 24 hours from our experts
          </p>
          <input
            className="bg-white max-w-[500px] mx-auto min-w-[240px] sm:min-w-[500px] mt-3 text-[#130F26] rounded-[21px] shadow-[0px_1px_1px_#ffca28] border outline-none border-[#FFCA28] px-4 py-2"
            type="text"
            placeholder="Ask or search your question"
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default Questions;
