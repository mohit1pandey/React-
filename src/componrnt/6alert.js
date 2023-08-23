//try to use whith 3and 5
import React from 'react'

export default function Alert(props) {
    
         function capitalize(word){
           let text =word.toLowerCase();
           return(text.charAt(0).toUpperCase()+text.slice(1))

         }
         
         
    return (
        // intialluy prop.alert.type is null so if alert is null dont read further
        //   here we can use alert-dander/primary/warning/success.
        props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
        <strong>{capitalize(props.alert.type)}: </strong>{props.alert.message}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
        )
    )


}


/*
// import logo from './logo.svg';
// import './App.css';

import Navbar from './componrnt/5navbardark';  //auto completed]
import TextArea from './componrnt/3moreON2';
import { useState } from 'react'
import Alert from './componrnt/6alert';
import About from './componrnt/4about';
import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light')

  // out alert will contain two things message and type

  const [alert, setalert] = useState(null);
  // now alert is an object
  let show_alert = (msg, typ) => {
    setalert({
      message: msg,
      type: typ
    })

    // if we dont want to keep the alert placed at the window
    setTimeout(() => {
      setalert(null);
    }, 1500)
  }



  const toggle_dark_mode = () => {
    if (mode === 'dark') {
      setmode('light')

      // we can set the body of the whole page here
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#041124';
      // call the function set alert to set it on modetoggle
      show_alert('Light-Mode applied successfully plese switch to Dark-Mode at night', 'warning')
    } else {
      setmode('dark')
      document.body.style.backgroundColor = '#041124';
      document.body.style.color = 'white';
      show_alert('Dark-Mode applied successfully', 'success')
    }

  }
 let elem=[
  <Navbar  mode={mode} togglemode={toggle_dark_mode} />,
  <Alert alert={alert} />,
  <TextArea mode={mode} />
 ]

  return (
      <Router>
  
      
      <Routes>
      <Route path='/' element={elem}/>
    </Routes>
    
      <Routes>
        
        <Route path='/About' element={[<Navbar  mode={mode} togglemode={toggle_dark_mode} />,<About />]} />
      </Routes>
  
    </Router>
);
}


export default App;
*/