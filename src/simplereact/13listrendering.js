import React from 'react'

function ListRender() {
    // list of names

    const arr = ['mohit', 'rinku', 'tiwari', 'tara']

    let custmerName  =  arr.map((name) => {

            return (<li>my name is {name}</li>)

      })

    return (
        <div className='App'>
            ListRender
            {/* style is none */}

            <ul style={{ listStyle: 'none' }}>
                {
                    custmerName 
                }

            </ul>

        </div>
    )
}

export default ListRender;


/*
import React from 'react'

function ListRender() {
    // list of names

    const arr = ['mohit', 'rinku', 'tiwari', 'tara']


    return (
        <div className='App'>
            ListRender
             

            <ul style={{ listStyle: 'none' }}>
                {
                    // map returns an arrya of <li>
                    arr.map((name) => {
                        return (<li>hi my name is {name}</li>)
                    })
                }

            </ul>

        </div>
    )
}

export default ListRender;
*/