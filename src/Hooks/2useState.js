import React, { useState } from 'react'

function UseStateHookTwo() {
    const initialCount = 0
    const [count, setcount] = useState(initialCount)

    let handleFive = () => {
        for (let i = 1; i <= 5; i++) {
            setcount(prevState =>{ 
                return(prevState + 1)
            });
        }
    }


    return (
        <div className='App'>

            count : {count}  &nbsp;
            <button onClick={() => setcount(initialCount)}>initialCount  </button>
            <button onClick={() => setcount(prevState =>  prevState + 1 )}>INRCount  </button>
            <button onClick={() => setcount(prevState => prevState - 1)}>DRCCount  </button>
            <button onClick={handleFive}>INRfive  </button>

        </div>
    )
}

export default UseStateHookTwo