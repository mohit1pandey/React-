// Child componant
import React from 'react'

function ChidlCallMem({ func, name }) {
    console.log("Child renders")
    return (
        <div>
            <h3>Chidl Call Mem</h3>
        </div>
    )
}

export default React.memo(ChidlCallMem)

