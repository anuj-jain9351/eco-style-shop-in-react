import {  Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import ProductDetails from "./components/pages/ProductDetails";
import Cart from "./components/pages/Cart";
import Navbar  from './components/common/Navbar';
import Footer from "./components/common/Footer";
import { useState } from "react";
import Login from "./components/pages/Login";
import Men from "./category/Men";

function App() {

  const [cart ,setCart] = useState([]);
  const [search,setSearch] = useState("");

  
   const addToCart = (product) => {
  setCart((prevCart) => {

    // check karo product already cart me hai ya nahi
    const existingItem = prevCart.find(
      (item) => item.id === product.id
    );


    
    // agar mil gaya
    if (existingItem) {
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    


    // agar nahi mila
    return [...prevCart, { ...product, quantity: 1 }];
  });
};

const removeCart = (product)=>{
  setCart((prevCart)=>{
    const existingItem = prevCart.find(
      item => item.id === product.id 
    );
    if(existingItem ){
     return  prevCart.map((item)=>

       item.id === product.id ?{...item,quantity: item.quantity > 1 
          ? item.quantity - 1 
          : 1}:item
      );
    }

    


   return [...prevCart, { ...product, quantity: 1 }];
  }) 
}

  const remove = (indexRemove)=>{

  setCart(prev=> prev.filter((item , index)=>index!==indexRemove));
}
  return (
    <div>
<Navbar cart={cart} search={search} setSearch={setSearch} />
<main className="min-h-screen flex flex-col">
<Routes>
<Route path="/" element={<Home cart={cart} setCart={setCart} addToCart={addToCart} removeCart={removeCart} search={search} />}/>
<Route path="/cart" element={<Cart cart={cart} remove={remove} addToCart={addToCart} removeCart={removeCart}/>}/>
<Route path="/shop" element={<Shop/>}/>
<Route path="/productDetails" element={<ProductDetails/>}/>
<Route path="/login" element={<Login/>}/>

<Route path="/men" element={<Men/>}/>

</Routes>
</main>
<Footer/>
</div>
  );
}

export default App;