import React, { useState } from 'react'
import useUpdateTilte from './29customhoook'

function TitleUpdate() {
    const[count,setCount]=useState(0)
    useUpdateTilte(count)

  return (
    <div>
        <h3>TitleUpdate</h3>
        <button onClick={()=>{setCount(count+1)}}>Click</button>
        
    </div>
  )
}

export default TitleUpdate