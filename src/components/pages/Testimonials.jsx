import React, { useEffect, useState } from "react";

function Testimonials() {

  const [testimonials, setTestimonials] = useState([]);
  const [showAll,setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data.comments);
      });
  }, []);

  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {(showAll ? testimonials : testimonials.slice(0,3).map((item) => (

              <div
                key={item.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              >

                <div className="flex mb-4 text-yellow-400">
                  ★★★★★
                </div>

                <p className="text-gray-600 mb-4">
                  "{item.body}"
                </p>

                <h4 className="font-semibold">
                  {item.user.username}
                </h4>

              </div>

            )))}

          </div>
        </div>
       
        <div className="text-center mt-10">
          <button
          
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            View All Reviews
          </button>
        </div>
       
      </section>
    </div>
  );
}

export default Testimonials;