import React, { Component } from 'react';
import './login.css';

const Authentication = (WrappedComponent) => class extends Component {
    render () {
        return (
            <WrappedComponent />
        )
    }
};

export default Authentication;