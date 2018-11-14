import React from 'react';

import './LoginPage.css';

const LoginPage = props => {
    return (
        <div className="login">
            <h3>You must be logged in to view the site</h3>
            <form className="login__form" onSubmit={() => props.login(props.loginUserText, props.loginPasswordText)}>
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
                <button className="login__for--button">Login</button>
            </form>
        </div>
    )
}

export default LoginPage