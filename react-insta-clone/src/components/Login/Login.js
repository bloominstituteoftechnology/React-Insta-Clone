import React from "react";

const Login = props => {
    return (
        <form onSubmit={props.login}>
        <input  type="text"
                className="login-username"
                placeholder="Username"
                />
        <input  type="text"
                className="login-password"
                placeholder="Password"
                />
        <button onClick={props.login}>Login</button>
        </form>
      )
}

export default Login;