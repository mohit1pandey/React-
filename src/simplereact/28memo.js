// function based
import React from 'react'
function MemoFunction({name}){
    console.log("this is child comp")
return(
    <div>
        <h3>this is child hello {name}</h3>
    </div>
)
}


export default React.memo(MemoFunction)