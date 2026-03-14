import React, { useState } from "react";
import { Link , NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  FaShoppingBag,
  FaSearch,
  FaBars,
  FaTimes
} from "react-icons/fa";


const Navbar = ({cart,item , search, setSearch}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {  loginWithRedirect  ,  isAuthenticated ,logout} = useAuth0();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 ">
      <div className="max-w-7xl  mx-auto px-6 py-4 flex items-center justify-between ">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
  <img className=" h-20 w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTL1wtcIfOGJvgmL3ixM3-42wc3ZXRHJ0gCw&s" alt="" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex  sm:p-5 gap-8  font-semibold items-center  ">
          <li> 
   <NavLink
       to="/"
       end
       className={({ isActive }) =>
       isActive ? "text-green-600 font-semibold" : "text-black"
      }>
            Home
   </NavLink>
          </li>

          <li>
                <NavLink
                to="/shop"
                className={({isActive})=>
                  isActive ? "text-green-600 font-semibold" : "text:black"
                }>
                  Shop

                </NavLink>
          </li>

          {/* Categories Dropdown */}
          <li className="relative group cursor-pointer">
            <span className="block py-2 hover:text-green-500 transition">
                 Categories              
            </span>

            <ul className="absolute left-0 top-8 w-40 bg-white text-black shadow-lg rounded-md hidden group-hover:block ">
              <li className="px-4 py-2 hover:bg-gray-100 hover:text-red-500">
                <NavLink
                to="/category/men"
                end
                 className={({isActive})=>
                  isActive ? "text-green-600 font-semibold" : "text-black"
                 }
                >
                      Men
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink
                to="/category/women"
                end
                className={({isActive})=>
                isActive ? "text-green-600 font-semibold" : " text-black"
                }>
                  Women
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink
                 to="/category/accessories"
                 end
                 className={({isActive})=>
                  isActive ? "text-green-600 font-semibold" : "text-black"
                 }>
                    Accessories
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
            to="/sale"
            end
            className={({isActive})=>
            isActive ? "text-green-600 font-semibold" :" text-red-500"}>
                    Sale
            </NavLink>
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
           {
            isAuthenticated ? <button className="py-1 px-2 rounded   bg-green-500" onClick={()=> logout({returnTo: window.location.origin})}>Log out</button>
            :    <button className="py-1 px-2 rounded bg-green-500" onClick={()=>loginWithRedirect({
      appState: { returnTo: window.location.pathname }
    })}>Login</button>
           }
      

         
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
        <div className="  grid  grid-row-2">    
          <div className=" mx-14 flex  ml- items-center border border-gray-300 rounded-full px-3 py-1 focus-within:border-green-500 transition">
            <FaSearch className="text-gray-500 mr-2" />
            <input
               
              type="text"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              placeholder="Search..."
              className="outline-none bg-transparent text-sm w-40"
            />
          </div>
           <div className="   bg-white shadow-md px-2 py-4 space-y-4 font-semibold flex flex-col  gap-2 ">
            <NavLink
            to="/" onClick={()=> setIsOpen(false)}
            end
            className={({isActive})=>
            isActive ? "text-green-600 font-semibold" : " text-black"
          }
            >
              Home
            </NavLink>

            <NavLink onClick={()=> setIsOpen(false)} to="/shop" 
            end
            className={({isActive})=>
            isActive ? "text-green-600 font-semibold" :"text-black"}>
                    Shop
            </NavLink>
          
          <NavLink onClick={()=>setIsOpen(false)} to="/sale" className={({isActive})=>
          isActive ? "text-green-600 font-semibold" : " text-black"}>
             Sale
          </NavLink>
           <NavLink onClick={()=>setIsOpen(false)} to="category/men" end className={({isActive})=>
          isActive ? "text-green-600 font-semibold" :" text-black"
          }>Men</NavLink>
          
          <NavLink onClick={()=>setIsOpen(false)} to="/category/women" end className={({isActive})=>
          isActive ? "text-green-600 font-semibold" :"text-black"}>
                  Women
          </NavLink>
          <NavLink onClick={()=>setIsOpen(false)}  to="/category/accessories" end className={({isActive})=>
          isActive ? "text-green-600 font-semibold" :"text-black"}>Accessories</NavLink>
      
        </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;