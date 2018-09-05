import React from 'react';

const Login = props => {
    return(
        <div className = 'login-container'>

        <form>
            <input name='username' placeholder='Username'></input>
            <input name='password' placeholder='Password'></input>
            <button type='submit'>Submit</button>
        </form>

        </div>
    )
}

export default Login;