import React from 'react'
const userContext= React.createContext('puss');

let UserProvider=userContext.Provider;
let UserConsumer=userContext.Consumer;

export {UserProvider,UserConsumer}


/*
// import logo from './logo.svg';
import './App.css';
import { UserProvider } from './simplereact/46context';
import ComponentA from './simplereact/47context';


// import Counter from './simplereact/x'

function App() {


  return (
    <>
      <div className="App">
        <UserProvider value="Mohit">
               <ComponentA />
        </UserProvider>

      </div>
    </>
  );
}


export default App;

*/