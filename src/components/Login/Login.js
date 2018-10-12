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
        localStorage.setItem('username', this.refs.userInput.value);
        localStorage.setItem('password', this.refs.passInput.value);
        window.location.reload();
    };
    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <input type='text' ref='userInput' placeholder="User Name"></input>
                <input type='password' ref='passInput' placeholder="Password"></input>
                <input type='submit' value="Login" ></input>
            </form>
        );
    };
};

export default Login;