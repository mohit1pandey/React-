import React, { useContext } from 'react'
import { Context } from '../App'

function ComponantA() {
    const coutnContext = useContext(Context)

    const { countstate, countDispatch } = coutnContext;

    return (
        <>
            <div>ComponantA</div>
                <div>
                <div> countA -{countstate}</div>
            <button onClitk={()=>countDispatch('increment')}>increment</button>
            <button onClick={()=>countDispatch('decrement')}>decrement</button>
            <button onClick={()=>countDispatch('inital')}>reset</button>
                </div>
        </>
    )
}

export default ComponantA

/*
// import logo from './logo.svg';
import React, { useReducer } from 'react';
import './App.css';
import ComponantA from './Hooks/18useReducer';
import ComponantB from './Hooks/19useReducer';
import ComponantC from './Hooks/20useReducer';

export const Context = React.createContext();

const initial_state = 0;
const reducer = (state, action) => {
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

function App() {
const [count,dispatch] =useReducer(reducer,initial_state)

  return (
    <>
      <div className="App">
        <Context.Provider value={{countstate: count, countDispatch: dispatch}}>
          <ComponantA />
          <ComponantB />
          <ComponantC />
        </Context.Provider>
      </div>

    </>
  );
}

export default App;
*/
// this app.js is for 10-20usereducer.js

