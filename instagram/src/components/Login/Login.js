import React from 'react';

function LogIn(props){
    return(
        <form onSubmit={props.login}>
            <input 
             type='text'
                name='user'
                placeholder='username'
                value={props.user}
                onChange={props.handleChange} 
            />
            <input
                type='text'
                name='password'
                placeholder='password'
                value={props.password}
                onChange={props.handleChange}
            />
            <button type='submit'>Log In</button>
        </form>
    )
}

export default LogIn;