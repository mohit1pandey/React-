// increment the count on click
import React from 'react'

function Button({handleClick,children}) {
    console.log(`this is ${children}`)
  return (
    <div>
        <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default React.memo(Button)