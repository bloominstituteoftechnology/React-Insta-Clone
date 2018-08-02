import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: "",
            password: ""
        };
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleLoginSubmit = event => {
        const user = this.state.username;
        localStorage.setItem("user", user);
        window.location.reload();
    };

    render() {
        return (
            <form className="login-form">
                <div className="login-title">Welcome to <b>React Insta-Clone</b></div>
                <div className="input-fields">
                    <input 
                        type="text"
                        placeholder="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        type="text"
                        placeholder="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleLoginSubmit}>
                        Log in
                    </button>
                </div>
                
                
            </form>
        );
    }

}

export default Login;