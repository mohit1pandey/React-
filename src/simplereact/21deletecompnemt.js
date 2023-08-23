import React, { Component } from 'react'

 class DelComp extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       value: true
    }
  }

  delChild=()=>{
    this.setState({
        value:false
    })
  }
  
    render() {
        let child
    if(this.state.value===true){
        child=<Child/>
    }

    return (
      <div className='App'>
        {child}
      <h3>this is parent</h3>
      {/* as i wiill click on the button the child component will removed from the DOM */}
      <button onClick={this.delChild}>delchild</button>
      </div>
    )
  }
}

class Child extends Component {

componentWillUnmount(){
 console.log( "child is unmounted")
}
  render() {
    return (
      <div>Child</div>
    )
  }
}
export default DelComp