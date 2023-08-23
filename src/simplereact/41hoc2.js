// hover counter 
import React, { Component } from 'react'
import UpdatedComponant from './40hoc1'

 class HowerCounter extends Component {
  
  render() {
    const{count ,incrementCount}=this.props
    
    return (
      <div style={{background:'#f7c6fe'}} onMouseEnter={incrementCount}>
        <h1>
            {this.props.name}
            hower to increment count value={count}.
        </h1>
      </div>
    )
  }
}

export default UpdatedComponant(HowerCounter)