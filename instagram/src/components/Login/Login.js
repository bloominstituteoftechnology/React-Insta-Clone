import React, { Component } from 'react';
import Authenticate from '../Authentication/Authentication'; 

const LoginPage = props => {
    return (
        <div>
            <form onSubmit={props.updateUser}>
                <input 
                    className="username-input"
                    type="text"
                    placeholder="Your username.."
                    name="username"
                    value={props.usernameInput}
                    onChange={props.usernameChange}
                />
                <input 
                    className="password-input"
                    type="text"
                    placeholder="Your password.."
                    name="password"
                    value={props.passwordInput}
                    onChange={props.passwordChange}
                />
                <button onClick={props.updateUser}>Login</button>
            </form>
        </div>
    )
}

// export default Authenticate(LoginPage)
export default LoginPage