import React, { Component } from 'react';
import './Login.css';


const Login = props => {

    return(
        <div className='Login-field'>
           <form onSubmit={props.login}>
            <div className='login-inputs'>
            <input 
                type='text'
                name='inputText'
                placeholder="Username"
                value={props.inputText}
                onChange={props.handleChange}
            />
            <input placeholder="Password"/>
            </div>
            <button type='submit'>Login</button>
           </form>
            
        </div>
    );
}

export default Login;