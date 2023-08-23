import React from 'react'

function ChildComp(props) {
  return (
    <div className='App'>
        {/* the browser event handler will call handleclick */}
        <button onClick={()=>{props.handleClick("ok clicked")}}>Click</button>
    </div>
  )
}

export default ChildComp;






/*
import React from 'react'

function ChildComp(props) {
  return (
    <div className='App'>
    
        <button onClick={props.handleClick}>Click</button>
    </div>
  )
}

export default ChildComp;
*/