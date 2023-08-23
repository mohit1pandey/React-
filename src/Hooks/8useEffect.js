import { useEffect, useState } from "react"
function UseEffectFour() {
  const[status,setstatus]=useState(true)

  return (
    <div className='App'>
      
      <button onClick={()=>setstatus(!status)}>{status?'disable ':'enable '} mousemove</button>
      {status&& <UseEffectThree/>}
      </div>
  )
}
//child
function UseEffectThree() {

    const[X,setX]=useState(0)
    const[Y,setY]=useState(0)

let handleEvent=(e)=>{
    console.log("called")
    setX(e.clientX);
    setY(e.clientY)
    
}
    useEffect(()=>{
        window.addEventListener('mousemove',handleEvent)
        return(()=> window.removeEventListener('mousemove',handleEvent)
        )
    },[])

  return (
    <div className='App'>
        <h3>X and Y cordinates</h3>
      X- {X} and  Y-{Y}
      </div>
  )
}
export default UseEffectFour
