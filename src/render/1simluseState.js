import React, { useState } from 'react'

function UseState() {
    const [count,setCount]=useState(0)
    console.log('Count is incremented')
  return (
    <div>
        <h3>RenderUseState</h3>
        Count-{count} <br />
        <button onClick={()=>setCount(prevCount=>prevCount+1)}> incr 1 </button>
        <button onClick={()=>setCount(0)}> set 0 </button>
        <button onClick={()=>setCount(5)}> set 5</button>
    </div>
  )
}

export default UseState