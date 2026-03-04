import React, { useEffect, useState } from "react";

function Shop({ addToCart, search }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState("all"); 
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");

  const [filtered, setFiltered] = useState([]);

 
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10000")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  
  useEffect(() => {

    let updated = [...products];

    
    if (category !== "all") {
      updated = updated.filter(p => p.category === category);
    }

    //SEARCH FILTER
    if (search) {
      updated = updated.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    //PRICE FILTER
    if (minPrice !== "") {
      updated = updated.filter(p => p.price >= Number(minPrice));
    }

    if (maxPrice !== "") {
      updated = updated.filter(p => p.price <= Number(maxPrice));
    }

    //SORT
    if (sort === "low") {
      updated.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      updated.sort((a, b) => b.price - a.price);
    }

    setFiltered(updated);

  }, [products, category, minPrice, maxPrice, sort, search]);



  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Shop ({filtered.length} Products)
        </h1>

        <select
          className="border px-3 py-2 rounded w-full sm:w-auto"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row gap-8">

        {/* Sidebar */}
        <div className="w-full h-[300px] md:w-1/4 bg-white shadow-md p-6 rounded-lg space-y-6">

          {/* Category */}
          <div>
            <h3 className="font-medium mb-2">Category</h3>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded px-2 py-2"
            >
              <option value="all">All</option>
              <option value="smartphones">Smartphones</option>
              <option value="laptops">Laptops</option>
              <option value="mens-shirts">Men Shirts</option>
              <option value="womens-dresses">Women Dresses</option>
              <option value="fragrances">Fragrances</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <h3 className="font-medium mb-2">Price Range</h3>
            <div className="flex gap-3">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-1/2 border rounded px-2 py-1"
              />
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-1/2 border rounded px-2 py-1"
              />
            </div>
          </div>

          {/* Reset */}
          <button
            onClick={() => {
              setMinPrice("");
              setMaxPrice("");
              setCategory("all");
              setSort("");
            }}
            className="w-full bg-black text-white py-2 rounded"
          >
            Reset Filters
          </button>

        </div>

        {/* Products */}
        <div className="w-full md:w-3/4">

          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : filtered.length === 0 ? (
            <p className="text-center text-gray-500">No products found</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(product => (
                <div
                  key={product.id}
                  className="bg-white shadow-md rounded-xl overflow-hidden"
                >
                  <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="w-full h-48 object-cover p-4"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                      {product.title}
                    </h3>

                    <p className="font-bold mb-3">${product.price}</p>

                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-black text-white py-2 rounded"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Shop;