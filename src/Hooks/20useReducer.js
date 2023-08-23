import React, { useContext } from 'react'
import { Context } from '../App'

function ComponantC() {
    const coutnContext = useContext(Context)

    const { countstate, countDispatch } = coutnContext;

    return (
        <>    <div>ComponantC</div>
            <div>
                <div> countC -{countstate}</div>
                <button onClick={() => countDispatch('increment')}>increment</button>
                <button onClick={() => countDispatch('decrement')}>decrement</button>
                <button onClick={() => countDispatch('inital')}>reset</button>
            </div>
        </>

    )
}

export default ComponantC