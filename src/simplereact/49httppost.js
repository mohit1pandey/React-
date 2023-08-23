import React, { Component } from 'react'

export class PostToAPI extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleOnchange = (event) => {
        // event.target.name will return the name of the input elem which is the state obj
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler=(event)=>{
        
     event.preventDefault();
     console.log(this.state)
     let p = fetch(`https://jsonplaceholder.typicode.com/posts`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          //the data to be posted should be in the form of string 
          body: JSON.stringify(this.state)
     })
     p.then(Response=>Response.json())
     .then(result=>console.log(result))
     .catch(error=>console.log(error))
    }

    render() {
        return (
            <div className='App'>

                <form onSubmit={this.submitHandler}>
                    <label> name</label>
                    <input type="text" name='name' value={this.state.name} onChange={this.handleOnchange} /> <br />
                    <label> email</label>
                    <input type="text" name='email' value={this.state.email} onChange={this.handleOnchange} /> <br />
                    <label> password</label>
                    <input type="text" name='password' value={this.state.password} onChange={this.handleOnchange} /> <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostToAPI