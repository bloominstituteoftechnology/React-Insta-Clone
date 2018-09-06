import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    }

    handleLoginSubmit = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render() {
        return (
            <div className="lgn-container">
                <h1>Instagram</h1>
                <h4><a>Sign Up</a> or <a>Login</a></h4>
                <div className="lgnfrm-container">
                    <input 
                        type="text" 
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleLoginSubmit}>Log In</button>
                </div>
            </div>
        )
    }   
}

export default Login;