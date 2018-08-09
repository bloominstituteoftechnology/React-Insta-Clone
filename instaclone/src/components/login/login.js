import React from 'react';
import './login.css'

let Login = (props) => (
    <div className = 'login-form'>
        <div class = 'heading'>
            <h1>Instaclone</h1>
        </div>
        <form className = 'input-form' onSubmit = {props.login}>
            <input className = 'input' onChange = {props.handleInputChange} type='text' name='username' placeholder='username'></input>
            <input className ='input' type='text' name='password' placeholder='password'></input>
        
        <button className='login-button'>Login</button>
        </form>
    
    <form><button className='register-button'>No account yet? Register here!</button></form>
</div>
);

export default Login;