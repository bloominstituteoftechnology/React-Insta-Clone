import React, { Component, Fragment } from 'react';
import App from '../../App';
import Login from '../Login/Login';
import { EventEmitter } from '../../events.js';

const authenticate = App =>
  class extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: localStorage.getItem('loggedIn') ? (localStorage.getItem('loggedIn') === 'true' ? true : false) : false,
            username: '',
            password: ''
        }
        EventEmitter.subscribe('login', () => this.login())
        EventEmitter.subscribe('logout', () => this.logout())
        EventEmitter.subscribe('usernameChange', (event) => this.usernameChange(event))
        EventEmitter.subscribe('passwordChange', (event) => this.passwordChange(event))
    }

    usernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    passwordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    login = () => {
        if (this.state.username.trim() && this.state.password.trim()) {
            this.setState({
                loggedIn: true
            })
            localStorage.setItem('username', this.state.username);
            localStorage.setItem('loggedIn', true)
        } else {
            alert('Please enter a username and password')
        }
    }

    logout = () => {
        this.setState({
            loggedIn: false,
            username: '',
            password: ''
        })
        localStorage.removeItem('username');
        localStorage.setItem('loggedIn', false)
    }

    renderContent = () => {
        return this.state.loggedIn ? <App /> : <Login />
    }

    render() {
        return (
            <Fragment>
                {this.renderContent()}
            </Fragment>
        )
    }
};

export default authenticate;