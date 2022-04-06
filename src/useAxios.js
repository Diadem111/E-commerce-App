import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
const useAxios = (url)=>{
        const [num, setnum] = useState(0)
        const [onlineData, setonlineData] = useState([])
        const [isloading, setisloading] = useState(true)
        const [error, seterror] = useState(null)
        useEffect(()=>{
            axios.get(url).
            then((response)=>{
            setisloading(false);
                setonlineData(response.data);
                console.log(response.data);
                
            })
            .catch((err)=>{
            setisloading(false);
            seterror(err.message);
            console.log(err.message);
            })
            console.log('hello');
            
        },[num])
        return {onlineData,error,isloading}
    }
    export default useAxios