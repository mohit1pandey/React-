// parent
import React, { Component } from 'react'
import ChildComp from './11methodsasprops'

class ParentComp extends Component {

constructor(props) {
  super(props)

  this.state = {
     name: "mohit"
  }
}

handleClick = (param)=>{
    alert(`${this.state.name}!!!! child clicked`)
    document.write(param);
}

  render() {
     
      
    return (
      <div className='App'>
        <ChildComp handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default ParentComp;

/*
import React, { Component } from 'react'
import ChildComp from './11methodsasprops'

class ParentComp extends Component {

constructor(props) {
  super(props)

  this.state = {
     name: "mohit"
  }
}

handleClick = ()=>{
    alert(`${this.state.name}!!!! child clicked`)
}

  render() {
     
      
    return (
      <div className='App'>
        <ChildComp handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default ParentComp;

*/