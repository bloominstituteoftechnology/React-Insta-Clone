import React from 'react';
import './LogIn.css'
import styled from 'styled-components'

const Inandout = styled.button `
font-size:1em;
font-weight: bold;
border-radius: 20px;
background-color:lightcyan;
margin:10px;
width: 200px;
padding:20px;
`
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

        <Inandout className='login-button' onClick={props.submitHandler}><p>Not Registered? Sign Up</p></Inandout>

        <Inandout className='login-button' onClick={props.loginHandler}><p>Log In</p></Inandout>
        </div>
    )
}

export default LoginSubmit;