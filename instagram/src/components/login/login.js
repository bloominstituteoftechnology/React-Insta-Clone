import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    };

    handleLoginChange = event => {
        this.setState({username: event.target.value})
      };

    loginHandler = (e) => {
        const user = this.state.username;
        console.log(user);
        localStorage.setItem('user', user);
    };

    render() {
    return ( 
        <div className="login d-flex justify-content-center col-12">
            <form autoComplete="off" className="login-container d-flex flex-column justify-content-center">
                <input 
                    className="login-el"
                    type="text" 
                    placeholder="Username" 
                    name="username" 
                    onChange={this.handleLoginChange}
                />
                <input
                    className="login-el"
                    type="password" 
                    placeholder="Password" 
                    name="password"
                />
                <button  
                    className="login-el"
                    onClick={this.loginHandler}>
                    Login
                </button>
            </form>
        </div>
    )};
}
 
export default Login;