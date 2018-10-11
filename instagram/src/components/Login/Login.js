import React from 'react';
import './Login.css';

class Login extends React.Component {

    state = { 
        username: "",
        password: "",
    };

    handleUsername = event => {
        this.setState({
            username: event.target.value
        });
    };

    handlePassword = event => {
        this.setState({
            password: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.search(this.state.text);
        this.setState({ text: "" });
    };

    render() {
        return (
            <div className="login-wrapper">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <input 
                        className="username-field"
                        placeholder="username" 
                        value={this.state.username} 
                        onChange={this.handleUsername}
                    />
                    <input 
                        className="password-field"
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