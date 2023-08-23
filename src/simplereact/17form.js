import React, { Component } from 'react'

 class HtmlFroms extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        name:'',
        email:'',
        comment:'Plese enter Feedback'
     }
   }
   handleOnchange=(event)=>{
    this.setState({
        name: event.target.value
    })
   }

   handleEmailchange =(event)=>{
    this.setState({
        email: event.target.value
    })
   }

   handleTexrarea=(event)=>{
    this.setState({
        comment: event.target.value
    })
   }
   handleSubmit=(event)=>{
     alert("name :"+this.state.name +"email :"+ this.state.email)
     event.preventDefault()
   }

  render() {
    return (
      <div className='App'>
            Welcome to forms
            <div className="form">
            <form onSubmit={this.handleSubmit}>
                <label > Name:</label>
                <input type="text" value={this.state.name} onChange={this.handleOnchange}/> <br/>
                <label>Email:</label>
                <input type="email" value={this.state.email} onChange={this.handleEmailchange}/><br/>
                <label htmlFor="textarea">comments</label>
                <textarea cols="20" rows="3" value={this.state.comment} onChange={this.handleTexrarea} ></textarea>
                <br/>
                <button>submit</button>

            </form>
            </div>
      </div>
    )
  }
}

export default HtmlFroms;