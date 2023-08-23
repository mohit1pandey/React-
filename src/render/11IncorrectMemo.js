// Child componant
import React from 'react'

function ChildThree({children,name}) {
    console.log("Child renders")
  return (
    <div>
        <h3>ChildThree</h3>
          {children} prop
    </div>
  )
}

export default React.memo(ChildThree)

