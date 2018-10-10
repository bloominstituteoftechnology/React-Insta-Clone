import React from 'react';
import styles from './Login.css';
import { EventEmitter } from '../../events.js'

const Login = () => (
    <div className='login'>
        <div className='login-container'>
            <img className='login-logo' src={require('../../icons/insta_logo.png')} alt='Instagram Logo'/>
            <input 
                className='login-input' 
                type='text'
                placeholder='Phone number, username, or email'
                onChange={(event) => EventEmitter.dispatch('usernameChange', event)}
            />
            <input 
                className='login-input'
                type='text'
                placeholder='Password'
                onChange={(event) => EventEmitter.dispatch('passwordChange', event)}
            />
            <div className='login-btn' onClick={() => EventEmitter.dispatch('login')}>Log in</div>
        </div>
    </div>
)

export default Login;