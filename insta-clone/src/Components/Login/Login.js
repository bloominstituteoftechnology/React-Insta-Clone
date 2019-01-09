import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { username, password} = this.state;
        return (
            <div>
                <h2>please authenticate</h2>
                <div>
                    <input
                        placeholder="enter username"
                        name="username"
                        type="username"
                        value={username}
                        handleInput={this.handleInput}
                    />
                    <input
                        placeholder="enter password"
                        name="password"
                        type="password"
                        value={password}
                        handleInput={this.handleInput}
                    />
                    <button>Login</button>
                </div>
            </div>
        )
    }
}

export default Login;