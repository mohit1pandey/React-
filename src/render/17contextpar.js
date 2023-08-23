
import React, {useState}from 'react'
import A from './18contextCild'

export  const Context =React.createContext();
const Contextprovider=Context.Provider; // should be camel cases not contextprovider

function ParentContex() {

    const [count, setcount] = useState(0)
    console.log('This is parent')
  return (
    <div>
        <h3>ParentContex</h3>
        {/* increment button */}
        <button onClick={()=>setcount(cnt=>cnt+1)}>Click</button>
      
      <Contextprovider value={count}>
        <A/>
      </Contextprovider>
    </div>
  )
}

export default ParentContex