import React from "react";
import { FaShippingFast, FaUndoAlt, FaLock, FaStar } from "react-icons/fa";

function WhyChooseUs() {
//   const features = [
//     {
//       id: 1,
//       icon: <FaShippingFast size={28} />,
//       title: "Free Shipping",
//       desc: "Free delivery on orders above ₹499",
//     },
//     {
//       id: 2,
//       icon: <FaUndoAlt size={28} />,
//       title: "Easy Returns",
//       desc: "7 day hassle-free return policy",
//     },
//     {
//       id: 3,
//       icon: <FaLock size={28} />,
//       title: "Secure Payment",
//       desc: "100% secure and encrypted checkout",
//     },
//     {
//       id: 4,
//       icon: <FaStar size={28} />,
//       title: "Premium Quality",
//       desc: "Carefully selected high-quality products",
//     },
//   ];


  const final = [
    { 
        id:1,
      icon: <FaShippingFast size={28} />,
      title: "Free Shipping",
      desc: "Free delivery on orders above ₹499",
    },
    {
        id:2,
      icon: <FaUndoAlt size={28} />,
      title: "Easy Returns",
      desc: "7 day hassle-free return policy",
    },
    {
        id:3,
              icon: <FaLock size={28} />,
      title: "Secure Payment",
      desc: "100% secure and encrypted checkout",
    },
    {
        id:4,
              icon: <FaStar size={28} />,
      title: "Premium Quality",
      desc: "Carefully selected high-quality products",
    }

]
  return (
    <div className="bg-white">

    <section className="   py-20 bg-gray-100 ">
        <h2 className=" text-3xl text-black font-bold text-center mb-12">Why choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8 px-6">
        {final.map((item)=>{
            return(
               
            <div  key={item.id}     
            className="bg-white text-black p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
    
           <p className="flex justify-center mb-4 text-red-500 p-4 rounder-full">{item.icon}</p>
                                      
           <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
          
           <p className="text-sm text-gray-600">{item.desc}</p>

  </div>
    
    )})}</div>
        
    </section>
    </div>
  );
}

export default WhyChooseUs;