// parent Componant
import React,{useState} from 'react'
import ChildX from './9memo'

function ParentX() {
    const [Count, setCount] = useState(0)
    const [name, setname] = useState('mohit')
    console.log("Parent renders")
  return (
    <div>
        <h3>ParentX</h3>
        <button onClick={()=>setCount(cnt=>cnt+1)}>Count-{Count}</button>
        <button onClick={()=>setname('tivari')}>Count-{name}</button>
        <ChildX name={name}/>
    </div>
  )
}

export default ParentX
