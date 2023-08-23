import React from 'react'
import  ReactDOM from 'react-dom'


function PortalEg() {
   
    let portal= document.getElementById('protal')

  return ReactDOM.createPortal(
   <div className='App'>
    <h3>
        hii this is recat portal
    </h3>
   </div>
  ,portal )
}

export default PortalEg