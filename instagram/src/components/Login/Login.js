import React from 'react';

const Login = (props) => {

    return (

        <div>
            <form onSubmit={props.login} >
                <input type='text' name='username' placeholder='Username' onKeyDown={props.onKeyDown}/>
                <input type='text' name='password' placeholder="Password" onKeyDown={props.onKeyDown}/>
                <button onClick={props.login}>Login</button>
            </form>
        </div>
        
    )
}

export default Login; 
