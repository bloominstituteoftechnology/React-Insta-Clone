import React, { Component } from 'react';
import Login from '../Login/Login';

// Displays the Login page and authenticates to allow user's to login
const Authenticate = App => class extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            username: '',
        }
    }

    // Check if the user is already logged in and set the state appropriatly
    componentDidMount() {
        if (localStorage.getItem('InstaLogged')) {
            this.setState({loggedIn: true});
        }
        else {
            this.setState({loggedIn: false})
        }
    }

    // Checks if the creditials are correct.
    checkLogin = (user, pass) => {
        if (localStorage.getItem(user) === pass) {
            this.setState({loggedIn: true, username: user});
            localStorage.setItem('InstaLogged', true);
            return true;
        }

        return false;
    }

    // Removes the localstorage for automatic login
    forceUpd = (e) => {
        localStorage.removeItem('InstaLogged');
        this.setState({loggedIn: false});
    }

    render() {
        if (this.state.loggedIn) {
            return <App forceUpd={this.forceUpd} username={this.state.username}/>
        }

        return <Login check={this.checkLogin}/>
    }
}

export default Authenticate;