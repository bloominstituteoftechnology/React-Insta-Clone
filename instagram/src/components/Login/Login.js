import React from 'react';
import './Login.css';

let Login = props => {

    return (
        <div className='login'>
            <form onSubmit={props.login}>
                <input 
                placeholder='username'
                onChange={props.changer}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )


}

export default Login