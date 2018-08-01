import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
        }
    }
    save = (event) => {
        this.setState({username: event.target.value})
    }

    login = () => {
        localStorage.setItem("username", `${this.state.username}`)
    }

    render() {
        return (
            <div className="login-containter">
                <form className="login-form">
                    <input className="username-input" placeholder="Enter Username" onChange=/>
                    <input classname="password-input" placeholder="Enter Password" />
                    <button onClick={this.save} className="Button-input" />
                </form>
            </div>

        );
    }

}

export default Login;