import React, { Component } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import loginLogo from './login-logo.png'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='login-container'>
                <img src={loginLogo}/>
                <form>
                    <input 
                        className='login-input' 
                        type='text' 
                        placeholder='Username'
                        value={this.props.value}
                        // onChange={this.props.onChange}
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
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

// checking proptypes for login section

export default Login;