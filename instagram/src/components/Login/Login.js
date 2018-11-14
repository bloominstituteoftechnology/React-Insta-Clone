import React, { Component } from 'react';

const LoginPage = props => {
    return (
        <div className='login-page'>
            <form>
                <input type='text' placeholder='Username' />
                <input type='text' placeholder='Password' />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;