import React from 'react';

const Username = (props) => {
    return (
        <input 
            placeholder="username"
        />
    )
}

const Password = (props) => {
    return (
        <input 
            placeholder="password"
        />
    )    
}

const Login = () => {
    return(
        <div className="login-form">
            <form>
                <Username />
                <Password />
                <button type="submit">Login</button>
            </form>
        </div>
    )

}
export default Login;