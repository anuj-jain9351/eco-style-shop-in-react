import {  Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import ProductDetails from "./components/pages/ProductDetails";
import Cart from "./components/pages/Cart";
import Navbar  from './components/common/Navbar';
import Footer from "./components/common/Footer";

function App() {
  return (
    <div>
<Navbar />
<main className="min-h-screen flex flex-col">
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/shop" element={<Shop/>}/>
<Route path="/productDetails" element={<ProductDetails/>}/>
<Route path="/cart" element={<Cart/>}/>

</Routes>
</main>
<Footer/>
</div>
  );
}

export default App;