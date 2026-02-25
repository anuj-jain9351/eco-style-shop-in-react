import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          EcoStyle
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8 font-semibold">
          <Link className="hover:text-green-500 transition" to="/">
            Home
          </Link>
          <Link className="hover:text-green-500 transition" to="/shop">
            Shop
          </Link>
          <Link className="hover:text-green-500 transition" to="/cart">
            Cart
          </Link>
        </div>

        {/* Cart Button */}
        <Link
          to="/cart"
          className="  px-4 py-2 rounded-md  transition"
        >
          <FaShoppingBag />
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;