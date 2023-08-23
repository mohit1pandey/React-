//click counter
import React, { Component } from 'react'

 class ClikcCounter extends Component {
   
  render() {
    const {count,incrementCount} =this.props
    return (
      <div className='App'>
          <button onClick={incrementCount}>click{count}</button>
      </div>

      
    )
  }
}

export default ClikcCounter