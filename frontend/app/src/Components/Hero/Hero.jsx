import React from "react";

const Hero = ({className}) => {
  return (
    <div className={`relative h-screen max-h-[46.4rem] ${className}`}>
      <div className="desktop-hero relative">
        <div className="hero-img w-full max-w-[70.32rem] absolute right-0">
          <img
            src="assets/Poster.png"
            alt="homepage image of art"
            className="w-full h-auto object-contain"
          ></img>
        </div>
      </div>
      <div className="hero-rectangle w-full max-w-[44rem] h-full max-h-[30rem] absolute bottom-[8rem] bg-[#ffffff66] backdrop-blur backdrop-brightness-100 flex items-center">
        <div className="pl-3">
          <h1 className="rectangle-title text-[#4d5d53] text-[4rem] font-bold">
            Welcome to Halima Illustrations
          </h1>
          <p className="text-[#3d3d3f] tracking-[0.2px] text-[1.5rem]">
            Discover beautiful, hand-drawn illustrations to add a pop of color
            to your home.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[8rem] absolute top-[5rem] left-[8rem]">
        <img src="assets/dots.png" alt="dots image"></img>
      </div>
    </div>
  );
};

export default Hero;
