import React, {Component} from 'react';
import Login from '../Login/Login';

const Authenticate = (WrappedComponent) => {
    return class extends Component {
        render() {
            return (window.localStorage.getItem('username')) ?
                (
                    <WrappedComponent />
                ) :
                (
                    <Login />
                )
        }
    }
}

export default Authenticate;