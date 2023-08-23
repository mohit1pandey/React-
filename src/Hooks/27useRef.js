// use focus the input by ref
import React, { useEffect, useRef } from 'react'

function UseRef() {
    const refobj = useRef(null);

    useEffect(()=>{
        refobj.current.focus()
        refobj.current.value='hello'
    },[])
  return (
    <div>
        <h3>useRef</h3>
        <input type="text" ref={refobj} />
            
    </div>
  )
}

export default UseRef