import React from 'react';
import Login from '../Login';

const Authenticate = App => {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                authenticated: false,
                username: '',
            };
        }

        componentDidMount() {
            if (localStorage.getItem('username')) {
                this.setState({
                    authenticated: true, 
                    // username: localStorage.getItem('username'),
                })
            }
            else {
                this.setState({
                    authenticated: false,
                });
            }
        }

        render() {
            if (this.state.authenticated) {
                return (
                    <App />
                );
            }
            else {
                return (
                    <Login />
                );
            }
        }
    };
}

export default Authenticate;
