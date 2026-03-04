import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Cart = ({ setCart,cart,remove,addToCart,removeCart, isLoggedIn }) => {
  
  const navigate = useNavigate();

const handlePlaceOrder = () => {
  if (!isLoggedIn) {
    navigate("/login");
  } else {
    alert("Order Placed Successfully " );
    setCart([])
         
    
  }
};



  return (
    <div className="max-w-6xl mx-auto scroll-me-24  h-full">
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
            src={item.images?.[0]}
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
            
            <button onClick={() => removeCart(item) }  className="px-3 py-1 border">-</button>
            <span>{item.quantity}</span>
            <button onClick={()=> addToCart(item) } className="px-3 py-1 border">+</button>

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

  <div className=" flex justify-center item-center mt-14 ">
    
    <button 
      onClick={handlePlaceOrder}
     className=" p-2 rounded-sm border bg-green-500 text-white font-bold text-xl">Place Order</button>
 
  </div>
</div>
  );
};

export default Cart;