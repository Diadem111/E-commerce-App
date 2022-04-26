import { collection, onSnapshot, orderBy,query } from 'firebase/firestore'
import React from 'react'
import { useEffect,useState } from 'react'

export default function () {
    const [products, setproducts] = useState([])
    useEffect(() => {
     
    } )
    
  return (
    <>
     {
      products.length === 0 ? (
          <p>no products</p>
      ):(
       products.map((product)=> <div className='border mt-3 bg-light'>div</div>)
      )
     }
    </>
  )
}
