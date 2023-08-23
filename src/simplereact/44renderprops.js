//hower Counter
import React, { Component } from 'react'

 class HowerCounter extends Component {
    
  render() {
    const {count,incrementCount} =this.props
    return (
      <div className='App'>
             <div style={{background:'#f7c6fe'}} onMouseEnter={incrementCount}>
        <h1>
          
            hower to increment count value={count}.
        </h1>
      </div>

      </div>
    )
  }
}

export default HowerCounter