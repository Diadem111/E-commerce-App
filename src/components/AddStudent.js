import React from 'react'
import { useState } from 'react'

export default function AddStudent({addStudent}) {
    const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  return (
    <>
    
         <h1 className="text-center">Add a student</h1> 
        <input type="text"  placeholder="First Name" className="my-2 form-control" onChange={(e)=>setfirstname(e.target.value)} value={firstname}/>
            <input type="text"  placeholder="Last Name" className="my-2 form-control" onChange={(e)=>setlastname(e.target.value)} value={lastname}/>
            <input type="text"  placeholder="Email" className="my-2 form-control" onChange={(e)=>setemail(e.target.value)} value={email}/>
            <input type="text"  placeholder="Password" className="my-2 form-control" onChange={(e)=>setpassword(e.target.value)} value={password}/>
             <button onClick={()=>addStudent({firstname,lastname,email,password})} className="btn btn-info w-100">Submit</button>

                
                
             

          
         
    </>
  )
}
