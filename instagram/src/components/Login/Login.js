import React from 'react';

const Login = props => {

    return (
        <form onSubmit={props.loginEvent}>
            <input type="text" placeholder="Username" onChange={props.handleUsername} />
            <input type="password" placeholder="Password" onChange={props.handlePassword} />
            <button>Login</button>
        </form>
    );
}

export default Login;