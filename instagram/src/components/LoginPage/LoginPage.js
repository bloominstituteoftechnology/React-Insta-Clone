import React from 'react';

import './LoginPage.css';

const LoginPage = props => {
    return (
        <div className="container">
            You must be logegd in to view the site
            <form onSubmit={() => props.login(props.loginUserText, props.loginPasswordText)}>
                <div>Username</div>
                <input 
                    type="text"
                    name="loginUserText"
                    value={props.loginUserText}
                    onChange={props.handleInputChange}
                />
                <div>Password</div>
                <input 
                    type="text"
                    name="loginPasswordText"
                    value={props.loginPasswordText}
                    onChange={props.handleInputChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage