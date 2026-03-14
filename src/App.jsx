import {  Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
// import ProductDetails from "./components/pages/ProductDetails";
import Cart from "./components/pages/Cart";
import Navbar  from './components/common/Navbar';
import Footer from "./components/common/Footer";
import { useEffect, useState } from "react";
import Login from "./components/pages/Login";
import Category  from "./components/pages/category";
import Sale from "./components/pages/Sale";
import ProductDetailpage from "./components/pages/ProductDetailpage";


function App() {

  const [cart ,setCart] = useState( ()=> {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});


  const [search,setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
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

useEffect(()=>{
  localStorage.setItem("cart",JSON.stringify(cart));
},[cart]);

  return (
    <div>
<Navbar cart={cart} search={search} setSearch={setSearch} />
<main className="min-h-screen flex flex-col">
<Routes>
<Route path="/" element={<Home cart={cart} setCart={setCart} addToCart={addToCart} removeCart={removeCart} search={search} />}/>
<Route path="/cart" element={<Cart cart={cart} setCart={setCart} remove={remove} addToCart={addToCart} removeCart={removeCart} />}/>
<Route path="/shop" element={<Shop addToCart={addToCart} search={search} /> }/>
{/* <Route path="/productDetails" element={<ProductDetails/>}/> */}
<Route path="/login" element={<Login  setIsLoggedIn={setIsLoggedIn} />}/>
<Route path="/sale" element={<Sale addToCart={addToCart} search={search}/>}/>
<Route path="/category/:categoryName" element={<Category addToCart={addToCart} search={search}/>} />
<Route path="/productDetailpage" element={<ProductDetailpage cart={cart} setCart={setCart} remove={remove} addToCart={addToCart} removeCart={removeCart} isLoggedIn={isLoggedIn}/>}/>
</Routes>
</main>
<Footer/>
</div>
  );
}

export default App;