import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Category({ addToCart, search }) {

  const { categoryName } = useParams();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [loading, setLoading] = useState(true);

  const categoryMap = {
   men: "mens-shirts",
    women: "womens-dresses",
    accessories: "home-decoration"
  };

 
  useEffect(() => {
    setLoading(true);

    const SelectedCategoty = categoryMap[categoryName?.toLowerCase()];
    
    if( !SelectedCategoty){
      setFilteredProducts([]);
      setLoading(false);
      return;
    }

    fetch(`https://dummyjson.com/products/category/${SelectedCategoty}`)
        .then(res => res.json())
      .then(data => {

        const selectedCategory =
          categoryMap[categoryName?.toLowerCase()];

        const result = data.products.filter(item =>
          item.category?.toLowerCase() ===
          selectedCategory?.toLowerCase()
        );

        setProducts(data.products);
        setFilteredProducts(result);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });

  }, [categoryName]);



  // 🔥 Search filter
  useEffect(() => {
    if (!search) {
      setFilteredProducts(products);
    } else {
      const result = products.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(result);
    }
  }, [search, products]);



  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-6 capitalize">
        {categoryName} Collection
      </h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(item => (
            <div key={item.id} className="bg-white shadow rounded p-4">

              <img
                src={item.images?.[0]}
                alt={item.title}
                className="w-full h-56 object-contain"
                
              />

              <h3 className="mt-4 font-semibold">{item.title}</h3>

              <p className="font-bold">${item.price}</p>

              <button
                onClick={() => addToCart(item)}
                className="mt-3 w-full bg-black text-white py-2 rounded"
              >
                Add to Cart
              </button>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Category;