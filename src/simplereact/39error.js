// to handle the error we need to create the error boundary
import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            isError: true
        }
    }

    render() {
        if (this.state.isError) {
            return (
                <h3>some thing went wrong</h3>
            )
        }
        return this.props.children

    }
}

export default ErrorBoundary