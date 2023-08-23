import React from 'react'

function Event () {

    return (
        <div className="App">
          <button onClick={handler}>click</button>
        </div>
      )
}

//handler
function handler()
 {
    console.log("event clicked")
 }


export default Event;


/*import React, { Component } from 'react'

 class Event extends Component {
   
    handler()
     {
        console.log("event clicked")
     }

  render() {
    return (
      <div className="App">
        <button onClick={this.handler}>click</button>
      </div>
    )
  }
}

export default Event;
*/