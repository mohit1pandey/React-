import React, { useState } from 'react'

function UseStateTwo({countA,children}) {
    const [count,setCount]=useState(0)
    console.log('Count is incremented')
  return (
    <div>
        <h3>RenderUseState</h3>
        Count-{count} <br />
        <button onClick={()=>setCount(prevCount=>prevCount+1)}> incr 1 </button>
        <button onClick={()=>setCount(0)}> set 0 </button>
      {children}
    </div>
  )
}

export default UseStateTwo

// app.js
/*
// import logo from './logo.svg';
// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import UseStateTwo from './render/6optimiseRender';
import ChildTow from './render/7optimiseRender';

function App() {
  const [count,setCount]=useState(10)
  return (
    <>
      <div className="App">
        <button onClick={()=>setCount(x=>x+1)}>setCount</button>
        <UseStateTwo countA={count}> 
          <ChildTow/>
        </UseStateTwo>
      </div>
    </>
  );
}
export default App;

*/