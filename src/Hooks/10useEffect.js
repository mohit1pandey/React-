import React, { Component } from 'react'

 class UseEffectFive extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      count: 0
   }
 }
 tick=()=>{
    this.setState({count:this.state.count+1})
 }
 componentDidMount(){
    this.interval =setInterval( this.tick, 2000);
 }
 componentWillUnmount(){
    clearInterval(this.interval)
 }
  render() {
    return (
      <div>UseEffectFive : <br />
   {this.state.count}

      </div>
    )
  }
}

export default UseEffectFive