import { useEffect, useState } from "react"

function UseEffectThree() {
    const[X,setX]=useState(0)
    const[Y,setY]=useState(0)

let handleEvent=(e)=>{
    setX(e.clientX);
    setY(e.clientY)
    
}
    useEffect(()=>{
        window.addEventListener('mousemove',handleEvent)
    
    },[])

  return (
    <div className='App'>
        <h3>X and Y cordinates</h3>
      X- {X} and  Y-{Y}
    {/* {console.log(X,Y)} */}
      </div>
  )
}
export default UseEffectThree

/*
import React, { Component } from 'react'

 class UseEffectThree extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }

    eventHandler=(event)=>{
        this.setState({x:event.clientX, y:event.clientY})
       
    }

  componentDidMount(){
    window.addEventListener('mousemove',this.eventHandler)
    console.log('enent is created');
  }
  //we have to remove the compoentDidUpdated removed
//   componentDidUpdate(){
//     console.log('enent is created');
//   }
  render() {
    return (
      <div className='App'>
        <h3>X and Y cordinates</h3>
      X- {this.state.x} and  Y-{this.state.y}
      
      </div>
    )
  }
}

export default UseEffectThree
*/