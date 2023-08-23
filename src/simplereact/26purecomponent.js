//child regular component

import React, { Component } from 'react'

 class  RegChild extends Component {

    
    render() {
        console.log("this is reg comp")
    return (
      <div> 
        child regular    hello {this.props.name}

      </div>
    )
  }
}

export default RegChild 