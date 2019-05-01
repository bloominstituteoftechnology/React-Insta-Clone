import React from 'react';
import './Login.css';

const Login= props => { 
    return (
        <div className = 'login'>
            <form>
                <div className ='login-content'>
                <h1>Instagram</h1>
                <input className = 'username-input' placeholder = '    Username'  name = 'username' onChange = {props.inputChange}/>
                <input className = 'password-input' placeholder = '    Password' name = 'password' onChange = {props.inputChange}/>
                <button onClick = {props.login}>Login</button>
                </div>
            </form>    
        </div>
    );
}

export default Login;