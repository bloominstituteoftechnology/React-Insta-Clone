import React from 'react';
import LogIn from '../LogIn/LogIn';

const Authenticate = App => { 
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false,
            };
        }

        componentDidMount() {
            localStorage.getItem('username') &&
            this.setState({
                loggedIn: true
            });
        }

        render() {
            return this.state.loggedIn ?
            <App username={this.state.username}/> :
            <LogIn />;
        }
    };
};

export default Authenticate;