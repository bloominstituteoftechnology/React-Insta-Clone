import React from 'react';

const Login = props =>{
    

    return(
        <form className="login-container">
            <input  className="username-input" 
                    value={props.username}
                    onChange={props.handleInput} />
            <input  className="password-input" 
                    value={props.password}
                    onChange={props.handleInput} />
            <button className="login-button" 
                    onClick={props.login} />
        </form>
    )
}

export default Login;