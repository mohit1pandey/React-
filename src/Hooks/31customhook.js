// componant file
import React from 'react'
import useCounter from './32customHook'

function Counter() {
  const[count,increment,decrement,reset]=useCounter(10)
  return (
    <div>
        <h3>Counter</h3>
       <div>
        {/* render Count */}
        Count : {count}
       </div>
       <button onClick={increment}>increment</button> 
       <button onClick={decrement}>decrement</button> 
       <button onClick={reset}>reset</button> 
    </div>
  )
}

export default Counter