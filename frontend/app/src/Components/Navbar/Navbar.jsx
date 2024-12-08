"use client";
import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white sticky top-0 z-10">
      <div className="navbar flex justify-between items-center mt-4 py-4">
        <div className="brand-logo">
          <img src="assets/logo.png" alt="Brand logo" className="md:w-48"></img>
        </div>
        <div className="cart md:flex gap-5 items-center">
          <ul className="md:flex gap-5 cursor-pointer">
            <li>Home</li>
            <li>Shop</li>
            <li>About Me</li>
            <li>Login</li>
          </ul>
          <div className="quantity-icon absolute bg-[#7b8d6a] rounded-2xl px-2 w-0 h-4 md:top-[2.9rem] md:right-[.5rem] flex justify-center items-center mobile:top-10 mobile:right-[2.5rem] text-white">
            <span className="quantity text-sm">0</span>
          </div>
          <div className="bag-icon cursor-pointer" onClick={() => setOpen(!open)}>
            <FaShoppingBag size="1.2rem" />
          </div>
        </div>
      </div>
      {open ? <Cart/> : ''}
    </div>
  );
};

export default Navbar;
