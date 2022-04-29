import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { collection, addDoc,getDocs } from 'firebase/firestore'
import db from '../fireConfig'
import { fileProduct } from '../fileProduct'
import Products from '../components/Products'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
// import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function Homepage() {
  const [productsInfo, setproductsInfo] = useState([])
  const navigate = useNavigate()
  const [filter, setfilter] = useState(productsInfo);
  const [loading,setloading] = useState(true)
   const [error, seterror] = useState(null)

  // collection ref
  const colRef = collection(db,"products")
  

  // useEffect
  useEffect(() => {
      getDocs(colRef)
   .then((snapshot) =>{
     setloading(false);
    let productsArray = [] 
   snapshot.docs.forEach((doc)=>{
                const obj = {
                  id:doc.id,
                   ...doc.data()
                }
                productsArray.push(obj)
   }) 
   setfilter(productsArray);
   setproductsInfo(productsArray)
          console.log(productsArray)
           console.log(productsInfo)   
   })
   .catch(err =>{
     setloading(false);
     seterror(err.message);
     console.log(err.message);
   }) 
  }, [])
  
    const Loading = () => {
      return(
        <>
        <div className="col-md-3">
          <Skeleton height={350}/> 
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        </>
      )
    }

   const filterProduct = (cat) => {
    const updatedList = productsInfo.filter((x)=>x.category === cat);
    setfilter(updatedList);
    console.log(filter);
   }
    const ShowProducts = () => {
      return(
        <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn-outline-dark me-2 " onClick={()=>setfilter(productsInfo)} >All</button> 
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Men's clothing")}>Men's clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Women's clothing")}>Women's clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelry</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Men's clothing")} >Electronics</button>
      </div>
      {filter.map((product)=>{
        return (
          <>
          <div className="col-md-3 mb-4"  >
           <div className='card h-100 text-center p-4 ' key={product.id} id="cardShadow">
           <img src={product.image} className='card-img-top' alt={product.title} height="150px" />
           <div className='card-body'>
             <h5 className='card-title mb-0 '>{product.title.substring(0,12)}...</h5>
             <p className='card-text lead fw-bold'>#{product.price} </p>
             <button className='btn btn-outline-dark' onClick={()=>{
                           navigate(`/productInfo/${product.id}`)
                         }}>View</button>
                     
           </div>
           </div>
          </div>
          </>
        )
      })}
        </>
      )
    }

  return (
     <> 
    <Layout>
       {/* <div className="container">
         <div className="row">
             {productsInfo.map((product) => {
               return <div className='col-md-4' key={product.id}>
                 <div className='p-2 m-2 product'>
                   <div class=" text-dark product-content">
                   <img src={product.image} alt="" className='product-img mx-auto' />
                        <div class="text-center">
                      <p>{product.title}</p>
                      <p>#{product.price}</p>
                      </div> */}
                      {/* End of price and title */}
                         {/* <div className="d-flex product-actions">
                         <button className='btn btn-primary '> Add to cart</button>
                         <button className='btn btn-primary' onClick={()=>{
                           navigate(`/productInfo/${product.id}`)
                         }}>View</button>
                      </div>
                   </div>  
                 </div>

               </div>
             })}
           
         </div>
       </div> */}

       {/* another one */}
      <div>
      <section className='container my-4'>
       <div className='row'>
         <div className="col-12 mb-5">
           <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
           <hr />
         </div>
       </div>
       <div className='row justify-content-center'>
         {error&&<div className='text-danger'>{error}</div>}
          {loading ? <Loading/>  : 
         <ShowProducts/>
         } 
         {/* <ShowProducts/> */}

       </div>
      </section>
      </div>
    </Layout>
    
    </>
  )
}
