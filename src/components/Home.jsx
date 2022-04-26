import React from 'react'
import Products from './Products';

export default function Home() {
    let backImage = window.location.origin + "/images/mama.png";

  return (
    <>
    <div className='row'>
        <div className='col-12 border border-2 border-success d-flex' style={{backgroundColor:'rgb(15,10,222)'}}>

            {/* first card start here */}
          <div>
          <div class="card mx-5" style={{width:'400px',backgroundColor:'rgb(15,10,222)',boxShadow:"rgba(1,1,1,1,0.4)"}}>
  <div class="card-body mt-5 ">
      <small className='' style={{color:'green',fontFamily:'sans-serif',fontWeight:'bold'}}>25% OFF PROMOTIONAL SALE</small>
    <h1 class="card-title text-white" style={{fontFamily:'sans-serif',fontWeight:'bolder',fontSize:"40px"}}>All you need in the kitchen.</h1>
    <p class="card-text mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, culpa? Unde nihil quasi est !.</p>
    <a href="#" class="btn btn-dark btn-outline my-5">Browser Products</a>
      </div>
     </div>
  </div>

  {/* second card */}
  <div className='container'>
          <div class="card mb-5 pb-2" style={{width:'700px', 
          textAlign:'center',backgroundColor:'rgb(15,10,222)'}}>
        <img src={backImage} alt="woman"  className='card-img-top ' style={{width:'600px',backgroundColor:'rgb(15,10,222)'}}/>
        </div>
  </div>

   {/* second card finish here */}
        </div>
        {/* shopping part */}
        <div className='container border border-2 border-success '>
          <div className='row'>
            <div className="col-md-8">
              <Products/>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
