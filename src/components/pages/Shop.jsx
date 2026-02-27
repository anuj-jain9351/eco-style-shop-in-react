import React, { useEffect, useState } from "react";

function Shop({ addToCart }) {

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setFiltered(data.products);
        setLoading(false);
      });
  }, []);

  // 🔥 FILTER + SORT LOGIC

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">


      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          
        </h1>

        <select
          className="border px-3 py-2 rounded"
          
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row gap-10">

        <div className="md:w-1/4 bg-white shadow-md p-6 rounded-lg h-fit">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Price Range</h3>
            <div className="flex gap-3">
              <input
                type="number"
                placeholder="Min"
                className="w-1/2 border rounded px-2 py-1"

              />
              <input
                type="number"
                placeholder="Max"
                className="w-1/2 border rounded px-2 py-1"

              />
            </div>
          </div>

          <button
             className="w-full bg-black text-white py-2 rounded"
          >
            Reset Filters
          </button>
        </div>

   
        <div className="md:w-3/4">
          
            <p className="text-center text-gray-500">Loading...</p>
          
            <p className="text-center text-gray-500">
              No products found 
            </p>
           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
                <div
          
                  className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
                >
                  <img
                    className="w-full h-56 object-contain p-4 hover:scale-110 transition"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                      
                    </h3>
                    <p className="text-gray-700 font-bold mb-3">
                      
                    </p>

                    <button
                      
                      className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              
            </div>
          
        </div>

      </div>
    </div>
  );
}

export default Shop;