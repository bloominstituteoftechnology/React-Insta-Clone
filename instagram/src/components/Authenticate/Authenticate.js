import React, { Component } from 'react';
import Login from '../Login/Login';

const Authenticate = (Input) => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                loggedIn : false
            };
        }

        componentDidMount() {
            this.setState({
                loggedIn : localStorage.getItem('loggedIn')
            });
        }

        render() {
            return this.state.loggedIn ? <Input /> : <Login />;
        }
    };
};

export default Authenticate;
