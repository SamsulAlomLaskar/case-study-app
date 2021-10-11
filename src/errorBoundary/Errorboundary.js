import React, { Component } from 'react';
import FallBackUI from './FallBackUI';

class Errorboundary extends Component {

    state = {
        hasError : false
    }

    static getDerivedStateFromError (error) {
        return {
            hasError : true
        }
    }

    componentDidCatch(error, info)

    render() 
    {
        if(this.state.hasError){
            return <FallBackUI/>
        }
        else {
           return this.props.children
        }

    }
}
export default Errorboundary
