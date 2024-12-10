"use client";
import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Card from "../Card/Card";
import axios from "axios";

const Featured = ({ className, type }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const upperCasedType = type.charAt(0).toUpperCase() + type.slice(1);

  useEffect(() => {
    // 'async' means this function can wait for something to happen without stopping everything else
    const fetchData = async () => {
      try {
        setLoading(true);
        // 'await' means wait for this internet request to finish before moving to the next line
        const response = await axios.get(
          // This is the web address where we're getting the products from, address is stored safely in .env file,
          // populate=* allows img to show in data
          process.env.NEXT_PUBLIC_API_URL +
            `/products?populate=*&[filters][type][$eq]=${type}`,
          {
            headers: {
              // 'Authorization' is how we prove we have permission
              // We're adding "bearer" and then a special token (another secret key)
              Authorization: "bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
            },
          }
        );
        // console.log("respone:", response);
        setProducts(response.data.data);
      } catch (err) {
        // console.error("Fetch Error Details:", err.response);
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log("Data:", products);

  const handleClick = () => {
    console.log("Shop page");
  };

  return (
    <div className="features">
      <div className={`flex justify-between items-center ${className}`}>
        <h1 className="md:text-[2.1rem] text-[#4d5d53] font-medium">
          {upperCasedType} Products
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
      <div className="flex justify-between mb-[15rem]">
        {error
          ? "Something went wrong!"
          : loading
          ? "Loading..."
          : products?.map((item) => <Card item={item} key={item.id} />)}
      </div> {/*create better loading*/}
    </div>
  );
};

export default Featured;
