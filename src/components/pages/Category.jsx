import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

function Category({ addToCart }) {
  

  const { categoryName } = useParams();   // 🔥 dynamic value

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryMap = {
  men: "Clothes",
  women: "Clothes",
  accessories: "Miscellaneous"
};

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(data => {

        const filtered = data.filter(item =>
          item.category.name === categoryMap[categoryName?.toLocaleLowerCase()]
         
        );

        setProducts(filtered);
        setLoading(false);
      });

  }, [categoryName]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-6 capitalize">
        {categoryName} Collection
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(item => (
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