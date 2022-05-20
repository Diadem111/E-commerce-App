// import { useState } from "react";
// import { Navigate } from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
// import styleSheet from "../src/styleSheet/layout.css"
// import l from "../src/styleSheet/"
// import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import Home from "./components/Home";
import AdminPage from "./components/AdminPage";
import Register from "./pages/Register";
import ProductInfo from "./pages/ProductInfo";
import Flutterwave from "./pages/Flutterwave"
import Cart from "./pages/Cart";
import Login from "./pages/Login"
import "../src/styleSheet/layout.css"
import "../src/styleSheet/product.css"
import DeleteProduct from "./components/DeleteProduct";
const App = ()=>{
  
 
  return (
    <>
    {/* <NavBar/> */}
    {/* <Home/> */}
     <Routes>
     {/* <Route path="/" element={<Home/>}/> */}
     <Route path="/" element={<Homepage/>}/>
     {/* <Route path="/login" element={<LoginPage/>}/> */}
     <Route path="/login" element={<Login/>}/>
     <Route path="/productInfo/:productid" element={<ProductInfo/>}/>
     <Route path="/cart" element={<Cart/>}/>
     <Route path="/register" element={<Register/>}/>
      <Route path="/admin-page" element={<AdminPage/>}/>
      <Route path="/delete-product" element={<DeleteProduct/>}/>
      <Route path="/flutterwave" element={<Flutterwave/>}/>
            {/* <Route path="/contact" element={<Contact/>}/> */}
      {/* <Route path="/transfer" element={<Transfer/>}/> */}
      {/* <Route path="*" element={<Navigate to="/about"/>}/> */}
      {/* <Route path="/contact/:id" element={<ContactDetails/>}/> */}
    </Routes> 
  
      </>
    
   
  )
  }
  
export default App;
