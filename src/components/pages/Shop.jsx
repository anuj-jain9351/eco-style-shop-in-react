import React, { useEffect, useState } from "react";

function Shop({ addToCart,search }) {
  const [products ,setProducts] = useState([])
  const [loading,setLoading] = useState(true)
  const [filtered,setFiltered] = useState([])
  const [minPrice,setMinPrice] = useState("");
  const [maxPrice,setMaxPrice] = useState("");
  const [short , setShort] = useState("");

const fiterProduct = filtered.filter((product)=>{
    return product.title.toLowerCase().includes((search || " ").toLowerCase());
   })


 
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      });
  }, []);
 
  
   

  // 🔥 FILTER + SORT LOGIC
useEffect(()=>{
  let  updated = [...products];
  if(minPrice !== ""){
    updated = updated.filter(p=> p.price >= Number(minPrice));
  }

  if(maxPrice !== ""){
    updated = updated.filter(p=> p.price <=  Number(maxPrice));
  }

  if(short === "low"){
    updated.sort((a,b)=> a.price - b.price)
  }

  if(short === "high"){
    updated.sort((a,b)=> b.price - a.price)
  }
  setFiltered(updated);
},[minPrice,maxPrice,products,short]);


  
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">


      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          shop ({filtered.length} Products)
        </h1>

        <select
          className="border px-3 py-2 rounded"
          value={short}
          onChange={(e)=>setShort(e.target.value)}
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
                value={minPrice}
                onChange={(e)=> setMinPrice(e.target.value)}
                className="w-1/2 border rounded px-2 py-1"

              />
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e)=>setMaxPrice(e.target.value)}
                className="w-1/2 border rounded px-2 py-1"

              />
            </div>
          </div>

          <button
          onClick={()=>{
            setMinPrice("");
            setMaxPrice("");
          }}
             className="w-full bg-black text-white py-2 rounded"
          >
            Reset Filters
          </button>
        </div>

   
        <div className="md:w-3/4">
           {loading ?(
             <p className="text-center text-gray-500">Loading...</p>
           ) :filtered.length === 0?(
            <p className="text-center text-gray-500">
              No products found 
            </p>
           ):(
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {fiterProduct.map(product =>
      
                <div
                    key={product.id}
                  className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
                >
                  <img
                  src={product.images}
                  alt={product.title}
                    className="w-full h-56 object-contain p-4 hover:scale-110 transition"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-700 font-bold mb-3">
                      ${product.price}
                    </p>

                    <button
                   onClick={()=>addToCart(product)}
                      className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div> 
          )}    
            </div>
          )}
            
          
        </div>
           
      </div>
           
    </div>
  );
}

export default Shop;