import React, { useState } from "react";

const Cart = ({ cart,remove,addToCart,removeCart}) => {
  
  



  return (
    <div className="max-w-6xl mx-auto p-6">
  <h2 className="text-3xl font-bold mb-10 text-center">
    Your Cart
  </h2>

  {cart.length === 0 ? (
    <p className="text-center text-gray-500">Cart is empty</p>
  ) : (
    <div className="space-y-6">
      {cart.map((item, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-md rounded-lg p-4"
        >
          {/* Left - Image */}
          <img
            src={item.images}
            alt={item.title}
            className="w-28 h-28 object-contain"
          />

          {/* Center - Details */}
          <div className="flex-1 px-6 text-center sm:text-left">
            <h3 className="font-extrabold">{item.title}</h3>
            <p className="text-gray-600 font-bold">${item.price}</p>
            <p className=" text-gray-600 "><span className="font-semibold">description-</span>{item.description}</p>
            
          </div>

          {/* Right - Actions */}
          <div className="flex items-center gap-4">
            
            <button onClick={() => addToCart(item)}  className="px-3 py-1 border">+</button>
            <span>{item.quantity}</span>
            <button onClick={()=> removeCart(item) } className="px-3 py-1 border">-</button>

            <button
              onClick={() => remove(index)}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
  );
};

export default Cart;