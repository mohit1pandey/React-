// import logo from './logo.svg';
import { useState } from 'react';
import Modal from './37portals';



function Parent() {

  const [isOpen, setisOpen] = useState(false)

  let handleClick = () => {
    setisOpen(true)
  }

  let handleClose = () => {
    setisOpen(false)
  }

  return (
    <>
      <div className='App'>
        <h3>this is div</h3>
        <button onClick={handleClick}className='btn btn-primary'>click</button>
        {/*  */}
        <Modal isOpen={isOpen} isClose={handleClose} />
      </div>
    </>
  );
}


export default Parent;
