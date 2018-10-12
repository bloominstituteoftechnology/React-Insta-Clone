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

        componentDidMount() {
            if (
                !!localStorage.getItem('username') &&
                !!localStorage.getItem('password')
            ) {
                this.setState({
                    loggedIn: true
                })
            }
        }        

        render() {
            if (this.state.loggedIn) {
                return <PassedComponent />
            } else {
                return <Login />
            }

        }
    };

export default Authenticate;