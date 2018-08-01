import React from 'react';
import './Login.css';

const Login = props => {
    return(
        <div className='login'>
            <span className='login-title'>Instagram</span>
            <i className="fa fa-instagram login-icon" aria-hidden="true"></i>
            <input placeholder='Username' onChange={props.username}></input>
            <input placeholder='Password'></input>
            <button onClick={props.login}>Login</button>
        </div>
    )
}

export default Login;