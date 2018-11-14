import React, { Component } from 'react';
import LoginPage from './components/Login/Login';

const Authenticate = App => 
    class extends Component {
        render() {
            return <App />
        }
    }
 

export default Authenticate;