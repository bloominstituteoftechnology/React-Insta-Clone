import React from 'react';
import './LogIn.css'

const LoginSubmit = (props) => {
    return (
        <div className='main-login'>
        <h1> Instagram Login </h1>
        <div className='flex'>
            <h2> username: </h2>
           <form>
                <input value={props.valueOne} onChange={props.uInputHandler} className='login-input'></input>
            </form>
        </div>

        <div className='flex'>
            <h2> password: </h2>
            <form>
                <input value={props.valueTwo} onChange={props.pInputHandler} className='login-input'></input>
            </form>
        </div>

        <button className='login-button' onClick={props.submitHandler}><p>Not Registered? Sign Up</p></button>

        <button className='login-button' onClick={props.loginHandler}><p>Log In</p></button>
        </div>
    )
}

export default LoginSubmit;