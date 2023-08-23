//child pure comp
import React, { PureComponent } from 'react'

class PureChild extends PureComponent {

    render() {
        console.log("this is pure comp")
        return (
            <div>
              pure Child  hello {this.props.name}
            </div>
        )
    }
}

export default PureChild