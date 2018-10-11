import React from 'react';
import './Login.css';

const Login = ({login, username, password, change, attempted}) => {
    return (
        <div className="login-container">
            <form className="login-page" onSubmit={login} autoComplete="off">
                <div className="login-logo sprite-core"></div>
                <input
                    autoComplete="off"
                    className="username"
                    name="username" 
                    placeholder="Username"
                    value={username}
                    onChange={change}
                    type="text"
                />
                <input
                    autoComplete="off"
                    className="password"
                    name="password" 
                    placeholder="Password"
                    value={password}
                    onChange={change}
                    type="password"
                />
                <button>Login</button>
                <div className="error" style={{ display : `${attempted?'block':'none'}`}}>
                    <h2>Incorrect Login</h2>
                    <h2>Hint: [username:password]</h2>
                </div>
                <p>test:password</p>
            </form>
        </div>
    );
}

export default Login;
