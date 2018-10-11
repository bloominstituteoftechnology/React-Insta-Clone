import React from "react";
import {StyledInput, LoginPage} from "../../styles"
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
            <LoginPage>
                <form onSubmit={this.login}>
                    <StyledInput 
                        login
                        name="username" 
                        placeholder="username" 
                        onChange={this.setUsername} 
                        value={this.state.username}>
                    </StyledInput>
                    <StyledInput 
                        login
                        name="password" 
                        placeholder="password"
                        onChange={this.setPassword}
                        value={this.state.password}>
                    </StyledInput>
                    <button name="login">Login</button>
                </form>
            </LoginPage>
    )
    }
}

export default Login;