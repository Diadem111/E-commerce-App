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
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import ProductInfo from "./pages/ProductInfo";
import CartPage from "./pages/CartPage";
import "../src/styleSheet/layout.css"
import "../src/styleSheet/product.css"
const App = ()=>{
  
 
  return (
    <>
    {/* <NavBar/> */}
    {/* <Home/> */}
     <Routes>
     {/* <Route path="/" element={<Home/>}/> */}
     <Route path="/" element={<Homepage/>}/>

     <Route path="/login" element={<LoginPage/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/productInfo/:productid" element={<ProductInfo/>}/>
     <Route path="/cart" element={<CartPage/>}/>

       <Route path="/admin-page" element={<AdminPage/>}/>
            {/* <Route path="/contact" element={<Contact/>}/> */}
      {/* <Route path="/transfer" element={<Transfer/>}/> */}
      {/* <Route path="*" element={<Navigate to="/about"/>}/> */}
      {/* <Route path="/contact/:id" element={<ContactDetails/>}/> */}
    </Routes> 
  
      </>
    
   
  )
  }
  
export default App;
