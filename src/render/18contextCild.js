// child file
import React, { useContext } from 'react'
import {Context} from './17contextpar'
function A() {

    console.log('this is A')
  return (
    <div>
        <h5>A</h5>
        <B/>
    </div>
  )
}

  function B() {
    console.log('this is B')
  return (
    <div>  
        <h5>B</h5>
        <C/>
    </div>
  )
}


  function C() {
    console.log('this is C')
    const contextval=useContext(Context)
  return (
    <div>
          <h5>C</h5>
       count from c= {contextval}
    </div>
  )
}



export default React.memo(A)