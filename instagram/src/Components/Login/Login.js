import React from 'react';
import './login.css';

const Login = (props) => {
    return (
        <div className='login-container'>
            <div class='input-list'><label>Username:</label><input onChange={props.loginUsernameHandler} type='text' /></div>
            <div class='input-list'><label>Password:</label><input onChange={props.loginPasswordHandler} type='password' /></div>
            <div class='input-list'><button onClick={props.loginHandler}>Login</button></div>
        </div>
    )
}

export default Login;