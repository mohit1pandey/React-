import React, { Component } from 'react'

export class Condition extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIN: !true
      }
    }
  render() { 

    return(
        <div className="App">
           <h1>hiiii</h1>
          {this.state.sLoggedIN ? <div> welcome</div>:<div> fuck off</div>}
        </div>
    )
  }
}

export default Condition;



/*
 render() {
      if(this.state.isLoggedIN){
         return(
            <div className="App">ok</div>
         )
      }else{
        return(
            <div className="App">not ok</div>
         )
      }
  }
  */

  /*
  import React, { Component } from 'react'

export class Condition extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIN: !true
      }
    }
  render() { 

    let message;
    if(this.state.isLoggedIN){
        message=<div> welcome</div>
    }else{
        message=<div> fuck off</div>
    }

  

    return(
        <div className="App">
           <h3>hello</h3>
           <h4>{message}</h4>
        </div>
    )
  }
}

export default Condition;

*/