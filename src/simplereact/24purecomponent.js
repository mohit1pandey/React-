// parent component
import React, { Component,PureComponent } from 'react'
import RegChild from './26purecomponent'
import PureChild from './25purecomponent'
// try to cahnnge to compnenet -> PureComponent
class ParentComp extends Component{
  constructor(props) {
    super(props)

    this.state = {
      name: "mohit"
    }
  }

  // time consuing task
  componentDidMount(){
   setInterval(()=>{this.setState({
    name:"mohit"   // try to change mohit by rohit and see
   })},2000)
  }

  render() {
    console.log("*************This IS parent Comp*************")
    return (
      <div className='App'>ParentComp
        <RegChild name={this.state.name}/>
        <PureChild  name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp