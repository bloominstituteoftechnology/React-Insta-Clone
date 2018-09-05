import React, { Component } from 'react';


class Login extends Component {
    constructor(props) {
        super(props);
        }
    


   login = (event) => {
        localStorage.setItem("username", event.target.username.value)
    }


    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.login}>
                        Username:
                        <input
                            className="user-input"
                            type="text"
                            name = "username"/>
                        Password:
                        <input
                            className="pass-input"
                            type="password"
                            name="password"
                        />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        )
    }
    
}

export default Login;