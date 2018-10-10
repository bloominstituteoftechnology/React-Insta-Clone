import React from "react";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            usernameText: "",
            passwordText: ""
        }
    }

    userChangeHandler = ev => {
        this.setState({ usernameText: ev.target.value })
    }

    passChangeHandler = ev => {
        this.setState({ passwordText: ev.target.value })
    }

    submit = ev => {
        if (this.state.usernameText !== "") {
            window.localStorage.setItem("username", this.state.usernameText);
            window.localStorage.setItem("password", this.state.passwordText);
        } else {
            ev.preventDefault();
        }
    }

    render() {
        return(
            <div className="login-screen">
                <header>    
                    <h1>Instagram</h1>
                </header>
                <form>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={this.state.usernameText}
                        onChange={this.userChangeHandler}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={this.state.passwordText}
                        onChange={this.passChangeHandler}
                    />
                    <button type="submit" onClick={this.submit}>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;