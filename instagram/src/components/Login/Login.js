import React, { Component } from 'react';


const Login = props => {

    return(
        <div className='Login-field'>
           <form onSubmit={props.login}>
           <input placeholder="Username"/>
           <input placeHolder="Password"/>
           <button type='submit'>Login</button>
           </form>
            
        </div>
    );
}

export default Login;