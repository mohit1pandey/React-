import { useState,useEffect } from "react"

function EffectHookTwo() {
    const [Name, setName] = useState('')
    const [Count, setCount] = useState(0)
 
    useEffect(()=>{
        document.title=`title ${Count}`
        console.log(Name)
    },[Count])

    return (
        <div className='App'>
            <h3>EffectHookTwo</h3>
            name <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} /> <br />
            
            <button onClick={()=>setCount(preCount=>preCount+1)}>Click</button> <br />
        </div>
    )
}

export default EffectHookTwo

/*
import React, { Component } from 'react'

class EffectHookTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         name:''
      }
    }
    handleClick =()=>{
        this.setState({count: this.state.count+1})
    }
   
    componentDidMount(){
        document.title=`title ${this.state.count}`;
    }
 componentDidUpdate(prevProp, prevState){

   if(prevState.count!=this.state.count){
    console.log(this.state.name)    
   }
    document.title=`title ${this.state.count}`;
        
 }
    render() {
        return (
            <div className='App'>
                <h3>EffectHookTwo</h3>
               name <input type="text" value={this.state.name} onChange={(e)=>this.setState({name : e.target.value})}/> <br />
               <button onClick={this.handleClick}>Click</button> <br />
            </div>
        )
    }
}
export default EffectHookTwo




*/