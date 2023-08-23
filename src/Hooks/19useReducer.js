import React, { useContext } from 'react'
import { Context } from '../App'

function ComponantB() {
    const coutnContext = useContext(Context)

    const { countstate, countDispatch } = coutnContext;
    return (
        <>
            <div>ComponantB</div>
            <div>
                <div> countB-{countstate}</div>
                <button onClick={() => countDispatch('increment')}>increment</button>
                <button onClick={() => countDispatch('decrement')}>decrement</button>
                <button onClick={() => countDispatch('inital')}>reset</button>
            </div>
        </>

    )
}

export default ComponantB