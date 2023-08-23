import React, { useReducer } from 'react'

const initial_state = {
    first_counter:0,
    second_counter:10
};
const reducer = (state, action) => {  //action is responsible to change the state(currnet state)
    switch (action.type) {
        case "increment1":
            return {...state,first_counter: state.first_counter+ action.value};
        case "increment2":
            return {...state,second_counter:state.second_counter +action.value};
        case "decrement1":
            return {...state,first_counter: state.first_counter-action.value};
        case "decrement2":
            return {...state,second_counter:state.second_counter -action.value};
        case 'inital':
            return initial_state;
        default:
            return state;
    }
}
function ReducerHook() {
   const [state , dispatch]= useReducer(reducer, initial_state) 
   // the dispatch function will change the action into the reducer
    return (
        <>
            <div>ReducerHook</div>
            <div> First_Counter -{state.first_counter}</div>
            <div>Second Counter -{state.second_counter}</div>
            <button onClick={()=>dispatch ({type:'increment1',value:1})}>increment one</button>
            <button onClick={()=>dispatch ( {type:'decrement1',value:1})}>decrement one</button>
            <button onClick={()=>dispatch ( {type:'increment1',value:5})}>increment 5 one</button>
            <button onClick={()=>dispatch ( {type:'decrement1',value:5})}>decrement5 one</button>
           
           <div className="secodCountert">
           <button onClick={()=>dispatch ({type:'increment2',value:1})}>increment two</button>
            <button onClick={()=>dispatch ( {type:'decrement2',value:1})}>decrement two</button>
           </div>
           <div className="reset">
           <button onClick={()=>dispatch({type:'inital'})}>reset state</button>
           </div>
        </>
    )
}

export default ReducerHook