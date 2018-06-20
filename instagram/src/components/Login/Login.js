import React from 'react';


const Login = props => {
    return (
        <div>
        <input 
            type='text'
            className='username'
            placeholder='Username'
            defaultValue=''
            onChange={props.handleUser}
            />
        
        <input 
            type='text'
            className='password'
            placeholder='Password'
            defaultValue=''
            onChange={props.handlePassword}
            />
            <button onClick={props.logIn}>Log in</button>
        </div>
    );
}


export default Login;