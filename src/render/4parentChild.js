// parent componant
import React, { useState } from 'react'
import Child from './5parentChild'

function Parent() {
    const [count,setCount]=useState(0)
    console.log('Parent is rendered')
  return (
    <div>
        <h3>RenderUseState</h3>
        Count-{count} <br />
        <button onClick={()=>setCount(prevCount=>prevCount+1)}> incr 1 </button>
        <button onClick={()=>setCount(0)}> set 0 </button>
        <button onClick={()=>setCount(5)}> set 5</button>
        <div className="child">
            <Child/>
        </div>
    </div>
  )
}

export default Parent