import React, { Component } from 'react'
import ChildComp from './34refforward';

export class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.refObj=React.createRef();
  }

  handleClick=()=>{
    this.refObj.current.focus();
  }

  render() {
    return (

      <div>
        <h3>ref Forwarding</h3>
        <ChildComp ref={this.refObj}/>
        <button onClick={this.handleClick}> Click</button>
      </div>
    )
  }
}

export default ParentComp