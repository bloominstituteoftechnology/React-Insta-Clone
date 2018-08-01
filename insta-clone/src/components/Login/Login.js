import React from 'react';

const Login = (props) => {
    return(
        <div className="login">
            <input type="text" name="username" placeholder="Username" onChange={props.storeUser}></input>
            <input type="password" name="password" placeholder="Password"></input>
            <button onClick={props.login} >Login</button>
        </div>
    )
}

export default Login;