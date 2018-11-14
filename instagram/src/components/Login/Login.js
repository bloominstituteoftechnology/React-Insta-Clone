import React, { Component } from 'react';


const Login = props => {

    return(
        <div className='Login-field'>
           <form onSubmit={props.login}>
           <input 
            type='text'
            name='inputText'
            placeholder="Username"
            value={props.inputText}
            onChange={props.handleChange}
           />
           <input placeholder="Password"/>
           <button type='submit'>Login</button>
           </form>
            
        </div>
    );
}

export default Login;