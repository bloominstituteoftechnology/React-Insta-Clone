import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    /* Log the user in */
    handleLogin = event => {
        const user = this.window.querySelector('userInput');
        const pass = this.window.querySelector('passInput');
        localStorage.setItem('username', user);
        localStorage.setItem('password', pass);
        window.location.reload();
    };
    render() {
        return (
            <form>
                <input type='text' name='userInput'></input>
                <input type='password' name='passInput'></input>
                <submit></submit>
            </form>
        );
    };
};

export default Login;