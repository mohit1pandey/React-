
import React ,{useContext}from 'react'
import {context1,context2} from '../App'


function A() {
  return (
    <div>Component A <B/></div>
  )
}
function B() {
    return (
      <div>Component B<C/> </div>)
  }
  function C() {
    return (
      <div>Component C<D/></div> )
  }
    
  function D() {
    let name=useContext(context1);
    let occupation=useContext(context2);
    return (
      <div>Component D
     name {name} and occupation {occupation}
      </div>
    )
  }
  
export default A
/*
// import logo from './logo.svg';
import React from 'react';
import './App.css';
import A from './Hooks/14context';

export const context1 = React.createContext();
export const context2 = React.createContext();


function App() {


  return (
    <>
      <div className="App">
        <context1.Provider value={'mohit '}>
          <context2.Provider value='React Dev '>
            <A />
          </context2.Provider>
        </context1.Provider>
      </div>
    </>
  );
}


export default App;

*/