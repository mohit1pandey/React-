//warrpaer compnent
import React, { Component } from 'react'
import { UserConsumer } from './46context'

class ComponentA extends Component {
    render() {
        return (
            <div className='App'>
                <B/>
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div>
                <C/>
            </div>
        )
    }
}
class C extends Component {
    render() {
        return (
            <div>this is C
                <UserConsumer>
                    {
                        (name)=>{
                          return (<div> hello {name} </div>) 
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}
export default ComponentA