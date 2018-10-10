import React, { Component, Fragment } from 'react';
import App from '../../App';
import Login from '../Login/Login';
import { EventEmitter } from '../../events.js';

const Authenticate = App =>
  class extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false,
            username: '',
            password: ''
        }
        EventEmitter.subscribe('login', () => this.login())
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
        } else {
            alert('Please enter a username and password')
        }
       
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

export default Authenticate;