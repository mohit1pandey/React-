import React, { useReducer } from 'react'

const initial_count = 0;
const reducer = (state, option) => {
switch (option) {
    case 'incr1':
        return(state+1) ;
    
    case 'drcr1':
        return(state-1) ;
    
    case 'reset':
        return(initial_count) ;
    
    default:
        return state;
}
}

function UseReducer() {
const [newState,dispatch]=useReducer(reducer,initial_count)
console.log('changed')
    return (
        <div>
            <h3>UseReducer</h3>
            Count-{newState} <br />
        <button onClick={()=>dispatch('incr1')}> incr 1 </button>
        <button onClick={()=>dispatch('reset')}> reset </button>
        <button onClick={()=>dispatch('drcr1')}> decr 1</button>
        </div>
    )
}

export default UseReducer