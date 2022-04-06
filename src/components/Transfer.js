import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Transfer() {
    const Navigate = useNavigate()
    const transfer =()=>{
        alert('T.F successful')
        Navigate('/about')
    }
  return (
    <div>
        <button onClick={transfer}></button>
    </div>
  )
}
