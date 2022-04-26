import React from 'react'
import Layout from '../components/Layout'
import { getDoc,doc } from 'firebase/firestore'
import db from '../fireConfig'
import { fileProduct } from '../fileProduct'
import Products from '../components/Products'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { increment } from '../actions'


export default function ProductInfo() {
  const count = useSelector((state)=>{
    return state.counterReducer.count
    
  })
  
  const dispatch = useDispatch()
  console.log(count);
  const [product, setproduct] = useState()
  const params = useParams()
  useEffect(() => {
   getData()
  }, [])
  async function getData(){
    try {
        const productItem = await getDoc(doc(db, "products",params.productid)) 
       
       
       setproduct(productItem.data())
    } catch (error) {
        
    }
}
  
  return (
    <Layout>
        <div className='container'>
        <div className='row justify-content-center'>
          <div className="col-md-8">
          {product && <div>
           <p><b>{product.title}</b></p>
           <img src={product.image} alt="" className='product-infoImg'/>
           <hr />
           <p>{product.description}</p>
           <div className="d-flex justify-content-end my-3">
             <button className='btn btn-primary' onClick={()=>dispatch(increment())}>Add to cart</button>
           </div>
           </div>
           }
          </div>
        </div>
        </div>
    </Layout>
  )
}
