import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props); //just so that we can have access to props
        this.state={
            hasError: false
        }
    }

    componentDidCatch(error, info) {  //equal to the try or catch block
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError){
            return <h1>Ooops. That is not good</h1>
        }
        return this.props.children //Children is anything that is in between ErrorBoundary
    }

}

export default ErrorBoundry;