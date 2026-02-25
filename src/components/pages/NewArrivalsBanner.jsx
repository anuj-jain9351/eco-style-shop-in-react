import React from "react";
import img from '.././../assets/NewArrivals.webp';

function NewArrivalsBanner() {
  return (
    <section className="relative h-[400px] w-full">

      {/* Background Image */}
      <img
        src={img}
        alt="New Collection"
        className="absolute w-full h-full object-cover"
         loading="lazy"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
           New Summer Collection 2026
        </h2>

        <p className="text-lg md:text-xl mb-6">
          Discover the latest trends in fashion
        </p>

        <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>

    </section>
  );
}

export default NewArrivalsBanner;