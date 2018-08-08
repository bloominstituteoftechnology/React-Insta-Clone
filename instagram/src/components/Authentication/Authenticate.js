import React, { Component } from 'react';
import Login from "./Login";


const Authenticate = App =>
    class extends Component {
        constructor(props) {
            super(props);
        }
 
        render() {
            return < Login />
        }
    }


export default Authenticate;