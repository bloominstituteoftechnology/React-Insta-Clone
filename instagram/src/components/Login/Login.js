import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            userNameInput : '',
            passwordInput : ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitCredentials = (event) => {
        localStorage.userName = event.target[0].value;
        localStorage.password = event.target[0].value;
        if (event.target[0].value !== "") {
           localStorage.loggedIn = true;
        }
    };

    render() {
        return (
            <form
                onSubmit={(event) => {
                    this.submitCredentials(event);
                }}>
                <input
                    type="text"
                    placeholder="Phone number, username, or email"
                    name="userNameInput"
                    value={this.state.userNameInput}
                    onChange={this.handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="passwordInput"
                    value={this.state.passwordInput}
                    onChange={this.handleChange}
                />
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default Login;
