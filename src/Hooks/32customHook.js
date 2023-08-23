// HOOK file
import  { useState } from 'react'
// set 0 as default value
function useCounter(iniital_count=0) {
//intilaise the count
    const[count,setCount]=useState(iniital_count)
  
    const increment=()=>{
        setCount(prevcount=>prevcount+1)
    }
    const decrement=()=>{
        setCount(prevcount=>prevcount-1)
    } 
    const reset=()=>{
        setCount(iniital_count)
    }
    //send array of the fucntion to use 
    return ([count,increment,decrement,reset])
}

export default useCounter