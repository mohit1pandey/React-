// let focus in the inup name
import React, { Component } from 'react'
// parent comp
export class ParentRef extends Component {
  constructor(props) {
    super(props)

    this.parRef = React.createRef();
  }
  // componentDidMount(){
  //   console.log(this.parRef.current)
  // }
  handleChik = () => {
    this.parRef.current.focusInput();
  }
  render() {
    return (
      <div>

        <Child ref={this.parRef} />
        <button onClick={this.handleChik}>clickparent</button>

      </div>
    )
  }
}


class Child extends Component {
  constructor(props) {
    super(props)
    // create a ref obj.  
    this.refObj = React.createRef();// createRef(null)
  }

  focusInput = () => {
    this.refObj.current.focus();
  }


  render() {
    return (
      <div>
        <label >name</label>
        <input type="text" ref={this.refObj} />

      </div>
    )
  }
}

export default ParentRef