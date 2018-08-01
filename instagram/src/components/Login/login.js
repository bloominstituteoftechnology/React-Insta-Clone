import React from 'react';

const login=props=>{
    return (
        <form onSubmit={props.login}>
            <input type='text' placeholder='enter a username' value={props.username}/>
            <input type='password'/>
            <button>Login</button>
        </form>
    )
}
export default login;