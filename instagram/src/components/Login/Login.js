import React, { component } from 'react';
import './login.css';

class Login extends component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
        }
    }

    submitHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    login = () => {
        let user = localStorage.getItem('user');

        if (!user) {
            localStorage.setItem('user', this.state.username) // https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
        }

        window.location.reload();
    }

    render() {
        return (
            <form onSubmit={this.login} >
                <input name="username" type="text" placeholder="username" value={this.state.username} onChange={this.submitHandler} />
                <input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.submitHandler} />
                <button type="submit">Login</button>
            </form>
        )
    }
}

export default Login;