import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {

  return (
    <footer className="bg-black text-white mt-20">
      
       <div className="flex gap-5 justify-center md:justify-start pt-4  ml-10">
       
         <a 
           href="https://www.instagram.com/aankirsharma/" 
           target="_blank" 
           rel="noopener noreferrer"
         >
           <FaInstagram 
             className="text-xl sm:text-2xl hover:text-orange-500 transition cursor-pointer" 
           />
         </a>
       
         <a 
           href="https://x.com/ecommerce?lang=en" 
           target="_blank" 
           rel="noopener noreferrer"
         >
           <FaTwitter  
             className="text-xl sm:text-2xl hover:bg-black transition cursor-pointer" 
           />
         </a>
       
         <a 
           href="https://www.facebook.com/profile.php?id=61585168343265" 
           target="_blank" 
           rel="noopener noreferrer"
         >
           <FaFacebook
             className="text-xl sm:text-2xl hover:text-blue-600 transition cursor-pointer" 
           />
         </a>
       
         <a 
           href="https://www.youtube.com/watch?v=AXF4WhoDLus" 
           target="_blank" 
           rel="noopener noreferrer"
         >
           <FaYoutube 
             className="text-xl sm:text-2xl hover:text-red-600  transition cursor-pointer" 
           />
         </a>
       
       </div>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
  
  
        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-400">
            <li> 
              <a href="#" className="hover:text-white transition">Men</a>
            </li>

            <li>
               <a href="#" className="hover:text-white transition">Women</a>
            </li>

            <li>
               <a href="#" className="hover:text-white transition">New Arrivals</a> 
            </li>

            <li>
            <a href="#" className="hover:text-white transition">Sale</a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Sustainability</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Shipping</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-3 text-sm">
            Get updates on new products and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-white text-black px-4 py-2 rounded-r-md font-semibold hover:bg-gray-200">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} EcoStyle
      </div>
    </footer>
  );
};

export default Footer;
// export default Footer
