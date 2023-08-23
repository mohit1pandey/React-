import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
                name:"mohit"
        }
        console.log("this is parent constructor");
    }

     static  getDerivedStateFromProps(props, state){
       console.log('this is the getDerivedStateFromProps of patent')
        return null;

     }

     componentDidMount(){
      
        console.log("componentDidMount of parent")

     }

    render() {
        console.log('remder parent')
        return (
            <div className='App'>
                <h3>LifeCycle</h3>
            </div>

        )
    }
}



export default LifeCycle