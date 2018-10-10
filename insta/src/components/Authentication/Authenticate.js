import React, { Component } from 'react';
import Login from '../Login/Login';

const Authenticate = App => class extends Component {
        constructor (props) {
            super(props);
        }

        login = (e) => {
            localStorage.setItem('username', e.target.elements.username.value);
            localStorage.setItem('loggedIn', 'true');
        }

        render() {
            return <App />
        }
    }


export default Authenticate;