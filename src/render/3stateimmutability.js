import React, { useState } from 'react'
const initObj={
    Fname:'mohit',
    Lname:'pandey'

}
function UseStateTwo() {
    const[obj,setObj]= useState(initObj)

    let handleClick=()=>{
      let newObj={...obj} //copy obj
      newObj.Fname='manoj'
      newObj.Lname='tiwari'
        //pass newObj
      setObj(newObj)
    }
 
    console.log('rerendered')
    return (
    <div>
    <h3>UseStateTwo</h3>
      Fname:{obj.Fname} <br />
      Lname :{obj.Lname} <br />
      <button onClick={handleClick}>Ckick</button>
    </div>
  )
}

export default UseStateTwo



/*
import React, { useState } from 'react'
const initObj={
    Fname:'mohit',
    Lname:'pandey'

}
function UseStateTwo() {
    const[obj,setObj]= useState(initObj)

    let handleClick=()=>{
        obj.Fname ='manoj'
        obj.Lname='tiwari'
        setObj(obj)
    }
    console.log('rerendered')
    return (
    <div>
    <h3>UseStateTwo</h3>
      Fname:{obj.Fname} <br />
      Lname :{obj.Lname} <br />
      <button onClick={handleClick}>Ckick</button>
    </div>
  )
}

export default UseStateTwo */