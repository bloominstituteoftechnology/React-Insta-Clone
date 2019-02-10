import React from 'react';
import './Login.css';
const Login = (props) => {

    return (

        <div className="login-container">
            <form className='login-form' onSubmit={props.login} >
                <input type='text' name='username' placeholder='Username' onKeyDown={props.onKeyDown}/>
                <input type='text' name='password' placeholder="Password" onKeyDown={props.onKeyDown}/>
                <button onClick={props.login}>Login</button>
            </form>
        </div>
        
    )
}

export default Login; 
