import React from 'react';
import LoginPage from '../Login/Login';

const Authenticate = App => class extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false
        }
    }
    render() {
        return (
            <div>
                <LoginPage />
                <App />
            </div>

        )
    };
};

export default Authenticate;