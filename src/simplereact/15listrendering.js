import React from 'react'

function ListRender3() {
    // list of names

    const arr = ['mohit', 'rinku', 'tiwari', 'tara']
    let custmerName  =  arr.map((name,index) => {

            return (<li key={index}>my name is {name}</li>)

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
export default ListRender3;
