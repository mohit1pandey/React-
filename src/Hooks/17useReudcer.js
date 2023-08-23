import React, { useReducer } from 'react'

const initial_state = 0;
const reducer = (state, action) => {  //action is responsible to change the state(currnet state)
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case 'inital':
            return initial_state;
        default:
            return state;
    }

}

function ReducerHook() {
   const [count_one , dispatch]= useReducer(reducer, initial_state) 
   const [count_two , dispatch_two]= useReducer(reducer, initial_state) 

   // the dispatch function will change the action into the reducer
    return (
        <>
            <div>ReducerHook</div>
            <div> count_one -{count_one}</div>
            <button onClick={()=>dispatch('increment')}>increment</button>
            <button onClick={()=>dispatch('decrement')}>decrement</button>
            <button onClick={()=>dispatch('inital')}>reset</button>

            <div>
            <div> count_two -{count_two}</div>
            <button onClick={()=>dispatch_two('increment')}>increment</button>
            <button onClick={()=>dispatch_two('decrement')}>decrement</button>
            <button onClick={()=>dispatch_two('inital')}>reset</button>

            </div>
        </>

    )
}

export default ReducerHook