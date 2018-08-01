import React from "react";

const Login = props => {
    return (
        <div>
        <input  type="text"
                className="login-username"
                placeholder="Username"
                />
        <input  type="text"
                className="login-password"
                placeholder="Password"
                />
        <button onClick={props.login}>Login</button>
        </div>
      )
}

export default Login;