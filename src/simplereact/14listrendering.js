import React, { Component } from 'react'

class ListRender2 extends Component {

    constructor(props) {
        super(props)

        this.arr1 = [{
            id: 1,
            name: "mohit",
            class: 12,
            occupation: "linux dev"
        },
        {
            id: 2,
            name: "rohit",
            class: 13,
            occupation: "web dev"
        },
        {
            id: 3,
            name: "gohit",
            class: 10,
            occupation: "system dev"
        }]
    }

    render() {
        return (
            <div className='App'>
                {/* prop sent */}
                <Child info={this.arr1} />
            </div>
        )
    }
}
// child
function Child(props) {

    let data = props.info.map((value) => {
        return (<div key={value.id}>
                  hi my name is {value.name} and my class is{value.class} and my occupation is{value.occupation}
               </div>)
    })
    return (
        <div className="App">
            {data}
        </div>
    )

}

export default ListRender2;