import React, { Component } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import loginLogo from './login-logo.png'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            usernameInput: ''
        }
    }

    //track username field change in input

    usernameChange = (e) => {
        this.setState({
            usernameInput: e.target.value
        });
    }
    
    //store username in local storage

    login = (e) => {
        e.preventDefault();
        localStorage.setItem('username', this.state.usernameInput);
        this.setState({
            usernameInput: ''
        });
    }

    render() {
        return (
            <div className='login-container'>
                <img 
                    src={loginLogo}
                    className='login-logo'
                />
                <form onSubmit={this.login}>
                    <input 
                        className='login-input' 
                        type='text' 
                        placeholder='Username'
                        value={this.state.usernameInput}
                        onChange={this.usernameChange}
                    />
                    <br/>
                    <input 
                        className='login-input' 
                        type='text' 
                        placeholder='Password'
                        value={this.props.value}
                        // onChange={this.props.onChange}
                    />
                    <br/>
                    <button className='login-button'>Log in</button>
                </form>
            </div>
        )
    }
}

// checking proptypes for login section

export default Login;