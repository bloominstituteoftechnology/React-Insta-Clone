import React from "react";
import "./Login.css"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }

    }

    setUsername = event => {
        this.setState({
          username: event.target.value,
        });
    }

    setPassword = event => {
        this.setState({
          password: event.target.value,
        });
    }

    login = event => {
        event.preventDefault();
        this.props.triggerOnLogin(this.state.username);
        window.location.reload();
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={this.login}>
                    <input 
                        name="username" 
                        placeholder="username" 
                        onChange={this.setUsername} 
                        value={this.state.username}>
                    </input>
                    <input 
                        name="password" 
                        placeholder="password"
                        onChange={this.setPassword}
                        value={this.state.password}>
                    </input>
                    <button name="login">Login</button>
                </form>
            </div>
    )
    }
}

export default Login;