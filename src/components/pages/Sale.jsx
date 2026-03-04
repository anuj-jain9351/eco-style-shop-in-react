// ModernSale.jsx
import React, { useEffect, useState } from "react";

function ModernSale({ addToCart,search }) {
  const [product,setProduct] = useState([]);
  const [filtered,setFiltered] = useState([]);
  const [loading,setLoading]= useState(true);
  const [time,setTime] = useState({});
  const [short,setShort] = useState("");
  const [minPrice,setMinPrice] = useState("");
  const [maxPrice,setMaxPrice] = useState("");

  useEffect(()=>{
    let uptade = [...product]
    if(minPrice !== ""){
     uptade = uptade.filter(p=>p.price >= minPrice); 
    }
    if(maxPrice !== ""){
      uptade = uptade.filter(p=>p.price <= maxPrice);
    }

    if(short === "low"){
      uptade.sort((a,b)=> a.price - b.price);
    }

    if(short === "high"){
      uptade.sort((a,b)=> b.price - a.price);
    }
    setFiltered(uptade)
  },[product,minPrice,maxPrice,short])


  useEffect(()=>{
    if(!search){
      setFiltered(product)
    }else{
      const result = product.filter((item)=>{
        
       return item.title.toLowerCase().includes(search.toLowerCase())
      })
      setFiltered(result)
    }
  },[search,product])

useEffect(()=>{
const endDate = new Date();
endDate.setDate(endDate.getDate()+2);
const timer = setInterval(()=>{

  const now = new Date();
  

  const difference = endDate - now;

  if(difference <= 0){
    clearInterval(timer);
    return;
  }


  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60  )) % 60);
  const seconds = Math.floor((difference /(1000))% 60);
  
setTime({hours,minutes,seconds})  
},1000)

return () => clearInterval(timer);


},[])


useEffect(()=>{
fetch("https://dummyjson.com/products")
 .then((res)=>  res.json())
 .then((data)=>{
  setTimeout(()=>{
setProduct(data.products);
setLoading(false);
  },2000)
 })
 .catch((err)=>{
  console.log("Error",err)
 })
},[])

const off = 30;
 
  return (
    <div className="bg-[#f9f9f9] min-h-screen">

      {/* HERO */}
      <section className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Mega Sale
        </h1>
        <p className="text-gray-400 mb-6">
          Up to 30% Off Selected Items
        </p>

        {/* ⏳ COUNTDOWN */}
        <div className="flex justify-center gap-10 text-center mt-6">
          <div>
            <p className="text-3xl font-bold">{time.hours }</p>
            <span className="text-sm text-gray-400">hours</span>
          </div>
          <div>
            <p className="text-3xl font-bold">{time.minutes}</p>
            <span className="text-sm text-gray-400">minutes</span>
          </div>
          <div>
            <p className="text-3xl font-bold">{time.seconds}</p>
            <span className="text-sm text-gray-400">seconds</span>
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        {/* SORT BAR */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold">
            Sale Products 
          </h2>

          <select
             value={short}
             onChange={(e)=>setShort(e.target.value)}
            className="border px-4 py-2 rounded-lg"
          >
            <option value="">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {/* LOADING */}
          <div>     
             {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
             ):filtered.length === 0?(
            <p className="text-center text-gray-500">
              No products found 
            </p>
           ):(
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {filtered.slice(0,6).map((item)=>{
                const newPrice = (item.price - (item.price * 30)/100).toFixed()
              
               
              return(
                <div
                key={item.id}
                         className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group"
                >
                  {/* IMAGE */}
                  <div className="relative">
                    <img
                    src={item.images?.[0]}
                    alt={item.title}
                      className="w-full h-64 object-contain p-6 group-hover:scale-110 transition duration-500"
                    />

                    <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                    {off} % OFF
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="font-medium mb-3 line-clamp-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-gray-400 line-through">
                        {item.price}
                      </span>
                      
                      <span className="text-black font-bold text-lg">
                         ${newPrice}      
                      </span>
                    </div>

                    <button
                    onClick={()=>addToCart({
                      ...item,
                      price:(item.price - (item.price * 30)/100).toFixed()
                    })}
                      className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
   
                  )})}</div>
                  )}
    </div>
        
      </section>

    </div>
  )
}

export default ModernSale;