import React, { Component } from 'react'
import './LoginPage.css'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    loginHandler = event => {
        const user = this.state.username
        localStorage.setItem('user', user)
        window.location.reload()
    }

    render() {
        return(
            <form className="login">
                <h2>Instagram</h2>
                <input 
                    className="username"
                    placeholder="Username"
                    type="text"
                    name="username"
                    onChange={this.changeHandler}
                    value={this.state.username}
                ></input>
                <input
                    className="password"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.changeHandler}
                    value={this.state.password}
                ></input>
                <button
                    onClick={this.loginHandler}
                ></button>
            </form>
        )
    }
}

export default Login