import React, { Component } from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            username: '',
            password: ''
        };
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleLoginSubmit = event => {
        event.preventDefault();
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render() {
        return (
            <div className="login-container">
            <h1>Welcome to Libbygram!</h1>
            <form onSubmit={this.handleLoginSubmit}>
            <input
                type="text"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleInputChange}
            />
            <div>
            <input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleInputChange}
            />
                </div>
                <button className="login-button" type="submit" onClick={this.handleLoginSubmit}>Login</button>
            </form>
            </div>
        );
    }
}


export default Login;