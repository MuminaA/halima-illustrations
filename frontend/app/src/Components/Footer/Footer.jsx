"use client";
import React from "react";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const handleContact = () => {
    window.location.href = "mailto:email@example.com";
  };

  const handleShop = () => {
    console.log("Shop page");
  };

  return (
    <div className="footer-container w-full flex justify-center bg-[#244d4d] md:h-[550px]">
      <div className="footer flex flex-col w-full md:mx-24">
        <div className="flex md:flex-row md:justify-between md:my-24 mobile:flex-col mobile:mx-10 mobile:my-16 mobile:gap-10">
          <h1 className="text-3xl text-white mobile:leading-10 font-rubik">
            Get your free quote for your personalized prints today.
          </h1>
          <div className="flex gap-4">
            <button
              className="text-lg text-white bg-[#3A5F5F] rounded-full py-3 px-10"
              onClick={handleContact}
            >
              Contact Us
            </button>
            <button
              className="text-lg text-black bg-[#ffffff] rounded-full py-3 px-10"
              onClick={handleShop}
            >
              Shop
            </button>
          </div>
        </div>
        <div className="mobile:mx-10 pb-14">
          <img src="assets/line.svg" className="w-full"></img>
        </div>
        <div className="md:flex md:flex-row justify-between text-white mobile:flex-col mobile:mt-14 mobile:mx-10 pb-14">
          <div className="flex flex-col gap-3 mobile:mb-4">
            <img src="assets/logo2.png" className="w-48"></img>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor
            </p>
            <a
              href="https://www.instagram.com/halima_illustrations/"
              target="_blank"
            >
              <FaInstagram size="1.5rem" />
            </a>
          </div>
          <div className="flex flex-col gap-3 mobile:mb-4">
            <h2>Entity types</h2>
            <ul className="text-gray-400 flex flex-col gap-3">
              <li>
                <a href="">FAQs</a>
              </li>
              <li>
                <a href="">Refund and Returns Policy</a>
              </li>
              <li>
                <a href="#AboutMe">About Us</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 mobile:mb-4">
            <h2>Services</h2>
            <ul className="text-gray-400 flex flex-col gap-3">
              <li>
                <a href="mailto:email@example.com">Contact Us</a>
              </li>
              <li>
                <a href="">Help Center</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 mobile:mb-4">
            <h2>Resources</h2>
            <ul className="text-gray-400 flex flex-col gap-3">
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
              <li>
                <a href="">Terms</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 mobile:mb-8">
            <h2>Support</h2>
            <ul className="text-gray-400 flex flex-col gap-3">
              <li>
                <a href="">Refund and Returns Policy</a>
              </li>
              <li>
                <a href="mailto:email@example.com">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center text-gray-400 mb-2">
          <span>Halima Illustrations &copy; 2024 </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
