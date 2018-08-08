import React, { Component } from 'react';
import Login from "./Login";


const Authenticate = App =>
    class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                authorized: false
            }
        }
 
        render() {
            return (this.state.authorized ? <App /> : <Login /> )
        }
    }


export default Authenticate;