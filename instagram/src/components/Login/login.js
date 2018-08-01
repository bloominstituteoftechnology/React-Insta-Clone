import React from 'react';

const Login=props=>{
    return (
        <form onSubmit={props.login}>
            <input type='text' placeholder='enter a username' value={props.username} onChange={(e)=>props.logInChange(e)}/>
            <input type='password'/>
            <button>Login</button>
        </form>
    )
}
export default Login;