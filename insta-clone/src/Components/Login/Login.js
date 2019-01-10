import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUsers: [],
            newUser: {
                username: '',
                password: '',
            }
        }
    }

    handleInput = (e) => {
        this.setState({ 
            newUser: {
                ...this.state.newUser,
                [e.target.name]: e.target.value 
            }
        })
    }

    //persist loggedin users to localstorage
    login = (e) => {
        const loggedInUsersArray = this.state.loggedInUsers;
        const newUser = {
            username: this.state.newUser.username,
            password: this.state.newUser.password
        }
        loggedInUsersArray.push(newUser);
        this.setState ({
            newUser: {
                username: '',
                password: '',
            }
        })
        localStorage.setItem("loggedInUsersArray", JSON.stringify(loggedInUsersArray));
    }

    render() {
        const { username, password } = this.state.newUser;
        return (
            <div>
                <h2>please login</h2>
                <div>
                <form onSubmit={this.login}>
                    <input
                        placeholder="enter username"
                        name="username"
                        type="text"
                        value={username}
                        onChange={this.handleInput}
                    />
                    <input
                        placeholder="enter password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleInput}
                    />
                    <button onClick={this.login}>Login</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Login;