//click Counter

import React, { Component } from 'react'
import UpdatedComponant from './40hoc1'

export class ClickCounter extends Component {
   
  render() {
    const{count ,incrementCount}=this.props
    return (
      <div className='App'>
      <button onClick={incrementCount} >clickd {count}</button>
      </div>
    )
  }
}

export default UpdatedComponant(ClickCounter)