//comuterComp
import React, { Component } from 'react'

 class CounterComp extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
      }
      incrementCount =()=>{
          this.setState((prevState)=>({
              count:prevState.count+1
          }))
      }
  render() {
    return (
      <div className='App'>
         {this.props.render(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

export default CounterComp

// app.js
/*
// import logo from './logo.svg';
import './App.css';
import CounterComp from './simplereact/43renderprops';
import HowerCounter from './simplereact/44renderprops';
import ClikcCounter from './simplereact/45renderprops';



// import Counter from './simplereact/x'

function App() {


  return (
    <>
      <div className="App">
        <CounterComp render ={(count,incrementCount)=>{
            return(
          <HowerCounter count={count}  incrementCount={incrementCount}/>
            )
        }}/>
     
        <CounterComp render ={(count,incrementCount)=>{
            return(
          <ClikcCounter count={count}  incrementCount={incrementCount}/>
            )
        }}/>
     
      </div>
    </>
  );
}


*/