import React from 'react';

const Login = props => {
    return(
        <div className="login-container">
            <form onSubmit={props.loginSubmit} action="" className="login-form">
                <input 
                type="text" 
                className="login-input"
                placeholder="UserName..."
                name="UserName"
                />
                <input 
                type="text" 
                className="login-input"
                placeholder="Password..."
                name="Password"
                />
                <button className="login-button">Submit</button>
            </form>
        </div>
    );
};
export default Login;