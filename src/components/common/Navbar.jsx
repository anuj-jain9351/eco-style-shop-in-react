import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaSearch,
  FaUser,
  FaBars,
  FaTimes
} from "react-icons/fa";


const Navbar = ({cart,item , search, setSearch}) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          EcoStyle
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex sm:p-5 gap-8  font-semibold items-center ">
          <li>
            <Link to="/" className="block py-2 hover:text-green-500 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/shop" className="block py-2 hover:text-green-500 transition">
              Shop
            </Link>
          </li>

          {/* Categories Dropdown */}
          <li className="relative group cursor-pointer">
            <span className="block py-2 hover:text-green-500 transition">
              Categories
            </span>

            <ul className="absolute left-0 top-8 w-40 bg-white text-black shadow-lg rounded-md hidden group-hover:block">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/category/men">Men</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/category/women">Women</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/category/accessories">Accessories</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/sale" className="text-red-500 hover:opacity-80">
              Sale
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-5">

          {/* Search (Desktop Only) */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-full px-3 py-1 focus-within:border-green-500 transition">
            <FaSearch className="text-gray-500 mr-2" />
            <input
               
              type="text"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              placeholder="Search..."
              className="outline-none bg-transparent text-sm w-40"
            />
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative text-xl">
          
            <button  >
              <FaShoppingBag className="hover:text-green-500 transition" />
            </button>

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
            {cart.length}
            </span>
          </Link>

          {/* Profile */}
          <Link to={"/login"}>      
              <FaUser className="text-xl cursor-pointer hover:text-green-500 transition" />
      </Link>

          {/* Hamburger (Mobile Only) */}
          <button
            className="md:hidden text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="   bg-white shadow-md px-10 py-4 space-y-4 font-semibold flex  gap-4">
          <Link className="mt-3.5" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/category/men" onClick={() => setIsOpen(false)}>Men</Link>
          <Link to="/category/women" onClick={() => setIsOpen(false)}>Women</Link>
          <Link to="/category/accessories" onClick={() => setIsOpen(false)}>Accessories</Link>
          <Link to="/sale" onClick={() => setIsOpen(false)} className="text-red-500">
            Sale
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;