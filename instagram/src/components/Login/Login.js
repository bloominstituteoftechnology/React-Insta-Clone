import React from 'react';
import './Login.css';

let Login = props => {
    return (
        <form className='login'>
            <input type="text" name="username" value={props.value}/>
            <input type="password" name="password" value={props.value}/>
            <button onClick={props.login}>Log In</button>
        </form>
    )

}

export default Login;