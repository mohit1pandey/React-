// parent Componant
import React, { useCallback, useMemo, useState } from 'react'
import ChidlCallMem from './16MemoCllbakc'


function CallbackNMeno() {
    const [Count, setCount] = useState(0)
    const [name, setname] = useState('mohit')
    console.log("Parent renders")
    //local obj will cause re-rendering the claidY

    // memo stores the results of the functions 
    let obj = {
        class: '12',
        sub: 'PCM'
    }

    let returnObj = useMemo(() => obj, [])

    // usecallback provides the refrece of the function based on the dependency listS
    const func = useCallback(() => { }, [])   // try to add count as dependency

    return (
        <div>
            <h3>Callback and Meno</h3>
            <button onClick={() => setCount(cnt => cnt + 1)}>Count-{Count}</button>
            <button onClick={() => setname('tivari')}>Count-{name}</button>

            <ChidlCallMem name={name} detail={returnObj} functionY={func} />

        </div>
    )
}
export default CallbackNMeno