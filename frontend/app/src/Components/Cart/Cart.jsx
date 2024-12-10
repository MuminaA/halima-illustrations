import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  return (
    <div className="cart absolute right-[.01rem] md:top-20 mobile:top-16 z-50 bg-white p-5 shadow-lg mobile:max-w-[18.45rem] mobile:right-10">
      <h2 className="mb-7 text-gray-400 text-xl">Products in cart</h2>
      <div
        className="overflow-y-auto max-h-[350px]"
      > {/*Add a limit to how many products show */}
        <div className="item flex gap-5 mb-5 items-center" key="">
          <img src="assets/demoPic.png" alt="" className="w-20 h-[100px] object-cover" />
          <div className="details">
            <h2 className="mb-4 text-gray-400 text-lg capitalize">Art</h2>
            <p className="text-sm mb-2.5">Lorem ipsum dolor sit amet...</p> {/*Add a limit to how long desc is*/}
            <div className="price font-semibold">$0.00</div>
          </div>
          <MdDeleteOutline size={20} color="" className="text-red-500 cursor-pointer"/>
        </div>
      </div>
      <div className="total flex justify-between font-bold">
        <span className="mb-5">SUBTOTAL</span>
        <span className="">$0.00</span>
      </div>
      <button className="flex bg-gray-200 py-2 px-8 rounded-sm shadow-md mb-5 text-sm font-semibold">
        PROCEED TO CHECKOUT
      </button>
      <span className="reset text-red-500 text-sm cursor-pointer">
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
