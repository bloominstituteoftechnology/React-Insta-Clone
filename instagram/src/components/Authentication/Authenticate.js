import React, { Component } from 'react';
import Login from '../Login/Login';
import './login.css';

const Authenticate = (App) => class extends Component {
    constructor() {
        super();

        this.state = {
            loggedIn: false,
        }
    }

    componentDidMount() {
        let user = localStorage.getItem('user')

        if (!user) {
            this.setState({ loggedIn : false })
        } else {
            this.setState({ loggedIn : true })
        }
    }

    render () {
        const loggedIn = this.state;

        return (
            loggedIn ? <App /> : <Login />
        )
    }
};

export default Authenticate;