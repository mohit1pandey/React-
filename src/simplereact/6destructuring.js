//class props destructuring

import React, { Component } from 'react'

export class FuncComp extends Component {
  render() {
    const{name,password}=this.props;
    
//    const{state1,state2}=this.state;
    return (
        <div className="App">

        <h1>{name} &nbsp; and password &nbsp;{password}</h1>

        </div>
    )
  }
}


export default FuncComp;