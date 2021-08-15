import React, { Component } from 'react';

class ErrorCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error,info)
    {
        this.setState({hasError:true});
    }

    render()
    {
        if(this.state.hasError)
        {
            return (<h1 style={{color:'red'}}>Error Alert!</h1>);
        }
        return this.props.children;
    }
}

export default ErrorCheck;