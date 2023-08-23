// let focus in the inup name
import React, { Component } from 'react'

export class RefsInClass extends Component {
constructor(props) {
  super(props)
// create a ref obj.  
this.refObj=React.createRef();// createRef(null)

}

componentDidMount(){
    console.log(this.refObj)
    this.refObj.current.focus();
}
handleClick=()=>{
    alert(this.refObj.current.value)
}

  render() {
    return (
      <div>
        <label >name</label>
        <input type="text" ref={this.refObj} />
        <button onClick={this.handleClick}>getVal</button>
      </div>
    )
  }
}

export default RefsInClass