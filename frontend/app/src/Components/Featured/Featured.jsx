"use client";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Card from "../Card/Card";

const Featured = ({ className }) => {

  const handleClick = () => {
    console.log("Shop page");
  };

  return (
    <div className="features">
      <div className={`flex justify-between items-center ${className}`}>
        <h1 className="md:text-[2.1rem] text-[#4d5d53] font-medium">
          Featured Products
        </h1>
        <div className="flex md:gap-[24px] items-center">
          <button
            className="text-lg hover:translate-x-3 transition duration-700 ease-in-out"
            onClick={handleClick}
          >
            See All
          </button>
          <div className="relative">
            <div className="rectangle bg-[#244d4d] w-[1.8rem] h-[1.5rem] opacity-[0.070]"></div>
            <FaArrowRightLong
              size="1.2rem"
              alt="arrow"
              className="absolute top-0 h-[1.5rem] right-[1.2rem] text-[#244d4d]"
            />
          </div>
        </div>
      </div>
      <Card className="mb-[18rem]" />
    </div>
  );
};

export default Featured;
