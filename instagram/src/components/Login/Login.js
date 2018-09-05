import React from 'react';
import './Login.css';

const Login = props => {

    return (
        <section className="login-container">
            <div className="login-form">
                <h1>Login</h1>
                <form className="login-here" onSubmit={props.login}>
                    <input type="text" name="username" className="username" onChange={props.updateUsername}/>
                    <input type="password" name="password" className="password" onChange={props.updatePassword}/>
                    <button className="login">Login</button>
                </form>
            </div>
        </section>
    )
}

export default Login;