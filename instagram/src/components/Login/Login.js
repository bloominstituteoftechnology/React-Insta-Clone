import React from 'react';
import './Login.css';

const Login = props => {

    return (
        <div className='login'>
            <form onSubmit={props.login}>
                <input placeholder='username'/>
                <input placeholder='password'/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )


}

export default Login