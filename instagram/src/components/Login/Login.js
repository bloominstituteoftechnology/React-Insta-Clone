import React from 'react';
import './Login.css';
import './logoLogin.png';

const Login = props => {

    return (
        <section className="login-container">
            <div className="login-form">
                <h1>Login</h1>
                
                <form className="login-here" onSubmit={props.login}>
                    <div className="username">
                        <label htmlFor="username">Phone number, username, or email</label>
                        <input type="text" name="username" className="username" onChange={(e) => {props.updateUsername(e); props.disableLoginButton(e)}}/>
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="password" onChange={props.updatePassword}/>
                    </div>

                    <button className="login" disabled>Log in</button>
                </form>
                <p className="forgot-password">Forgot Password?</p>
            </div>
        </section>
    )
}

export default Login;