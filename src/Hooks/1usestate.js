import React,{useState} from 'react'

function UseStateHook() {
const [count, setcount] = useState(0)

let handleClick =()=>{
    setcount(count+1);
}
  return (
    <div className='App'>
     <button onClick={handleClick}>cliked {count} times</button>
     {/* <button onClick={()=>setcount(count+1)}>cliked {count} times</button> */}
    </div>
  )
}

export default UseStateHook