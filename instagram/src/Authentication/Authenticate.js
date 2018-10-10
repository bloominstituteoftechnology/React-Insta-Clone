import React, { Component } from 'react';
import Login from '../components/Login/Login.js';

const Authenticate = PassedComponent =>
    class extends Component {
        constructor() {
            super();

            this.state = {
                loggedIn: false,
            }
        }

        

        render() {
            if (this.state.loggedIn === false) {
                return <Login />
            } else {
                return <PassedComponent />
            }

        }
    };

export default Authenticate;