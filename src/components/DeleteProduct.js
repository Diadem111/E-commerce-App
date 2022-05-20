import React, { useRef } from 'react';
import { faXmark, faGripHorizontal, faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { colRef } from '../fireConfig';
import { addDoc, collection,deleteDoc,doc } from 'firebase/firestore';
import { getStorage, ref, uploadString, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../fireConfig';
import db from '../fireConfig';



export default function DeleteProduct() {
    const [productId, setproductId] = useState('')
    const deleteProductForm =  () =>{
        const docRef = doc(db,"products",productId)
        deleteDoc(docRef)
        .then(() => {
           console.log(doc);
        })
    }
  return (
    <>
    <div className='delete'>
        <label for="id">Document Id</label>
        <hr />
        <input type="text" name="" id="" value={productId}
									onChange={(e) => setproductId(e.target.value)}
									required />
                                    <hr />
        <button className='btn btn-primary'>Delete a product</button>
    </div>
    </>
  )
}
