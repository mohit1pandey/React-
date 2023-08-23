import React, { Component } from 'react'

class Modal extends Component {
    
    handleSecondClick = () => {
        this.props.isClose();
    }

    render() {
        if (this.props.isOpen) {
            return (
                <div className=' App'>
                    <h4>This is Modal</h4>
                    <button onClick={this.handleSecondClick}>close Modal</button>
                </div>
            )
        }
        return null;
    }
}

export default Modal