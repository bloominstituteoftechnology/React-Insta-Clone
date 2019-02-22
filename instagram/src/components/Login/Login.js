import React from "react";

const Login = props => (
    <div>
        <form onSubmit={props.login}>
            <input type="text" name="login-name" id="login-name"></input>
            <input type="password" name="login-password" id="login-password"></input>
            <input type="submit" value="Log In"></input>
        </form>
    </div>
);

export default Login;