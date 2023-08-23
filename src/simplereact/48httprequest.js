import React, { Component } from 'react'

export class HttpGet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        // empty array for the data from the API
         data:[]
      }
    }
    componentDidMount(){
        let p = fetch(`https://jsonplaceholder.typicode.com/posts`)
        p.then(response=>{
            return response.json();
        }).then((value)=>{
            this.setState({data: value})
        
        }).catch(error=>{
            console.log(error)
        })
        
    }
  render() {
    return (
      <div>
       {
        this.state.data.map(value=>{
            return(<p key={value.id}> {value.title}</p>)
        })
       }
      </div>
    )
  }
}

export default HttpGet