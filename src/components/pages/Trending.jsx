import React from "react";
import menimg from '.././../assets/men.jpg' 
import women from '.././../assets/women.jpg'
import boy from '.././../assets/boy.png'
import Casual from '.././../assets/Casual.jpg'

const products = [
  {
    id: 1,
    name: "Men Oversized T-Shirt",
    price: 899,
    image: menimg
 },
  {
    id: 2,
    name: "Women Summer Dress",
    price: 1499,
    image: women
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 1999,
    image: boy
  },
  {
    id: 4,
    name: "Casual Hoodie",
    price: 1299,
    image: Casual
},
];

function TrendingFashion() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
           Trending Fashion
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-96 object-cover rounded-xl group-hover:scale-105 transition duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold">
                  Shop Now
                </button>
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600 mt-1">₹{item.price}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrendingFashion;