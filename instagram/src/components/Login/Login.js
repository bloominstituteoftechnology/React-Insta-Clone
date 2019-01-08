import React from 'react';

class Login extends React.Component {
    constructor() {
        super()
        this.setState={
            username : "",
            password : ""
        }
    }
    
    render() {
        return(
            <div>
                <form>
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button>Login</button>
                </form>
            </div>
        )
    }

}

export default Login;