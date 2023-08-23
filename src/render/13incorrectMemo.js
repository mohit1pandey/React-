// parent Componant
import React, { useState } from 'react'
import ChildY from './14incorrectMemo'


function ParentY() {
    const [Count, setCount] = useState(0)
    const [name, setname] = useState('mohit')
    console.log("Parent renders")
    //local obj will cause re-rendering the claidY
    const obj = {
        class: '12',
        sub: 'PCM'
    }

    const func = () => { }

    return (
        <div>
            <h3>ParentY</h3>
            <button onClick={() => setCount(cnt => cnt + 1)}>Count-{Count}</button>
            <button onClick={() => setname('tivari')}>Count-{name}</button>

            <ChildY name={name} /*detail={obj}*/ functionY={func} />

        </div>
    )
}

export default ParentY