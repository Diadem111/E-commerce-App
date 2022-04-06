import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import useAxios from '../useAxios';

    export default function Effect() {
        const url = "https://jsonplaceholder.typicode.com/users"
        const [num, setnum] = useState(0)
        // const [onlineData, setonlineData] = useState([])
        // const [isloading, setisloading] = useState(true)
        // const [error, seterror] = useState(null)
        const increment = ()=>{
            setnum(num+1)
        }
       let {error,isloading,onlineData} = useAxios(url);
       const getLocation =(()=>{
           if(navigator.geolocation){
           navigator.geolocation.getCurrentPosition((res)=>{
               console.log(res);
           })
           }else{
               console.log('browser not supported');
           }
       })
        // useEffect(()=>{
        //     axios.get(url).
        //     then((response)=>{
        //     setisloading(false);
        //         setonlineData(response.data);
        //         console.log(response.data);
                
        //     })
        //     .catch((err)=>{
        //       setisloading(false);
        //      seterror(err.message);
        //      console.log(err.message);
        //     })
        //     console.log('hello');
            
        // },[num])
    return (
        <>
        {num}
        {error&&<div className='text-danger'>{error}</div>}
        {isloading&&<div>is loading ...</div>}
        {onlineData && onlineData.map((val,index)=>(
       <div>{val.name}</div>
        ))}
        <button onClick={increment}>Inc
        rement</button>
        <button onClick={getLocation}>get location</button>
        </>
    )
    }

    //  USEEFFCT TAKES IN CALLBACK AND DEPENDICIES
    // becareful not to use your useState in d useEffect 
    // API IS APPLICATION PROGRAMMING LANGUAGE
    // openweathermap.ng