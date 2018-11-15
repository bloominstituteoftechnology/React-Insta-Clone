import React from 'react';
import './Login.css';
 const Login = props => {
    return(
        <div className="login-container">
            <form onSubmit={props.loginSubmit} action="" className="login-form">
                <h3>Login</h3>
                <input 
                type="text" 
                className="login-input"
                placeholder="UserName..."
                name="username"
                value={props.username}
                onChange={props.handleChange}
                />
                <input 
                type="text" 
                className="login-input"
                placeholder="Password..."
                name="password"
                value={props.password}
                onChange={props.handleChange}
                />
                <button className="login-button">Login</button>
            </form>
        </div>
    );
};
export default Login; 