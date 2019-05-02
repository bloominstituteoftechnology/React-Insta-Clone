import React from "react";
import './Login.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

    }

    handleInputChange = e => {
        console.log('typeing', e.target.name)
        this.setState({ [e.target.name]: e.target.value })
    }

    loginAttempt = e => {
        const user = this.state.username;
        localStorage.setItem("user", user);
        window.location.reload();
    };



    render() {
        return (
            <form className="loginpage">
                <h2>LogIn</h2>
                <input
                    className="login-user"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleInputChange} />

                <input
                    className="login-Password"
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInputChange} />

                <button type="submit" onClick={this.loginAttempt}>
                    LogIn
        </button>

            </form>

        )
    }
}

export default LoginPage;