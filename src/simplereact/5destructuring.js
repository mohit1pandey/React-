//function based componant.
import React from 'react'

const  FuncComp=(props)=>{
    
    const {name,password}=props;

    return(
        <div className="App">

        <h1>{name} &nbsp; and password &nbsp;{password}</h1>

        </div>
    )
}

export default FuncComp;
// no need to use props.name and porps.password




/*
import React from 'react'

const  FuncComp=({name,password})=>{
    return(
        <div className="App">

        <h1>{name} &nbsp; and password &nbsp;{password}</h1>

        </div>
    )
}

export default FuncComp;

*/