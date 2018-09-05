import React, { Component } from 'react';
import Login from '../Login/Login';

const Authenticate = App => class extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false
        }
    }

    componentDidMount() {
        if (localStorage.getItem('InstaLogged')) {
            this.setState({loggedIn: true});
        }
        else {
            this.setState({loggedIn: false})
        }
    }

    checkLogin = (user, pass) => {
        if (localStorage.getItem(user) === pass) {
            this.setState({loggedIn: true});
            localStorage.setItem('InstaLogged', true);
        }


    }

    forceUpd = (e) => {
        localStorage.removeItem('InstaLogged');
        this.setState({loggedIn: false});
    }

    render() {
        if (this.state.loggedIn) {
            return <App forceUpd={this.forceUpd}/>
        }

        return <Login check={this.checkLogin}/>
    }
}

export default Authenticate;