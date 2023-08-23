//display the count
import React from 'react'

function Count({text,value}) {
    console.log(`this is ${text}`)
  return (
    <div>
        {text}-is- {value}
    </div>
  )
}

export default  React.memo(Count)