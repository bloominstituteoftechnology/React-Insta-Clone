import React from 'react';
import './Login.css';

class Login extends React.Component {

    state = { 
        username: "",
        password: "",
        errorMessage: "",
    };

    handleUsername = event => {
        this.setState({ username: event.target.value });
    };

    handlePassword = event => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.username.length === 0 || this.state.password.length === 0) {
            this.setState({ errorMessage: "Must enter username and password to login" });
        } else {
            localStorage.setItem("username", this.state.username);
            window.location.reload();
        }
    };

    render() {
        return (
            <div className="login-wrapper">
                <div className="company-logo">
                    <i className="fab fa-instagram"></i><h1>Instagram</h1>
                </div>
                <div className="error-message">
                    {this.state.errorMessage}
                </div>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <input 
                        className="username-field"
                        text="text"
                        placeholder="username" 
                        value={this.state.username} 
                        onChange={this.handleUsername}
                    />
                    <input 
                        className="password-field"
                        type="password"
                        placeholder="password" 
                        value={this.state.password} 
                        onChange={this.handlePassword}
                    />
                    <button 
                        className="login-button"
                        type="submit" 
                        onClick={this.handleSubmit}>
                        Login
                    </button>
                </form>
            </div>
        )
    }
}

export default Login;