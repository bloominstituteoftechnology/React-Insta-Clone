import React from 'react';
import './Login.css';

const Login = ({login, username, password, change}) => {
    return (
        <div className="login-page">
            <form onSubmit={login}>
                <input 
                    className="username"
                    name="username" 
                    placeholder="Username"
                    value={username}
                    onChange={change}
                    type="text" 
                />
                <input
                    className="password"
                    name="password" 
                    placeholder="password"
                    value={password}
                    onChange={change}
                    type="password"
                />
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
