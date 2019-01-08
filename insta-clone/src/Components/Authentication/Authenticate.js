import React, { Component } from 'react';
import App from '../App';

const Authenticate = (App) => {
    class Authenticate extends Component {
        render() {
            return (
                <div>
                    <h2>please Authenticate</h2>
                    <App />
                </div>
            )
        }
    }
}

export default Authenticate;