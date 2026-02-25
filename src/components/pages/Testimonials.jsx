import React from 'react'

function Testimonials(){
    const testimonials = [
  {
    id: 1,
    name: "Riya Sharma",
    review: "Amazing quality and fast delivery. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Aman Verma",
    review: "Fabric is very comfortable and size fits perfectly.",
    rating: 4,
  },
  {
    id: 3,
    name: "Neha Gupta",
    review: "Customer support was very helpful. Loved the experience!",
    rating: 5,
  },

  
];
  return (
    <div>
   <section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    
    <h2 className="text-3xl font-bold text-center mb-12">
      What Our Customers Say
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((item) => (
        <div
          key={item.id}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
        >
          

          <div className="flex mb-4 text-yellow-400">
            {Array(item.rating)
              .fill()
              .map((_, index) => (
                <span key={index}>★</span>
              ))}
          </div>


          <p className="text-gray-600 mb-4">
            "{item.review}"
          </p>


          <h4 className="font-semibold">
            {item.name}
          </h4>
          

        </div>
      ))}
    </div>

  </div>

  <div className="text-center mt-10">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
             View All Reviews
          </button>
  </div>

</section> 
    </div>
  )
}

export default Testimonials
