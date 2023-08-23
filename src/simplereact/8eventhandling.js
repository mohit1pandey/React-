import React, { Component } from 'react'

class ClalssState extends Component { 
    constructor(props) {         
        super(props)
        this.state = {              
            name: "mohit"
        }
    this.handleClick=this.handleClick.bind(this);
    // bind current instance of the clss component.
    }

    // to change the state
    /*
    handleClick () {
        this.setState({
            name: "rahul"
        })
        console.log(this);
    }
*/
handleClick=()=> {
    this.setState({
        name: "rahul"
    })
    console.log(this);
}

    

    render() {

        return (
            <div className="App">
                <div>count- {this.state.name}</div>
                {/* <button className='btn btn-secondary' onClick={this.handleClick.bind(this)}>Click</button> */}
                {/* <button className='btn btn-secondary' onClick={this.handleClick}>Click</button> */}
                {/* <button className='btn btn-secondary' onClick={()=>{this.handleClick()}}>Click</button> */}
                <button className='btn btn-secondary' onClick={this.handleClick}>Click</button>
            </div>

        )
    }
}

export default ClalssState;