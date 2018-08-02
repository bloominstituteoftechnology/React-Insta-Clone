import React from 'react';
import './Login.css'
import logo from '../../assets/instagramlogin.png';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    inputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    // updateUsername = event => {
    //     this.setState({ username: event.target.value });
    // }

    // updatePassword = event => {
    //     this.setState({ password: event.target.value })
    // }

    submitLogin = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render() {
        return (
            <div>
            <form className="login-form">
                
                <img src = {logo} alt="logo" className="insta-logo" />
                
                <input 
                type="text" 
                placeholder="Username..." 
                className="username-field"
                name="username"
                value={this.state.username}
                onChange={this.inputChange}
                />

                <input 
                type="text" 
                placeholder="Password..." 
                className="password-field" 
                name="password"
                value={this.state.password}
                onChange={this.inputChange}
                />

                <button 
                className="login-button" 
                onClick={this.submitLogin}
                >
                Login
                </button>
            </form>
        </div>
        );
    }
};

export default Login;