import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    login = event => {
        console.log("hi login function");
        const username = this.state.username;
        // const password = this.state.password;

        localStorage.setItem('username', username);
        const LSUsername = localStorage.getItem('username');
        console.log(LSUsername);

        // localStorage.setItem('password', password);
        // const LSPassword = localStorage.getItem('password');

        

        window.location.reload();
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.handleChanges}
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="password"
                        // value={this.state.password}
                        // onChange={this.handleChanges}
                    />
                </form>

                <button onClick={this.login}>
                    Login
                </button>
            </div>
        )
    }
}

export default Login;