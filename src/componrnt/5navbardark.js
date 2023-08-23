// navbar componetnt use with 3and 6
// the app.js file content is written below


// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export default function Navbar(props) {

    return (
        <div>
            {/* in bootstap navbar-dark and bg-dark calss are use to make the background and the nav bar dark so we get the value of dark and light from props provided by the main App.css */}
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    {/* use prps .tile */}
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/About">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Link</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true" to="/">Disabled</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"   style= {{background: props.mode==='dark'? 'gray':'white'}}/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    {/* to change the colour of text we have text-light class in bootstrap*/}
                         <div className={`form-check form-switch mx-5 text-${props.mode==='dark'?'light':'dark'}`}>
                               <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
                             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Darkmode</label>
                          </div>
                </div>
            </nav>
        </div>
    )
}

/*
// import logo from './logo.svg';
// import './App.css';

import Navbar from './componrnt/5navbardark';  //auto completed]
import TextArea from './componrnt/3moreON2';
import {useState} from 'react'
import Alert from './componrnt/6alert';

function App() {
    const [mode, setmode]=useState('light')
   
// out alert will contain two things message and type

const[alert,setalert]=useState(null);
// now alert is an object
  let show_alert=(msg,typ)=>{
        setalert({
          message:  msg, 
          type:    typ
        })

      // if we dont want to keep the alert placed at the window
      setTimeout(()=>{
        setalert(null);
      },1500)
  }



   const toggle_dark_mode=()=>{
    if(mode==='dark'){
      setmode('light')
      
      // we can set the body of the whole page here
      document.body.style.backgroundColor='white';
      document.body.style.color='#041124';
      // call the function set alert to set it on modetoggle
      show_alert('Light-Mode applied successfully plese switch to Dark-Mode at night','warning')
    }else {
      setmode('dark')
      document.body.style.backgroundColor='#041124';
      document.body.style.color='white';
      show_alert('Dark-Mode applied successfully','success')
      }
    
  }


  return (
   <>
   <Navbar title="Navbar" work="About Us" mode={mode}  togglemode={toggle_dark_mode}/>
   
   <Linklert alert={alert} />
   <TextArea mode={mode}/>
    
   </>
  );
}

export default App;
*/