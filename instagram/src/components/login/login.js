import React from 'react';

const Login = (props) => {
    return ( 
        <div>
            <form autoComplete="off">
                <input type="text" placeholder="Username" name="username-input"/>
                <input type="password" placeholder="Password" name="password-input"/>
                <button onClick={props.onClick}>Login</button>
            </form>
        </div>
    );
}
 
export default Login;