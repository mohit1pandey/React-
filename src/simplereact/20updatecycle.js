import React, { Component } from 'react'

export class UpdateLifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         color:'red',
         name:'pandey'
      }
    }
// get snap shot
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevProps.first);
        console.log(prevState.color + prevState.name)
        return null;
    }
// toprevent error
    componentDidUpdate(){
        console.log("nothing")
    }
//event handler
    handelClick=()=>{
           
        this.setState({
            color: "pink",
            name:'raju'
        })
        
    }

  render() {
    return (
      <div className='App'>update
      <h4>{this.state.color}</h4>
      <button onClick={this.handelClick}>click</button>
      </div>
    )
  }
}

export default UpdateLifeCycle;

// make immutable
    // shouldComponentUpdate(){
    //     return false;
    // }
