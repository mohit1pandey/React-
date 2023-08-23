// With counter 
import React from 'react'

const UpdatedComponant =(OrignalComponant)=>{

class NewComponant extends React.Component {
//common functionaltity
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
    // console.log(this.props.name)
    return (
        // sent as prop to use the prop name use {...this.props}
      <OrignalComponant count={this.state.count} incrementCount={this.incrementCount} {...this.props}/>
    )
  }
  
}
return NewComponant;
}
export default UpdatedComponant


// the App.js code
/*
// import logo from './logo.svg';
import './App.css';

import HowerCounter from './simplereact/41hoc2';
import ClickCounter from './simplereact/42hoc3';



// import Counter from './simplereact/x'

function App() {


  return (
    <>
      <div className="App">
        <HowerCounter name="mohit"/>
        <ClickCounter/>
      </div>
    </>
  );
}


export default App;
*/