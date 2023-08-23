// parent component
import React, { Component } from 'react'
import MemoFunction from './28memo'

class ParentComp extends Component{
  constructor(props) {
    super(props)

    this.state = {
      name: "mohit"
    }
  }

  // time consuing task
  componentDidMount(){
   setInterval(()=>{this.setState({
    name:"mohit"   // try to change mohit by rohit and see
   })},2000)
  }

  render() {
    console.log("*************This IS parent Comp*************")
    return (
      <div className='App'>ParentComp
        <MemoFunction name={this.state.name}/>
      </div>
    )
  }
}


export default ParentComp;
