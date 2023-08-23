import React, {useEffect,useState}from 'react'

function EffectHook() {
    //state var declered
    const[Count,setCount]=useState(0);

    useEffect(()=>{
        document.title=`this is first ${Count}`
    })



  return (
    <div>
            <h3>useEffect</h3>
     <button onClick={()=>setCount(Count+1)}>Click</button>

    </div>
  )
}

export default EffectHook

/*
import React, { Component } from 'react'

class EffectHook extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    handleClick =()=>{
        this.setState({count: this.state.count+1})
    }
   
    componentDidMount(){
        document.title=`this is first ${this.state.count}`;
    }
 componentDidUpdate(){
    setTimeout(()=>{
        document.title=`this is first ${this.state.count}`;
    },2000
    )
 }
    render() {
    return (
      <div className='App'>
    <h3>useEffect</h3>
     <button onClick={this.handleClick}>Click</button>

      </div>
    )
  }
}

export default EffectHook
*/