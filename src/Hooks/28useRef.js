// taking the refrence of the timeout function
import React, { useEffect, useRef, useState } from 'react'

function Timeout() {
    const [count,setCount]=useState(0);
    const refObj= useRef();

    useEffect(()=>{
    refObj.current=   setInterval(()=>{
            setCount(prevCount=>prevCount+1)
        },1000)

        return(
            ()=>clearInterval(refObj.current)
        )
    },[])
  return (
    <div>
        <h3>Timeout</h3>
        Timmer -{count}
        {/* create a button to stop the timmer */}
        <button onClick={()=>clearInterval(refObj.current)}>stop</button>
    </div>
  )
}

export default Timeout