import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
                name:"mohit",
                favcol:'red'
        }
        console.log("this is parent constructor");
    
    }

   static  getDerivedStateFromProps(props, state){
         console.log("get derived called")
    
         return({name : props.first,
                 favcol: props.second
                })
 
     }

     componentDidMount(){
        console.log("componentDidMount of parent")

     }

     handleClick =()=>{
        this.setState({
            name: 'rohan',
            favcol: 'pink'
        },()=>{
          console.log("click has handled")
        })
     }

    render() {
        console.log('remder parent')
        return (
            <div className='App'>
                <h3>LifeCycle</h3>
                <h4>the fav color is {this.state.favcol}</h4>
                <button onClick={this.handleClick}>click</button>
            </div>

        )
    }
}

export default LifeCycle


/* use this as App.js
// import logo from './logo.svg';

import './App.css';
import LifeCycle from './simplereact/19lifecycle';


// import Counter from './simplereact/x'

function App() {


  return (
    <>
  
     <LifeCycle first="rohit" second="blue"/>
  
    </>
  );
}


export default App;

*/