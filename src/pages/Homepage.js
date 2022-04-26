import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { collection, addDoc,getDocs } from 'firebase/firestore'
import db from '../fireConfig'
import { fileProduct } from '../fileProduct'
import Products from '../components/Products'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
  const [productsInfo, setproductsInfo] = useState([])
  const navigate = useNavigate()

  // collection ref
  const colRef = collection(db,"products")

  // useEffect
  useEffect(() => {
   getDocs(colRef)
   .then((snapshot) =>{
   let productsArray = [] 
   snapshot.docs.forEach((doc)=>{
    
                const obj = {
                  id:doc.id,
                   ...doc.data()
                }
                productsArray.push(obj)
   }) 
   setproductsInfo(productsArray)
          console.log(productsArray)
           console.log(productsInfo)

   })
   .catch(err =>{
     console.log(err.message);
   })
  }, [])
  
  //  async function getData(){
  //      try {
  //          const users = await getDocs(collection(db, "products") )
  //           const productsArray = []
  //          users.forEach( (doc) => {
  //           const obj = {
  //               id:doc.id,
  //               ...doc.data()
  //           }
  //           productsArray.push(obj)
  //         });
  //         setproductsInfo(productsArray)
  //         console.log(productsArray)
  //         console.log(productsInfo)
  //      } catch (error) {
           
  //      }
  //  }
    
  return (
     <> 
    <Layout>
       <div className="container">
         <div className="row">
             {productsInfo.map((product) => {
               return <div className='col-md-4'>
                 <div className='p-2 m-2 product'>
                   <div class=" text-dark product-content">
                   <img src={product.image} alt="" className='product-img mx-auto' />
                        <div class="text-center">
                      <p>{product.title}</p>
                      <p>#{product.price}</p>
                      </div>
                      {/* End of price and title */}
                         <div className="d-flex product-actions">
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
       </div>
    </Layout>
    </>
  )
}
