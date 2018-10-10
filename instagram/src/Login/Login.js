import React, {Component} from 'react';
const Login= prop =>{
    return(
        <div>
            <form>
                <input className="login-user" type='text' placeholder='Username'></input>
                <input className="login-pwd" type='text' placeholder='Password'></input>
            </form>
        </div>
    )
        
}
export default Login;