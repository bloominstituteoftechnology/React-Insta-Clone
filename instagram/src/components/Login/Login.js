import React from 'react';
// import PropTypes from 'prop-types';

const Login = props => {
    return (
        <div className="login-form-container">
            <form className='login-form' onSubmit={props.login}>
                <input 
                    type="text"
                    placeholder="username"
                    className="username-input"
                    name="username"
                    value={props.usernameText}
                    onChange={props.handleChange}
                />
                <input 
                    type="password"
                    placeholder="password"
                    className="password-input"
                    value={props.passwordText}
                    onChange={props.handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}


export default Login;