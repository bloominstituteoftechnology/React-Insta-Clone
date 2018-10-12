import React from 'react';

const Login = (props) => {
    return (
        <form className='login-info'>    
            <input
                className='user-login'
                placeholder='Username...'
            />
            <input
                className='password'
                placeholder='Password...'
            />
            <button >Login</button>
        </form>
    )
}

export default Login;