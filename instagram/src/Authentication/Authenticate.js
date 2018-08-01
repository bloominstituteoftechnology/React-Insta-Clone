import React, {Component} from 'react';
import LoginPage from '../components/Login/LoginPage';

const Authenticate = App => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false,
            };
        }

        /* Lifecycle Methods */

        componentDidMount() {
            localStorage.getItem('username') &&
            this.setState({
                loggedIn: true,
                username: localStorage.getItem('username')
            });
        }

        render () {
            return this.state.loggedIn ? 
                <App username={this.state.username} /> : 
                <LoginPage />;
        }
    };
};

export default Authenticate;