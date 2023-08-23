// Child componant
import React from 'react'

function ChildY({func,name}) {
    console.log("Child renders")
  return (
    <div>
        <h3>ChildY</h3>
        {/* render the obj */}
         {/* <span>{detail.class}</span> &nbsp;
         <span>{detail.sub}</span> */}

    </div>
  )
}

export default React.memo(ChildY)

