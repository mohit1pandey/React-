import React,{Component} from 'react'

class classprop extends Component{

    render(){
        return(
           <div className="App">
            <h1 >{this.props.value}</h1>
            </div>
        )
    }

}



export default classprop;

/*
const Prop_tut = (props) => {

    return (
        <div className="container">
            <h1 >{props.value}</h1>
        </div>
    )

}
 */