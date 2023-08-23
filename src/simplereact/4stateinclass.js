import React, { Component } from 'react'

class ClalssState extends Component {               // use rconst to get snippet

    constructor(props) {         //here we see the constructor is calling the parent constructor to  initialise the props  
        super(props)

        this.state = {              // state is an obj that contains the data of the component
            count: 0,
            name: "mohit"
        }
    }

    // to change the state
    handleClick = () => {
             this.setState({
                count: this.state.count+1
             },()=>{
                console.log(this.state.count)
             })

            //  this.setState((prevStare)=>({
            //     count: prevStare.count+1
            //  }),()=>{
            //     console.log(this.state.count)
            //  })

    }

    multiple_handle=()=>{
          this.handleClick();
          this.handleClick();
          this.handleClick();
          this.handleClick();
          this.handleClick();

    }

    render() {

        return (
            <div className="App">
                <div>count- {this.state.count}</div>
                <button className='btn btn-secondary' onClick={this.multiple_handle}>Click</button>
            </div>

        )
    }
}

export default ClalssState;