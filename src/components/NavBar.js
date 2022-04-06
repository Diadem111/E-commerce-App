import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar() {
  let image = window.location.origin + "/images/logo-removebg-preview.png";
    return (
    <>
  < nav class="navbar navbar-expand-sm navbar-dark " style={{backgroundColor:'rgb(43,44,170)'}}>
  <div class="container-fluid text-light">
    <a class="navbar-brand" to="/">Logo</a>
    <small>Free shipping order</small>
    <div class="collapse navbar-collapse float-end " id="mynavbar">
    </div>
    <button class="btn  btn-outline float-end border-1" type="button" style={{backgroundColor:'rgb(8,14,44)',borderRadius:'10px',color:'#fafafa'}}>Dont miss out.Subscribe now</button>
  </div>
</nav>

     {/* the second navBar */}

     <nav class="navbar navbar-expand-sm navbar-dark border-top-0 border-bottom-0 rounded-bottom " style={{height:'75px', backgroundColor:'rgb(77,19,209)'}}>
  <div class="container-fluid ">
    <a class="navbar-brand mx-5 px-5">
      <img src={image} alt="logo" style={{width:"80px"}}/>
    </a>
    <div class="collapse navbar-collapse" id="mynavbar">
      <div class="d-flex mx-5 ">
        <input type="text" className='form-control me-2 ' placeholder='Search' style={{width:'550px'}}/>
        <button class="btn btn-primary" type="button">Search</button>
      </div>
      
      {/* dropdown start here */}
      <div className='dropdown '>
         <button type='button' className='btn btn-primary btn-outline dropdown-toggle' data-bs-toggle="dropdown">
           Account
         </button>
         <ul className='dropdown-menu'>
          <li><a href="#" className='dropdown-item'>Log in</a></li>
          <li><a href="#" className='dropdown-item'>Sign un</a></li>
         </ul>
      </div>
          {/* dropdown ends here */}
          {/* dropdown from help start here */} 
          
          <div className='dropdown mx-2'>
         <button type='button' className='btn btn-primary btn-outline dropdown-toggle' data-bs-toggle="dropdown">
           Help
         </button>
         <ul className='dropdown-menu'>
          <li><a href="#" className='dropdown-item'>Log in</a></li>
          <li><a href="#" className='dropdown-item'>Sign un</a></li>
         </ul>
      </div>
      {/* help dropdown ends here */}
      <div className='d-flex mx-4 mt-3 text-light'>
        <p>Cart</p>
      </div>
       </div>
    </div>
</nav>
 
    </>
  )
}
