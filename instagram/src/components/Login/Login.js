import React from 'react';

const Login = props => {
    return(
        <div className='login'>
            <input placeholder='Username' onChange={props.username}></input>
            <input placeholder='Password'></input>
            <button onClick={props.login}>Login</button>
        </div>
    )
}

export default Login;