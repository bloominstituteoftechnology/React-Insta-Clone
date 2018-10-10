import React from 'react';

const Login = (props) => {
    return (
        <div className='login-info'>
            <input
                className='username'
                placeholder='Username...'
            />
            <input
                className='password'
                placeholder='Password...'
            />
            <button >Login</button>
        </div>
    )
}

export default Login;