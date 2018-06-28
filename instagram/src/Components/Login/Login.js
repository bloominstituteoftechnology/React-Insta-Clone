import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
    }

    updateUsernameState = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitLoginInfo = e => {
        let username = this.state.username;
        let password = this.state.password
        localStorage.setItem('username', username);
        localStorage.setItem('password', password)
        window.location.reload();

    }

    render() {
        return (
            <div>
                <h1>Sign In:</h1>
                <form>
                    <input
                        type='text'
                        placeholder='Username'
                        name='username'
                        value={this.state.username}
                        onChange={this.updateUsernameState}
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        name='username'
                        value={this.state.password}
                        onChange={this.updateUsernameState}
                    />
                    <button onClick={this.submitLoginInfo}>Submit</button>
                </form>
            </div>
        );
    }
}
 
export default Login;