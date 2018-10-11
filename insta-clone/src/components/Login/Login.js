import React from 'react';
import './Login.css';

const Login = props => {
    return (
        <div className='authorize'>
            <div className='userLogin'>
                <h2>Please login to continue {}</h2>
                <form onSubmit={props.toggle} className='loginForm'>
                    <input 
                        name='username'
                        type='text'
                        placeholder='Username'
                        onChange={props.onchange}
                        value={props.username}
                    />
                    <input
                        name='userpass'
                        type='password'
                        placeholder='Password'
                        onChange={props.onchange}
                        value={props.userpass}
                    />
                    <button onClick={props.checkPassword}>ENTER</button>
                </form>
            </div>
        </div>
    )
}

export default Login;