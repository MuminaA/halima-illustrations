"use client";
import React from "react";
import AboutmeCard from "../AboutmeCard/AboutmeCard";
import AboutmeImg from "../AboutmeImg/AboutmeImg";

const Aboutme = ({ className }) => {
  const handleContact = () => {
    window.location.href = "mailto:email@example.com";
  };

  return (
    <div className={`features ${className}`}>
      <div className="flex justify-between items-center mb-[6rem]">
        <h1 className="md:text-[2.1rem] text-[#4d5d53] font-medium">
          About Me
        </h1>
        <div className="flex md:gap-[24px] items-center">
          <button
            className="text-lg text-[#5f5f64] bg-[#f4f6f6] px-[1.3rem] py-[.5rem] rounded-md drop-shadow-xl hover:scale-90 duration-500 ease-in-out"
            onClick={handleContact}
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <AboutmeCard />
        <AboutmeImg />
      </div>
    </div>
  );
};

export default Aboutme;
