// Child componant
import React from 'react'

function ChildThree1({name}) {
    console.log("Child renders")
    let date= new Date
  return (
    <div>
        <h3>ChildThree</h3>
       HH:{date.getHours()} MM:{date.getMinutes()} SS:{date.getSeconds()}
    </div>
  )
}

export default React.memo(ChildThree1)

