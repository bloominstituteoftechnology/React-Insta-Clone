import React from 'react';

class Login extends React.Component{
    constructor(){
        super();
    }
    render() {
        return(
            <form className="login-form">
                <input type="text" />
                <input type="password" />
                <button>Login</button>
            </form>
        );
    }
}
export default Login;