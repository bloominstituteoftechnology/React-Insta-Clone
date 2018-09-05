import React from 'react';
import App from '../App.js';

const Authenticate = App =>
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {

        }

        render() {
            return <App />;
        }
    };


export default Authenticate(App);