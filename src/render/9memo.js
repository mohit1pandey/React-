// Child componant
import React from 'react'

function ChildX({name}) {
    console.log("Child renders")
  return (
    <div>
        <h3>ChildX</h3>

    </div>
  )
}

export default React.memo(ChildX)

