import React from "react";

const Card = ({ className }) => {
  return (
    <div className={`card relative ${className}`}>
      <span className="new bg-[#dbcec6] px-[1rem] py-[1.3rem] rounded-full absolute font-bold text-white text-sm rotate-[20deg] md:left-[16rem] top-[-1rem]">
        New
      </span>
      <div className="background bg-[#244d4d] opacity-[0.050] w-[19rem] h-[19rem] rounded-sm"></div>
      <div className="item-content absolute top-0 p-10">
        <h2 className="item-name text-[#3d3d3f] text-[1.4rem] pb-[1rem]">
          Abstract Art
        </h2>
        <div className="item-price text-[#3d3d3f] flex gap-4">
          <p className="price text-[1.1rem]">$35.00 USD </p>
          <span className="old-price line-through text-gray-400 text-[1rem]">
            $55.00 USD
          </span>
        </div>
      </div>
      <div className="product-img">
        <img
          src="assets/demoPic.png"
          alt="Abstract art"
          className="absolute w-[13.5rem] top-[9rem] left-[2.6rem] shadow-lg shadow-black/80"
        ></img>
      </div>
    </div>
  );
};

export default Card;
