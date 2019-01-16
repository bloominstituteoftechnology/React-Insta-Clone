import React from 'react';
import './Login.css';
import gramhead from '../SearchBar/gramhead.png'

let Login = props => {

    return (
        <div className='login'>
            <div className='login-img'>
                <img src={gramhead} />
            </div>
            <form onSubmit={props.login}>
                <input 
                placeholder='username'
                onChange={props.changer}
                />
                <input
                    placeholder='password'
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )


}

export default Login