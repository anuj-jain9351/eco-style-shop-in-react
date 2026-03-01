import React, { useEffect, useState } from "react";
import imgs from './.././../assets/banerimg.png';
import Trending from "./Trending";
import NewArrivalsBanner from "./NewArrivalsBanner";
import men from '.././../assets/HomeMen.jpg';
import women from '.././../assets/HomeWomen.jpg';
import kids from '.././../assets/kids.png';
import Sports from '.././../assets/Sports.jpg';
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import Shop from "./Shop";
import { Link } from "react-router-dom";

const Home = ({cart,addToCart,search}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const FilterSearch = products.filter(products=>{
   return products.title.toLowerCase().includes(search.toLowerCase() || " ")
  });

  const categories = [
    {
      name:"Men",
      img: men
    },
    {
      name:"Women",
      img: women
    },
    {
      name:"Kids",
      img: kids
    },
    {
      name:"Sports",
      img:Sports
    },
  ]

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(()=>{
          
         setProducts(data);
        setLoading(false);
        },2000)
      })
      .catch((err) => {
        console.log("Error fetching products:", err);
        setLoading(false);
      });
  }, []

);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-neutral-100 py-20  "
       style={{ backgroundImage: `url(${imgs})`}}
>
        <div className="max-w-7xl mx-auto  px-6 text-center ">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
            Sustainable Comfort for Everyday Life
          </h1>
          <p className="text-gray-800  mb-8 text-lg">
            Discover eco-friendly footwear designed for style and comfort.
          </p>
<Link to={"/shop"}>
          <button  className="bg-black  text-white px-8 py-3 rounded-md hover:bg-gray-800 transition">
            Shop Now
          </button>
</Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Featured Products
          </h2>

          {loading ? (
            <p className=" text-center text-gray-500">Loading products...</p>
          ) : (
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8   ">
              {FilterSearch.slice(0,4).map((product) => (
                
                <div
                  key={product.id}
                  className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-3xl hover:-translate-y-2   "
                
                >
                  
                  <img
                    src={product.images}
                    alt={product.title}
                    className="w-full h-64 object-contain p-4  hover:scale-105"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      ${product.price}
                    </p>
                    <Link to={"/shop"}>
                    <button className="mt-3   w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition ">
                      Shop New
                    </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Category Section */}
        <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop By Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg cursor-pointer h-64"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full  object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Trending/>
    <NewArrivalsBanner/>
    <WhyChooseUs/>
    <Testimonials/>
    </div>
  );
};

export default Home;