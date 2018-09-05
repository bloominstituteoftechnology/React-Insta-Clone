import React, { Component } from 'react';


class Login extends Component {
    constructor(props) {
        super(props);
    }


   Login = () => {
        localStorage.setItem("username", this.state)
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    render() {
        return (
            <div>
                <div>
                    <form>
                        Username:
                        <input
                            className="user-input"
                            type="text"
                            name = "username"/>
                        Password
                        <input
                            className="pass-input"
                            type="text"
                            name="password" />
                        />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        )
    }
    
}

export default Login;